# ดาวนำทาง — Star Guide

เว็บแอปคู่มือกลุ่มดาว 24 กลุ่ม พร้อม Text-to-Speech ทั้งภาษาไทยและอังกฤษ

## Stack

| Layer     | Technology                         |
|-----------|-------------------------------------|
| Frontend  | React 18 + Vite                    |
| Backend   | Node.js + Express                  |
| Security  | Helmet, express-rate-limit, HTTPS  |
| Container | Docker + Nginx (optional)          |
| Hosting   | VPS / Cloudflare Pages / Vercel    |

---

## โครงสร้างไฟล์

```
starguide/
├── client/                      ← React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ConstellationSVG.jsx   ← วาด SVG กลุ่มดาว
│   │   │   ├── TapZone.jsx            ← จัดการ tap interaction
│   │   │   ├── LangToggle.jsx         ← ปุ่มเลือกภาษา
│   │   │   └── StarBadge.jsx          ← แสดงชื่อกลุ่มดาว
│   │   ├── data/
│   │   │   └── constellations.js      ← ข้อมูลดาว 24 กลุ่ม
│   │   ├── hooks/
│   │   │   ├── useStarfield.js        ← canvas animation
│   │   │   └── useSpeech.js           ← Web Speech API
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                      ← Node.js backend
│   ├── routes/
│   │   └── constellations.js    ← GET /api/constellations/:id
│   ├── data/
│   │   └── constellations.js    ← ข้อมูลฝั่ง server
│   ├── index.js                 ← Express app + security
│   └── package.json
│
├── nginx/
│   └── nginx.conf               ← Reverse proxy + SSL
├── Dockerfile                   ← Multi-stage build
├── docker-compose.yml
├── .env.example
└── package.json                 ← Root scripts (dev/build/docker)
```

---

## เริ่มต้นใช้งาน

### วิธีที่ 1 — Development (แนะนำสำหรับเริ่มต้น)

```bash
# 1. Clone หรือ copy โปรเจกต์
cd starguide

# 2. ติดตั้ง dependencies ทั้ง client และ server
npm run install:all

# 3. รัน dev server พร้อมกัน (client port 5173, server port 3000)
npm run dev
```

เปิด http://localhost:5173?star=01

---

### วิธีที่ 2 — Docker (production-ready)

```bash
# สร้าง SSL certificate ก่อน (ถ้ามี domain แล้ว)
# certbot certonly --standalone -d yourdomain.com

# แก้ nginx/nginx.conf: เปลี่ยน yourdomain.com เป็นโดเมนจริง

# รัน
docker compose up --build -d

# ดู logs
docker compose logs -f
```

---

### วิธีที่ 3 — Deploy บน Cloudflare Pages (ฟรี, ไม่ต้อง Docker)

```bash
# Build client
cd client && npm install && npm run build

# ไป Cloudflare Pages → Create project → Upload dist/ folder
# เลือก domain ฟรี หรือเชื่อม custom domain
# HTTPS อัตโนมัติ
```

---

## URL Parameters

| Parameter | ค่า        | ตัวอย่าง              |
|-----------|------------|----------------------|
| `star`    | 01 – 24    | `?star=06` (Scorpius) |

---

## API Endpoints

```
GET /api/health                  → { status: "ok" }
GET /api/constellations          → list ทั้ง 24 กลุ่ม
GET /api/constellations/:id      → ข้อมูล + พิกัดดาว
```

ตัวอย่าง response:
```json
{
  "data": {
    "id": "01",
    "th": { "name": "นายพราน (โอไรออน)", "text": "..." },
    "en": { "name": "Orion (The Hunter)", "text": "..." },
    "stars": [[50,18],[38,35],...],
    "lines": [[0,1],[0,2],...],
    "labels": { "0": "Betelgeuse", "8": "Rigel" }
  }
}
```

---

## Security ที่ใช้อยู่

| มาตรการ                  | ทำงานที่ไหน    | รายละเอียด                              |
|--------------------------|----------------|------------------------------------------|
| Helmet.js                | Node.js server | CSP, X-Frame-Options, noSniff, HSTS      |
| Rate limiting (global)   | Node.js server | 200 req / 15 นาที                        |
| Rate limiting (API)      | Node.js server | 60 req / นาที                            |
| Input whitelist          | Route handler  | star ID ต้องอยู่ใน Set เท่านั้น          |
| Body size limit          | Express        | สูงสุด 10kb                              |
| HTTPS redirect           | Nginx          | HTTP → HTTPS อัตโนมัติ                  |
| Non-root Docker user     | Dockerfile     | รันด้วย user `appuser` ไม่ใช่ root      |
| .env ไม่ติด git          | .gitignore     | secret ไม่หลุด repository               |

---

## การใช้งาน

- **แตะครั้งแรก** → เริ่มต้นระบบ
- **แตะสองครั้งเร็ว ๆ** → ฟังคำอธิบายกลุ่มดาว (TH/EN)
- **ปุ่ม TH/EN** → เปลี่ยนภาษา

---

## ขั้นตอนต่อไปที่ทำได้

- [ ] เพิ่ม React Router เพื่อเลือกกลุ่มดาวจากหน้า index
- [ ] เพิ่ม PWA (manifest + service worker) สำหรับใช้ offline
- [ ] เพิ่ม database (PostgreSQL) ถ้าต้องการ user favorites
- [ ] เพิ่ม CI/CD ด้วย GitHub Actions
