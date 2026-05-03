# ดาวนำทาง — Star Guide

เว็บแอปคู่มือกลุ่มดาว 24 กลุ่ม สำหรับผู้พิการทางสายตา ใช้คู่กับการ์ดสัมผัสที่มีพื้นผิวนูนเป็นรูปกลุ่มดาว มีคำบรรยายเสียง TH/EN ทุกกลุ่ม

## Stack

| Layer     | Technology                              |
|-----------|------------------------------------------|
| Frontend  | React 18 + Vite                         |
| Backend   | Node.js + Express (มี API แต่ยังไม่ได้ใช้) |
| TTS       | Bundled WAV (TH) + Web Speech API (EN)  |
| Security  | Helmet, express-rate-limit              |
| Container | Docker + Nginx (optional)               |

---

## โครงสร้างไฟล์

```
starguide/
├── client/                              ← React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── SwipeCarousel.jsx        ← จัด tap / double-tap / swipe / arrow keys
│   │   │   ├── ConstellationSlide.jsx   ← วาดดาว + เส้นเชื่อม + label
│   │   │   ├── StarBadge.jsx            ← ป้ายชื่อกลุ่มดาวด้านบน
│   │   │   ├── StarSelector.jsx/.css    ← bottom sheet เลือกกลุ่มดาว
│   │   │   ├── LangToggle.jsx           ← ปุ่ม TH/EN
│   │   │   ├── VoiceGuideToggle.jsx     ← ปุ่ม 🔈/🔊 เปิด-ปิดเสียงนำทาง UI
│   │   │   ├── Orb.jsx                  ← ลูกออร์บแสดงสถานะเสียง
│   │   │   └── InfoModal.jsx            ← modal "i" ข้อมูลอ้างอิง
│   │   ├── hooks/
│   │   │   ├── useStarfield.js          ← canvas animated star background
│   │   │   ├── useSpeech.js             ← เล่นเสียง (WAV ไทย / Web Speech อังกฤษ)
│   │   │   ├── useVoiceGuide.js         ← state + Web Speech announce สำหรับเสียงนำ UI (จำค่าใน localStorage)
│   │   │   └── useReference.js          ← โหลด HTML อ้างอิงสำหรับ InfoModal
│   │   ├── data/constellations.js       ← ข้อมูลดาว 24 กลุ่ม (slug ID)
│   │   ├── audio/                       ← ไฟล์ .wav เสียงบรรยายไทย
│   │   ├── utils/audioMap.js            ← map slug → audio URL
│   │   ├── App.jsx / App.css / main.jsx
│   │   └── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                              ← Express backend (เปิด API ไว้ — ยังไม่ใช้งาน)
│   ├── routes/constellations.js         ← GET /api/constellations[/:id]
│   ├── data/constellations.js           ← mirror — ใช้ numeric ID "01"–"24"
│   ├── index.js                         ← Helmet + rate limit + static dist
│   └── package.json
│
├── nginx/nginx.conf                     ← reverse proxy + Let's Encrypt SSL
├── Dockerfile                           ← multi-stage build (client → server)
├── docker-compose.yml                   ← app + nginx
├── .env.example                         ← copy เป็น .env
└── package.json                         ← root scripts (dev / build / docker)
```

> **หมายเหตุ:** `client/src/data/constellations.js` ใช้ slug (`"orion"`, `"ursa-minor"`) แต่ `server/data/constellations.js` ใช้ numeric (`"01"`–`"24"`) — ปัจจุบัน client ไม่ได้เรียก server เลย ถ้าจะเชื่อม API ต้องตัดสินใจให้ ID ทั้งสองตรงกันก่อน

---

## เริ่มต้นใช้งาน

### Development (แนะนำสำหรับเริ่มต้น)

```bash
cd starguide
npm run install:all          # ติดตั้ง dep ทั้ง client/ และ server/
npm run dev                  # client :5173, server :3000 พร้อมกัน
```

เปิด http://localhost:5173

### Build & start production server

```bash
npm run build                # build client → client/dist
NODE_ENV=production npm run start    # server เสิร์ฟ dist + เปิด API
```

### Docker (สำหรับ deploy บน VPS)

```bash
# 1. แก้ nginx/nginx.conf — เปลี่ยน yourdomain.com เป็นโดเมนจริง
# 2. ทำ SSL cert: certbot certonly --standalone -d yourdomain.com
# 3. mount cert dir ไปที่ ./nginx/certs
docker compose up --build -d
docker compose logs -f
```

### Static deploy (Cloudflare Pages / Vercel / Netlify)

ถ้าไม่ต้องการ backend สามารถ deploy แค่ frontend ได้:

```bash
npm run build                # ผลลัพธ์อยู่ที่ client/dist
# upload client/dist เข้า Cloudflare Pages / Vercel / Netlify
```

---

## URL Parameters

| Parameter | ค่า                          | ตัวอย่าง                |
|-----------|-------------------------------|--------------------------|
| `star`    | slug จาก `VALID_STAR_IDS`     | `?star=ursa-minor`       |

slug ที่ใช้ได้: `aquarius`, `aquila`, `aries`, `auriga`, `bootes`, `cancer`, `canis-major`, `canis-minor`, `capricornus`, `cassiopeia`, `cygnus`, `gemini`, `leo`, `libra`, `lyra`, `orion`, `phoenix`, `pisces`, `sagittarius`, `scorpius`, `taurus`, `ursa-major`, `ursa-minor`, `virgo`

---

## API Endpoints (มีอยู่ใน server แต่ client ยังไม่เรียก)

| Method | Path                          | Response                            |
|--------|-------------------------------|--------------------------------------|
| GET    | `/api/health`                 | `{ status: "ok", timestamp }`        |
| GET    | `/api/constellations`         | list 24 กลุ่ม `[{ id, th, en }]`      |
| GET    | `/api/constellations/:id`     | ข้อมูลกลุ่มเดี่ยว (id แบบ `"01"`–`"24"`)|

---

## วิธีใช้งาน

| Action                           | ผลลัพธ์                              |
|----------------------------------|---------------------------------------|
| แตะหน้าจอครั้งแรก                  | เริ่มต้น + ฟัง intro                  |
| แตะสองครั้ง (double-tap)          | ฟัง / หยุดเสียงคำบรรยายกลุ่มดาวนั้น    |
| ปัด (swipe) ซ้าย / ขวา           | เปลี่ยนกลุ่มดาว                        |
| ปุ่มลูกศร ‹ ›  หรือ Arrow keys     | เปลี่ยนกลุ่มดาว                        |
| ปุ่ม **☆** มุมขวาบน               | เปิด bottom sheet เลือกกลุ่มดาวจาก grid |
| ปุ่ม **i** มุมซ้ายล่าง            | เปิด modal ข้อมูลอ้างอิงรายละเอียด     |
| ปุ่ม **⟳** มุมซ้ายล่าง            | รีเฟรชหน้า                            |
| ปุ่ม **🔈 / 🔊** มุมขวาล่าง       | เปิด-ปิดเสียงนำทาง UI (Web Speech, EN) |
| ปุ่ม **TH / EN** มุมขวาล่าง       | สลับภาษา (เปลี่ยนทั้ง UI และเสียง)     |

---

## Security

| มาตรการ                  | ทำงานที่                | รายละเอียด                                 |
|--------------------------|-------------------------|---------------------------------------------|
| Helmet.js                | Express server          | CSP, X-Frame-Options, noSniff, HSTS         |
| Rate limit (global)      | Express server          | 200 req / 15 นาที                           |
| Rate limit (API)         | Express server          | 60 req / นาที                               |
| Input whitelist          | Route handler           | star ID ต้องอยู่ใน `VALID_STAR_IDS` เท่านั้น  |
| Body size limit          | Express                 | 10 KB                                        |
| HTTPS redirect           | Nginx                   | HTTP → HTTPS อัตโนมัติ                      |
| Non-root Docker user     | Dockerfile              | รันด้วย `appuser` ไม่ใช่ root                |
| `.env` gitignored        | `.gitignore`            | ไม่หลุดเข้า repository                      |

---

## Notes

- Audio ภาษาไทยเป็น `.wav` ที่ bundle ไว้ใน [client/src/audio/](client/src/audio) — Vite fingerprint ตอน build
- ภาษาอังกฤษใช้ `window.speechSynthesis` (Web Speech API)
- Coordinate ของดาวเป็น Hipparcos J2000 → gnomonic projection → normalize เข้า 0–100
