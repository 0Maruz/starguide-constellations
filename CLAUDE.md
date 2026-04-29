# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install all dependencies (client + server)
npm run install:all

# Run both client (port 5173) and server (port 3000) concurrently
npm run dev

# Build client for production
npm run build

# Start production server (serves built client from client/dist)
npm run start

# Docker
npm run docker:up    # build and start
npm run docker:down  # stop
```

No test runner is configured. There is no lint step.

The app is accessed via URL parameter: `http://localhost:5173?star=aries` (name slugs like `aries`, `canis-major`, `ursa-minor`).

## Architecture

A bilingual (Thai/English) constellation guide — a single-page touch app designed for tablet/mobile use in a planetarium or exhibit context.

### Constellation ID system

Constellations are keyed by lowercase name slug (e.g. `"aries"`, `"canis-major"`, `"ursa-minor"`). The 24 slugs are defined in `VALID_STAR_IDS` in `client/src/data/constellations.js`. `STAR_IDS` in `App.jsx` holds them in alphabetical order — this order determines prev/next navigation.

**Important:** `server/data/constellations.js` is a separate copy with its own key scheme (numeric `"01"`–`"24"`). The frontend does **not** call the API — it reads from its own bundled data. The server copy only serves the REST API.

### Data shape (per constellation)

```js
{
  th: { name, text },         // Thai display name and spoken description
  en: { name, text },         // English display name and spoken description
  stars: [[x, y], ...],       // positions in 0–100 grid
  lines: [[a, b], ...],       // index pairs defining connecting lines
  labels: { i: "StarName" },  // sparse map of index → label for named stars
}
```

### TTS routing (`client/src/hooks/useSpeech.js`)

`speak(id, text, lang)` routes based on `lang`:
- **Thai** → looks up `audioMap[id]` for a pre-recorded WAV (played at 1.15× speed via `HTMLAudioElement`). Falls back to Web Speech if no mapping exists.
- **English** → always uses browser `speechSynthesis` (rate 0.95, lang `en-US`).

WAV files live in `client/src/audio/`. The mapping is in `client/src/utils/audioMap.js`. The `"intro"` key maps to `Tutorial.wav` (the welcome message).

**Known gap:** `audioMap.js` maps `"sagittarius"` → `Sagittarius.wav`, but that file is missing from `client/src/audio/` — Thai audio for Sagittarius silently falls back to Web Speech. The `useSpeech.js` file header also contains a stale comment ("plays Google Drive audio file") from a prior version; the implementation now uses bundled local files.

To add a new Thai WAV: drop `<Name>.wav` in `client/src/audio/`, then add the entry to `audioMap.js` using the same `new URL("../audio/<Name>.wav", import.meta.url).href` pattern.

### Rendering stack (z-index layers)

| z | Element | Notes |
|---|---------|-------|
| 0 | `<canvas>` | Animated starfield background (`useStarfield`) |
| 2 | `<svg>` | `ConstellationSVG` — imperative DOM, not JSX |
| ~5–14 | UI chrome | `StarBadge`, nav buttons, `LangToggle`, `Orb`, speech bar |
| 15 | `TapZone` | Topmost — captures all touch/click events |

### Key components

- **`App.jsx`** — owns all state (`lang`, `starId`, `started`, `flash`); reads `?star=` param; syncs URL on navigation; plays intro speech on first tap.
- **`ConstellationSVG`** — builds SVG imperatively via DOM API on each render/resize. Scales and centers the constellation to fit the available viewport area (accounting for badge and hint bar heights). The layout constants `BADGE_H = 76` and `HINT_H = 76` are hardcoded pixel values that **must match** the CSS `.star-badge` and `.speech-bar` heights — if those change in `App.css`, update these constants too.
- **`TapZone`** — distinguishes single-tap vs double-tap within a 300 ms window. Prevents ghost click from touch events via timestamp check.
- **`Orb`** — decorative pulsing orb; reflects audio state via CSS classes (`active`, `error`, or null).
- **`StarBadge`** — receives `index` (1-based position in sorted `STAR_IDS`) and `total` for the "N / 24" counter.

### Interaction model

1. First tap → unlocks `AudioContext`, sets `started = true`, plays intro audio.
2. Double-tap → speaks the constellation description for the current language.
3. Double-tap while playing → stops audio.
4. Arrow buttons → navigate prev/next in alphabetical order.

### Server API

The Express server exposes two routes (frontend does not call these; they exist for external consumers):

- `GET /api/constellations` — returns `{ data: [{ id, th, en }] }` (all 24, using numeric IDs)
- `GET /api/constellations/:id` — returns full data for one constellation by numeric ID (`"01"`–`"24"`)
- `GET /api/health` — liveness check

### Production deployment

In production (Docker), nginx (`nginx/nginx.conf`) terminates SSL and proxies everything to the Express server on port 3000. Express serves the static React build from `client/dist` and handles API requests. Update `nginx.conf`'s `server_name` to your domain before deploying.

### Environment

Copy `.env.example` to `.env`. Only `PORT` and `NODE_ENV` are used. `VITE_ELEVENLABS_API_KEY` is a dead leftover from an earlier version.
