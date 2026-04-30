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

Constellations are keyed by lowercase name slug (e.g. `"aries"`, `"canis-major"`, `"ursa-minor"`). The 24 slugs are defined in `VALID_STAR_IDS` in `client/src/data/constellations.js`. `STAR_IDS` in `App.jsx` holds them in alphabetical order — this order determines prev/next navigation and swipe direction.

**Important:** `server/data/constellations.js` is a separate copy with its own key scheme (numeric `"01"`–`"24"`). The frontend does **not** call the API — it reads from its own bundled data. The server copy only serves the REST API. The two files have drifted: the server copy still uses the original stylized 0–100 grid coordinates from before the Stellarium rebuild. If you regenerate the frontend data, the server copy is **not** automatically updated.

### Data shape (per constellation)

```js
{
  th: { name, text },         // Thai display name and spoken description
  en: { name, text },         // English display name and spoken description
  stars: [[x, y], ...],       // positions in 0–100 grid (see "Constellation data" below)
  lines: [[a, b], ...],       // index pairs defining connecting lines
  labels: { i: "StarName" },  // sparse map of index → label for named stars
}
```

### Constellation data

`client/src/data/constellations.js` is **derived data**, not hand-authored. It is generated from:

- **Lines**: Stellarium's skyculture line definitions (https://github.com/Stellarium/stellarium):
  - Most constellations use `skycultures/modern_rey/index.json` (H.A. Rey's iconic "looks-like-the-thing" patterns)
  - Six are reverted to `skycultures/modern/index.json` (minimalist) because Rey is too crowded for a small touch display: `aquarius, bootes, virgo, sagittarius, taurus, scorpius`
- **Coordinates**: Hipparcos J2000 ICRS (Vizier `I/239/hip_main`)
- **Labels**: IAU proper names from SIMBAD, capped at the top 5 brightest named stars per constellation

Each constellation is **gnomonically projected on its own tangent plane** (centered on its mean RA/Dec), then translated/scaled so the larger axis fills the 0–100 frame with a 10% margin. The header comment of `constellations.js` documents this; per-entry comments tag each as `(modern)` or `(Rey)`.

The `th`/`en` `name`/`text` blocks are hand-authored (myth/description text) and must be preserved when regenerating; positions/lines/labels can be rebuilt mechanically.

### TTS routing (`client/src/hooks/useSpeech.js`)

`speak(id, text, lang)` routes based on `lang`:
- **Thai** → looks up `audioMap[id]` for a pre-recorded WAV (played at 1.15× speed via `HTMLAudioElement`). Falls back to Web Speech if no mapping exists.
- **English** → always uses browser `speechSynthesis` (rate 0.95, lang `en-US`).

WAV files live in `client/src/audio/` (24 constellations + `Tutorial.wav`). The mapping is in `client/src/utils/audioMap.js`. The `"intro"` key maps to `Tutorial.wav` (the welcome message).

To add a new Thai WAV: drop `<Name>.wav` in `client/src/audio/`, then add the entry to `audioMap.js` using the same `new URL("../audio/<Name>.wav", import.meta.url).href` pattern.

### Rendering stack (z-index layers)

| z | Element | Notes |
|---|---------|-------|
| 0 | `<canvas>` | Animated starfield background (`useStarfield`) |
| 1 | `.nebula-*` | Decorative blurred gradients |
| 2 | `.planet-deco` | Decorative planet (bottom-right) |
| 15 | `SwipeCarousel` | Full-screen pointer/touch capture; renders 3 slides (prev / current / next) |
| 20 | `StarBadge`, `.speech-bar` | Top/bottom UI chrome |
| 21 | `Orb` | Decorative pulsing orb above speech bar |
| 25 | `.nav-btn`, `LangToggle` | Side nav buttons + language toggle |
| 30 | `.error-toast` | Error toast |

The constellation drawing now lives **inside** the carousel slides (z 15) — it translates with the swipe gesture. UI chrome (badge, speech bar, nav buttons, lang toggle, orb) sits on top and does not move.

### Key components

- **`App.jsx`** — owns all state (`lang`, `starId`, `started`, `flash`); reads `?star=` param; syncs URL on navigation; plays intro speech on first tap. Owns `handleIndexChange` (called by carousel snap), `goPrev`/`goNext` (nav buttons, no longer wrap around — disabled at edges), `handleSingleTap`, `handleDoubleTap`.
- **`SwipeCarousel`** — the only input layer. Renders three slots (prev / current / next) and translates them imperatively via `translate3d` + `requestAnimationFrame`. Handles pointer drag (touch + mouse), velocity-based snap, edge rubber-band, single-tap vs double-tap detection (300 ms window), tap ripples, and `ArrowLeft`/`ArrowRight` keyboard navigation. Emits `onIndexChange(newIndex)` after the snap animation completes. Slot DOM nodes are keyed by slot index (`slot-0/1/2`), not constellation id, so the same nodes are reused across navigations and the inner `ConstellationSlide` rebuilds its SVG via `useEffect` when `entry` changes.
- **`ConstellationSlide`** — builds an inline (`position: absolute; inset: 0`) SVG imperatively via DOM API. Sized to its parent slot via `ResizeObserver`. The layout constants `BADGE_H = 76` and `HINT_H = 76` are hardcoded pixel values that **must match** the CSS `.star-badge` and `.speech-bar` heights — if those change in `App.css`, update these constants too.
- **`Orb`** — decorative pulsing orb; reflects audio state via CSS classes (`active`, `error`, or null).
- **`StarBadge`** — receives `index` (1-based position in sorted `STAR_IDS`) and `total` for the "N / 24" counter.

### Interaction model

1. First tap → unlocks `AudioContext`, sets `started = true`, plays intro audio.
2. Double-tap → speaks the constellation description for the current language.
3. Double-tap while playing → stops audio.
4. Swipe left/right (or `ArrowLeft`/`ArrowRight`, or side nav buttons) → navigate prev/next in alphabetical order. Navigation **wraps**: from the first constellation, swiping back lands on the 24th, and vice versa. The current audio is stopped on every navigation.

### Server API

The Express server exposes two routes (frontend does not call these; they exist for external consumers):

- `GET /api/constellations` — returns `{ data: [{ id, th, en }] }` (all 24, using numeric IDs)
- `GET /api/constellations/:id` — returns full data for one constellation by numeric ID (`"01"`–`"24"`)
- `GET /api/health` — liveness check

### Production deployment

In production (Docker), nginx (`nginx/nginx.conf`) terminates SSL and proxies everything to the Express server on port 3000. Express serves the static React build from `client/dist` and handles API requests. Update `nginx.conf`'s `server_name` to your domain before deploying.

### Environment

Copy `.env.example` to `.env`. Only `PORT` and `NODE_ENV` are used. `VITE_ELEVENLABS_API_KEY` is a dead leftover from an earlier version.
