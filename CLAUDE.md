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

# Start production server (serves built client from server/dist)
npm run start

# Docker
npm run docker:up    # build and start
npm run docker:down  # stop
```

No test runner is configured. There is no lint step.

The app is accessed via URL parameter: `http://localhost:5173?star=01` (IDs 01–24).

## Architecture

This is a bilingual (Thai/English) constellation guide — a single-page touch app designed for tablet/mobile use in a planetarium or exhibit context.

### Data flow

The constellation data (`server/data/constellations.js` and `client/src/data/constellations.js`) is duplicated — the server copy is served via REST API, the client copy is used directly by the frontend without API calls. The API exists but the frontend reads from the bundled local data.

### TTS (Text-to-Speech)

`client/src/hooks/useSpeech.js` implements a dual-voice strategy:
- **Thai text** → plays a pre-recorded `.wav` file from `storage2.me-qr.com` (hosted audio)
- **English text** → browser Web Speech API (`speechSynthesis`)

Audio URLs are mapped by star ID in `client/src/utils/audioMap.js`. IDs 14, 17, and 18 still have placeholder `REPLACE_*` URLs and will fall back to Web Speech.

### Key components

- `App.jsx` — root component; owns all state (lang, started, flash); reads `?star=` URL param on mount
- `useStarfield` — canvas-based animated star background (decorative)
- `useSpeech` — TTS hook (see above)
- `ConstellationSVG` — renders SVG of constellation lines and star dots from coordinate data
- `TapZone` — invisible overlay that distinguishes single-tap vs double-tap gestures
- `LangToggle` — TH/EN language switcher button
- `StarBadge` — displays constellation name and ID

### Interaction model

1. First tap → unlocks AudioContext and sets `started = true`
2. Double-tap → speaks the constellation description for current language
3. Double-tap while playing → stops audio

### Server

Express app with Helmet, two rate limiters (200 req/15 min global, 60 req/min on `/api`). In development it only serves the API. In production (`NODE_ENV=production`) it also serves the built React app from `client/dist`.

Vite dev server proxies `/api` to `http://localhost:3000`.

### Environment

Copy `.env.example` to `.env`. Only `PORT` and `NODE_ENV` are required. `VITE_ELEVENLABS_API_KEY` is a legacy leftover from an earlier version (ElevenLabs TTS was replaced by the Drive/Web Speech approach).
