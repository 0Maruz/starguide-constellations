import { Router } from "express";
import { constellations, VALID_STAR_IDS } from "../data/constellations.js";

export const constellationRouter = Router();

// GET /api/constellations — list all IDs and names
constellationRouter.get("/", (req, res) => {
  const list = [...VALID_STAR_IDS].map(id => ({
    id,
    th: constellations[id].th.name,
    en: constellations[id].en.name,
  }));
  res.json({ data: list });
});

// GET /api/constellations/:id — single constellation
constellationRouter.get("/:id", (req, res) => {
  const { id } = req.params;

  // Strict whitelist validation — no regex, no wildcard
  if (!VALID_STAR_IDS.has(id)) {
    return res.status(404).json({ error: "Constellation not found" });
  }

  const entry = constellations[id];
  res.json({ data: { id, ...entry } });
});
