import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import { constellationRouter } from "./routes/constellations.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// ── 1. Security headers via Helmet ──────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc:  ["'self'"],
        scriptSrc:   ["'self'"],
        styleSrc:    ["'self'", "'unsafe-inline'"],  // needed for inline styles
        imgSrc:      ["'self'", "data:"],
        connectSrc:  ["'self'"],
        fontSrc:     ["'self'"],
        objectSrc:   ["'none'"],
        frameSrc:    ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    // Prevent clickjacking
    frameguard: { action: "deny" },
    // Prevent MIME sniffing
    noSniff: true,
    // Remove X-Powered-By header
    hidePoweredBy: true,
    // Force HTTPS (enable in production)
    hsts: process.env.NODE_ENV === "production"
      ? { maxAge: 31536000, includeSubDomains: true, preload: true }
      : false,
  })
);

// ── 2. Rate limiting ─────────────────────────────────────────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60,
  message: { error: "API rate limit exceeded." },
});

app.use(globalLimiter);
app.use("/api", apiLimiter);

// ── 3. Body parsing ──────────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" })); // small limit — no large payloads needed

// ── 4. API routes ────────────────────────────────────────────────────────────
app.use("/api/constellations", constellationRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── 5. Serve React build (production) ───────────────────────────────────────
if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../client/dist");
  app.use(express.static(distPath, {
    maxAge: "1d",
    etag: true,
  }));
  // SPA fallback — let React Router handle client-side routes
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// ── 6. Global error handler ──────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV || "development"}]`);
});
