// พิกัดดาว mapped จากข้อมูลดาราศาสตร์จริง (J2000 RA/Dec → equirectangular projection)
// x,y = 0-100, (0,0) = top-left, north=up, east=left (as seen from Earth)
// RA → x: east=left so x = normalize(-RA)
// Dec → y: north=up so y = normalize(-Dec)
// Source: Hipparcos / IAU / SIMBAD catalog positions

export const VALID_STAR_IDS = new Set([
  "01","02","03","04","05","06","07","08","09","10",
  "11","12","13","14","15","16","17","18","19","20",
  "21","22","23","24"
]);

export const constellations = {

  // ── 01 ORION ──────────────────────────────────────────────────────────────
  // Meissa(head top), Betelgeuse(L shoulder, RA=5.92h Dec=+7.4°),
  // Bellatrix(R shoulder), belt tilts Mintaka→Alnilam→Alnitak (NW→SE)
  // Rigel(R foot, bright), Saiph(L foot), sword hangs below belt
  "01": {
    th: { name: "นายพราน (โอไรออน)", text: "กลุ่มดาวนายพรานเป็นกลุ่มดาวที่สวยงามที่สุดบนท้องฟ้า รูปร่างเหมือนนักล่าที่ยืนตระหง่าน มีเข็มขัดสามดาวเรียงเฉียง Mintaka Alnilam Alnitak และดาบห้อยลงมา ดาวเบเทลจุสสีแดงที่บ่า ไรเจลสว่างที่เท้า" },
    en: { name: "Orion (The Hunter)", text: "Orion is the most magnificent constellation in the sky. Three belt stars tilt diagonally — Mintaka, Alnilam, Alnitak — with a sword hanging below. Red Betelgeuse marks the left shoulder, brilliant Rigel the right foot." },
    stars: [
      [48.4, 8.0 ],  // 0 Meissa λ — head (top center)
      [8.0,  18.8],  // 1 Betelgeuse α — L shoulder (bright red) RA=5.92h
      [70.1, 23.4],  // 2 Bellatrix γ — R shoulder RA=5.42h
      [55.9, 51.8],  // 3 Mintaka δ — belt W (slightly higher) RA=5.53h
      [47.2, 55.7],  // 4 Alnilam ε — belt center RA=5.60h
      [37.8, 58.9],  // 5 Alnitak ζ — belt E (slightly lower) RA=5.68h
      [92.0, 85.7],  // 6 Rigel β — R foot (bright) RA=5.24h
      [23.4, 92.0],  // 7 Saiph κ — L foot RA=5.80h
      [49.1, 75.9],  // 8 ι Ori — sword top
      [49.7, 73.6],  // 9 θ1 Ori — sword (Trapezium)
    ],
    lines: [
      [0,1],[0,2],          // head → shoulders
      [1,3],[2,5],          // shoulders → belt ends
      [3,4],[4,5],          // belt
      [1,6],[2,7],          // shoulders → feet
      [5,8],[8,9],          // sword hanging down
    ],
    labels: { 1:"Betelgeuse", 6:"Rigel", 4:"Alnilam" }
  },

  // ── 02 CASSIOPEIA ─────────────────────────────────────────────────────────
  // W shape: Caph(β)–Schedar(α)–γCas–Ruchbah(δ)–Segin(ε)
  // Dec all ~56–64°, RA spans 0.15h–1.91h → W opens left-to-right
  "02": {
    th: { name: "แคสสิโอเปีย", text: "กลุ่มดาวแคสสิโอเปียรูปตัว W ชัดเจน อยู่ใกล้ขั้วฟ้าเหนือ มองเห็นได้ตลอดทั้งปีในซีกโลกเหนือ อยู่ตรงข้ามกระบวยใหญ่โดยมีดาวเหนือเป็นจุดกึ่งกลาง" },
    en: { name: "Cassiopeia", text: "Cassiopeia forms a clear W or M shape depending on orientation. It circles Polaris and never sets for northern hemisphere observers, serving as a year-round guide to the north." },
    stars: [
      [92.0, 61.2],  // 0 Caph β — left end of W, Dec=59.1°
      [67.0, 92.0],  // 1 Schedar α — dip-left, Dec=56.5°
      [54.0, 42.8],  // 2 γ Cas — top-center peak, Dec=60.7°
      [30.8, 48.5],  // 3 Ruchbah δ — dip-right, Dec=60.2°
      [8.0,  8.0 ],  // 4 Segin ε — right end, Dec=63.7°
    ],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: { 0:"Caph", 1:"Schedar", 2:"γ Cas", 3:"Ruchbah", 4:"Segin" }
  },

  // ── 03 URSA MAJOR ─────────────────────────────────────────────────────────
  // Big Dipper: bowl (Dubhe/Merak/Phecda/Megrez) + curved handle to Alkaid
  // RA ~11h–13.8h, Dec ~49°–62°; bowl opens south-east
  "03": {
    th: { name: "หมีใหญ่ (เออร์ซาเมเจอร์)", text: "กระบวยใหญ่เป็นกลุ่มดาวที่รู้จักกันดีที่สุด ดาว Dubhe และ Merak ที่ขอบกระบวยชี้ตรงไปยังดาวเหนือ ด้ามกระบวยโค้งออกไปสิ้นสุดที่ Alkaid" },
    en: { name: "Ursa Major (Great Bear)", text: "The Big Dipper is the most recognized star pattern. Pointer stars Dubhe and Merak point to Polaris. Arc from the handle to Arcturus, then spike to Spica — classic navigation technique." },
    stars: [
      [91.0, 8.0 ],  // 0 Dubhe α — bowl top-right pointer, Dec=61.8°
      [92.0, 44.3],  // 1 Merak β — bowl bottom-right pointer, Dec=56.4°
      [65.6, 62.4],  // 2 Phecda γ — bowl bottom-left, Dec=53.7°
      [54.7, 39.9],  // 3 Megrez δ — bowl top-left/handle start, Dec=57.0°
      [35.1, 47.1],  // 4 Alioth ε — handle 1, Dec=56.0°
      [20.0, 54.1],  // 5 Mizar ζ — handle 2 (double star), Dec=54.9°
      [8.0,  92.0],  // 6 Alkaid η — handle tip, Dec=49.3°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,0],  // bowl
      [3,4],[4,5],[5,6],         // handle
    ],
    labels: { 0:"Dubhe", 1:"Merak", 5:"Mizar", 6:"Alkaid" }
  },

  // ── 04 URSA MINOR ─────────────────────────────────────────────────────────
  // Little Dipper: Polaris at handle tip (near Dec=89.3°), bowl opens down
  // RA varies widely (circumpolar), normalized around polar projection
  "04": {
    th: { name: "หมีเล็ก (เออร์ซาไมเนอร์)", text: "กระบวยเล็กมีดาวโพลาริสหรือดาวเหนืออยู่ที่ปลายด้าม แทบไม่เคลื่อนที่ตลอดคืน Kochab และ Pherkad คือดาวสว่างของกระบวย" },
    en: { name: "Ursa Minor (Little Bear)", text: "The Little Dipper's handle tip is Polaris, the North Star. Kochab and Pherkad are called the Guardians of the Pole. Unlike the Big Dipper, the Little Dipper is harder to see in light-polluted skies." },
    stars: [
      [92.0, 8.0 ],  // 0 Polaris α — pole star, Dec=89.3° (handle tip, placed top-right)
      [8.0,  20.9],  // 1 δ UMi — handle, Dec=86.6°
      [12.3, 42.8],  // 2 ε UMi — handle, Dec=82.0°
      [18.1, 63.3],  // 3 ζ UMi — bowl corner, Dec=77.8°
      [20.3, 92.0],  // 4 Pherkad γ — bowl, Dec=71.8°
      [23.1, 80.8],  // 5 Kochab β — bowl bright, Dec=74.2°
      [15.0, 73.1],  // 6 η UMi — bowl, Dec=75.8°
    ],
    lines: [
      [0,1],[1,2],[2,3],         // handle
      [3,4],[4,5],[5,6],[6,3],   // bowl
    ],
    labels: { 0:"Polaris", 5:"Kochab", 4:"Pherkad" }
  },

  // ── 05 LEO ────────────────────────────────────────────────────────────────
  // Sickle (backward ?) = head/mane with Regulus at base
  // Body triangle: Zosma–Chertan–Denebola (tail right)
  "05": {
    th: { name: "สิงโต (เลโอ)", text: "กลุ่มดาวสิงโตมีกลุ่ม Sickle (เคียว) รูปเครื่องหมายคำถามกลับหัวเป็นหัวและแผงคอ ดาว Regulus สว่างที่หัวใจ และสามเหลี่ยม Denebola–Zosma–Chertan เป็นสะโพก" },
    en: { name: "Leo (The Lion)", text: "Leo's backward question mark (the Sickle) forms the lion's head and mane, with brilliant Regulus at the bottom. A triangle of stars forms the haunches, ending with Denebola at the tail." },
    stars: [
      [80.7, 92.0],  // 0 Regulus α — heart, bottom of sickle (bright) Dec=12.0°
      [81.4, 63.3],  // 1 η Leo — sickle lower Dec=16.8°
      [92.0, 8.0 ],  // 2 Rasalas μ — sickle top, Dec=26.0°
      [74.7, 23.5],  // 3 Adhafera ζ — sickle upper, Dec=23.4°
      [72.3, 44.9],  // 4 Algieba γ — sickle curve, Dec=19.8°
      [79.5, 63.3],  // 5 Coxa θ — sickle loop close, Dec=16.8°
      [33.2, 40.8],  // 6 Zosma δ — back, Dec=20.5°
      [33.1, 71.3],  // 7 Chertan θ — haunches, Dec=15.4°
      [8.0,  76.4],  // 8 Denebola β — tail tip, Dec=14.6°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],  // sickle loop
      [0,7],[7,6],[6,8],[8,7],               // body to tail
    ],
    labels: { 0:"Regulus", 8:"Denebola", 4:"Algieba" }
  },

  // ── 06 SCORPIUS ───────────────────────────────────────────────────────────
  // Head top-left, Antares at heart, long tail curves right then hooks W
  // RA 15.98h–17.96h, Dec -19.8° to -43.2°
  "06": {
    th: { name: "แมงป่อง (สกอร์เปียส)", text: "กลุ่มดาวแมงป่องรูปตัว J ขนาดใหญ่ ดาวแอนทาเรสสีแดงเรืองแสงที่หัวใจ หางโค้งงอสวยงามสิ้นสุดที่เหล็กไน Shaula และ Lesath" },
    en: { name: "Scorpius (The Scorpion)", text: "Scorpius forms a magnificent J-shape. Red supergiant Antares glows at the heart. The long curving tail sweeps south and hooks back, ending at the stinger stars Shaula and Lesath." },
    stars: [
      [91.0, 8.0 ],  // 0 Graffias β — head top-left, Dec=-19.8°
      [86.1, 11.1],  // 1 ω Sco — head, Dec=-20.7°
      [92.0, 30.6],  // 2 π Sco — head far left, Dec=-26.1°
      [90.9, 18.1],  // 3 δ Dschubba — head center, Dec=-22.6°
      [76.2, 28.7],  // 4 σ Sco — upper body, Dec=-25.6°
      [70.4, 31.8],  // 5 Antares α — heart (red, bright), Dec=-26.4°
      [65.8, 38.1],  // 6 τ Sco — body, Dec=-28.2°
      [55.8, 59.9],  // 7 ε Sco — tail upper, Dec=-34.3°
      [54.5, 73.4],  // 8 μ1 Sco — tail mid, Dec=-38.0°
      [40.2, 92.0],  // 9 ζ1 Sco — tail lower, Dec=-43.2°
      [28.8, 91.2],  // 10 η Sco — tail curve, Dec=-43.0°
      [22.4, 91.1],  // 11 θ Sargas — tail, Dec=-43.0°
      [15.1, 80.8],  // 12 ι Sco — tail hook, Dec=-40.1°
      [8.0,  70.0],  // 13 κ Sco — tail hook right, Dec=-37.1°
      [25.0, 70.0],  // 14 Shaula λ — stinger, Dec=-37.1°
      [26.2, 70.7],  // 15 Lesath υ — stinger 2, Dec=-37.3°
    ],
    lines: [
      [2,0],[0,1],[1,3],                      // head top
      [2,4],[3,4],[4,5],                      // to Antares
      [5,6],[6,7],[7,8],[8,9],               // tail upper
      [9,10],[10,11],[11,12],[12,13],        // tail curve
      [13,14],[14,15],                        // stinger
    ],
    labels: { 5:"Antares", 14:"Shaula" }
  },

  // ── 07 GEMINI ─────────────────────────────────────────────────────────────
  // Castor(left) and Pollux(right) at top, bodies run south in parallel
  // RA 6.25h–7.76h, Dec 12.9°–31.9°
  "07": {
    th: { name: "คนคู่ (เจมินี)", text: "กลุ่มดาวคนคู่แทนฝาแฝด Castor(ซ้าย) และ Pollux(ขวา) สองศีรษะดาวสว่างอยู่บนสุด ร่างทั้งสองลงมาขนานกัน Alhena ที่เท้า" },
    en: { name: "Gemini (The Twins)", text: "Gemini's twin figures stand side by side. Bright Castor and Pollux mark their heads at the top. Each body runs downward in parallel, ending at their feet near bright Alhena." },
    stars: [
      [18.0, 8.0 ],  // 0 Castor α — left head, Dec=31.9°
      [8.0,  25.1],  // 1 Pollux β — right head, Dec=28.0°
      [53.9, 37.9],  // 2 μ Tejat — Castor body, Dec=22.5°
      [31.4, 51.8],  // 3 δ Wasat — inner body, Dec=22.0°
      [92.0, 49.5],  // 4 η Propus — Castor lower-left, Dec=22.5°
      [65.6, 37.9],  // 5 ε Mebsuda — Pollux body, Dec=25.1°
      [18.6, 30.1],  // 6 ν Gem — Pollux knee, Dec=26.9°
      [45.4, 58.1],  // 7 ξ Gem — lower mid, Dec=20.6°
      [84.6, 49.5],  // 8 μ Gem foot (reuse η approx), Dec=22.5°
      [70.9, 76.5],  // 9 Alhena γ — bright foot, Dec=16.4°
      [63.8, 92.0],  // 10 ξ Alzirr — toe, Dec=12.9°
    ],
    lines: [
      [0,2],[2,4],[4,8],[8,9],    // Castor body line
      [1,6],[6,3],[3,7],[7,9],[9,10],  // Pollux body line
      [0,1],                       // heads connected
      [2,5],[5,3],                 // cross body connects
    ],
    labels: { 0:"Castor", 1:"Pollux", 9:"Alhena" }
  },

  // ── 08 TAURUS ─────────────────────────────────────────────────────────────
  // Pleiades top-left, V-shaped Hyades = face, Aldebaran = eye
  // Two horns: Elnath (N) and ζ Tau (S)
  "08": {
    th: { name: "วัว (ทอรัส)", text: "กลุ่มดาววัวมีรูป V ของ Hyades เป็นหน้า ดาว Aldebaran สีส้มเป็นตาวัว เขาทั้งสองยาวยื่นขึ้น กลุ่มดาวลูกไก่ Pleiades อยู่ที่บ่า" },
    en: { name: "Taurus (The Bull)", text: "The V-shaped Hyades cluster forms the bull's face with orange Aldebaran as its fiery eye. Two horns sweep upward. The beautiful Pleiades star cluster marks the bull's shoulder." },
    stars: [
      [92.0, 31.5],  // 0 Pleiades η Tau — top-left shoulder, RA=3.75h Dec=24.1°
      [66.0, 75.7],  // 1 γ Tau — Hyades V, Dec=15.6°
      [63.6, 65.7],  // 2 δ1 Tau — Hyades, Dec=17.5°
      [59.4, 57.1],  // 3 ε Tau/Ain — Hyades, Dec=19.2°
      [67.4, 92.0],  // 4 θ1 Tau — Hyades bottom, Dec=12.5°
      [54.0, 71.1],  // 5 Aldebaran α — eye (orange, bright), Dec=16.5°
      [16.5, 8.0 ],  // 6 Elnath β — N horn tip, RA=5.44h Dec=28.6°
      [8.0,  46.9],  // 7 ζ Tau — S horn tip, Dec=21.1°
      [80.1, 78.9],  // 8 λ Tau — neck, Dec=15.0°
    ],
    lines: [
      [0,8],[8,1],              // Pleiades → neck → Hyades
      [1,2],[2,3],[3,5],[5,4],[4,1],  // Hyades V face
      [5,6],                    // N horn (Aldebaran → Elnath)
      [5,7],                    // S horn
    ],
    labels: { 5:"Aldebaran", 6:"Elnath", 0:"Pleiades" }
  },

  // ── 09 ARIES ──────────────────────────────────────────────────────────────
  // Small 4-star arc. Hamal brightest at left, δ Ari at far right
  "09": {
    th: { name: "แกะ (เอรีส์)", text: "กลุ่มดาวแกะเป็นกลุ่มดาวจักรราศีขนาดเล็ก มี 4 ดาวหลัก ดาว Hamal สว่างที่สุด" },
    en: { name: "Aries (The Ram)", text: "Aries is a small zodiac constellation with four main stars in a gentle curve. Hamal is its brightest star. Though small, it was historically significant as the starting point of the zodiac." },
    stars: [
      [77.0, 8.0 ],  // 0 Hamal α — brightest, Dec=23.5°
      [90.4, 61.5],  // 1 Sheratan β — Dec=20.8°
      [92.0, 92.0],  // 2 Mesarthim γ — Dec=19.3°
      [8.0,  83.3],  // 3 δ Ari — far right, Dec=19.7°
    ],
    lines: [[0,1],[1,2],[0,3]],
    labels: { 0:"Hamal", 1:"Sheratan" }
  },

  // ── 10 PISCES ─────────────────────────────────────────────────────────────
  // N circlet (loop top-left) + W fish (line to right), tied at Alrescha
  // RA 0.5h–3.6h, Dec 2.8°–30.1°
  "10": {
    th: { name: "ปลา (ไพซีส)", text: "กลุ่มดาวปลาแทนปลาสองตัวผูกกันที่ดาว Alrescha วงกลมทางเหนือเป็นปลาตัวหนึ่ง เส้นดาวทางตะวันตกเป็นปลาอีกตัว" },
    en: { name: "Pisces (The Fish)", text: "Pisces depicts two fish joined by a cord at Alrescha. The northern circlet forms one fish, and a line of stars forms the other. Despite being faint, it covers a large area of sky." },
    stars: [
      [50.8, 92.0],  // 0 Alrescha α — knot, Dec=2.8°
      [58.4, 72.3],  // 1 ω Psc — N circlet, Dec=9.2°
      [64.4, 53.3],  // 2 N circlet, Dec=15.3°
      [69.8, 16.7],  // 3 N circlet top, Dec=27.3°
      [73.3, 8.0 ],  // 4 N circlet peak, Dec=30.1°
      [77.8, 34.9],  // 5 N circlet, Dec=21.3°
      [81.8, 77.2],  // 6 N circlet lower, Dec=7.6°
      [87.2, 83.2],  // 7 ι Psc, Dec=5.6°
      [92.0, 76.2],  // 8 circlet close, Dec=7.9°
      [46.5, 72.4],  // 9 W fish upper, Dec=9.2°
      [39.7, 92.0],  // 10 W fish, Dec=2.8°
      [24.7, 79.4],  // 11 η Psc, Dec=6.9°
      [8.0,  53.8],  // 12 η Psc tail, Dec=15.2°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],  // N circlet
      [0,9],[9,10],[10,11],[11,12],                             // W fish
    ],
    labels: { 0:"Alrescha", 12:"η Psc" }
  },

  // ── 11 VIRGO ──────────────────────────────────────────────────────────────
  // Spica at bottom-left, Porrima at center, Vindemiatrix at top
  // RA 11.8h–13.6h, Dec -11.2° to +11.0°
  "11": {
    th: { name: "หญิงสาว (เวอร์โก)", text: "กลุ่มดาวหญิงสาวเป็นกลุ่มดาวขนาดใหญ่อันดับสอง ดาว Spica สว่างมากที่ด้านล่าง Porrima เป็นดาวคู่งาม" },
    en: { name: "Virgo (The Maiden)", text: "Virgo is the second largest constellation. Spica blazes at the lower left — one of the nearest massive stars. The Virgo Galaxy Cluster with thousands of galaxies lies within its borders." },
    stars: [
      [15.7, 92.0],  // 0 Spica α — bright, bottom-left, Dec=-11.2°
      [25.4, 70.7],  // 1 θ Vir — Dec=-5.5°
      [50.8, 55.1],  // 2 γ Porrima — center, Dec=-1.4°
      [68.4, 43.7],  // 3 η Vir — Dec=+1.5°
      [92.0, 42.9],  // 4 β Zavijava — top-right, Dec=+1.8°
      [34.2, 8.0 ],  // 5 ε Vindemiatrix — top, Dec=+11.0°
      [39.5, 36.7],  // 6 δ Vir — Dec=+3.4°
      [8.0,  51.9],  // 7 ζ Vir — right, Dec=-0.6°
      [64.3, 70.6],  // 8 τ Vir — Dec=-5.5°
      [74.7, 82.5],  // 9 109 Vir — Dec=-8.7°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],  // main spine
      [2,8],[8,9],               // right arm
      [2,6],[6,5],               // left arm up
      [3,6],                     // cross
      [1,7],[7,0],               // lower right
    ],
    labels: { 0:"Spica", 5:"Vindemiatrix", 2:"Porrima" }
  },

  // ── 12 LIBRA ──────────────────────────────────────────────────────────────
  // Scales shape: Zubenelgenubi(S pan), Zubeneschamali(N pan), γ Brachium top
  "12": {
    th: { name: "คันชั่ง (ไลบรา)", text: "กลุ่มดาวคันชั่งแทนตาชั่งยุติธรรม ดาว Zubenelgenubi และ Zubeneschamali เป็นชื่ออาหรับหมายถึงก้ามแมงป่องใต้และเหนือ เพราะเคยเป็นส่วนหนึ่งของแมงป่อง" },
    en: { name: "Libra (The Scales)", text: "Libra is the only inanimate zodiac constellation. Its star names Zubenelgenubi and Zubeneschamali mean southern and northern scorpion claws — reflecting its former connection to Scorpius." },
    stars: [
      [58.2, 35.4],  // 0 Zubenelgenubi α — S pan, Dec=-16.0°
      [28.8, 8.0 ],  // 1 Zubeneschamali β — N pan, Dec=-9.4°
      [8.0,  30.3],  // 2 γ Brachium — top beam, Dec=-14.8°
      [43.3, 73.5],  // 3 ι Lib — lower left, Dec=-25.3°
      [11.7, 92.0],  // 4 θ Lib — lower right, Dec=-29.8°
      [92.0, 24.4],  // 5 σ Lib — far left, Dec=-13.4°
    ],
    lines: [
      [5,0],[0,1],[1,2],    // beam
      [2,4],[4,3],[3,0],    // lower triangle
      [0,2],                // center cross
    ],
    labels: { 0:"Zubenelgenubi", 1:"Zubeneschamali" }
  },

  // ── 13 SAGITTARIUS ────────────────────────────────────────────────────────
  // Teapot: handle=left(E), spout=right(W), lid=top, base=bottom
  // RA 18.1h–19.2h, Dec -35° to -21°
  "13": {
    th: { name: "คนยิงธนู (ซาจิททาเรียส)", text: "กลุ่มดาวย่อยรูปกาน้ำชา (Teapot) ที่โดดเด่นมาก พวยกาชี้ไปยังใจกลางกาแล็กซีทางช้างเผือก 'ไอน้ำ' ที่ลอยขึ้นคือแสงดาวล้านดวงในแกนกาแล็กซี" },
    en: { name: "Sagittarius (The Archer)", text: "The Teapot asterism is unmistakable. Its spout points toward the Milky Way's center. In dark skies, the Milky Way looks like steam rising from the spout — it's actually billions of galactic core stars." },
    stars: [
      [67.8, 88.3],  // 0 Kaus Australis ε — handle bottom, Dec=-34.4°
      [72.0, 60.8],  // 1 Kaus Media δ — handle mid, Dec=-29.8°
      [62.8, 34.3],  // 2 Kaus Borealis λ — handle top/lid-L, Dec=-25.4°
      [81.5, 8.0 ],  // 3 φ Sgr — lid top-left, Dec=-21.1°
      [27.0, 39.6],  // 4 σ Nunki — lid top-right (bright), Dec=-26.3°
      [17.4, 47.8],  // 5 τ Sgr — spout top, Dec=-27.7°
      [8.0,  61.2],  // 6 ζ Ascella — spout mid, Dec=-29.9°
      [48.4, 64.4],  // 7 δ Sgr — base center, Dec=-29.8°
      [92.0, 64.4],  // 8 γ Sgr — base left (E side), Dec=-30.4°
      [81.5, 92.0],  // 9 base lower, Dec=-35°
    ],
    lines: [
      [0,1],[1,2],          // handle
      [2,3],[3,4],          // lid
      [4,5],[5,6],          // spout
      [6,7],[7,8],[8,0],    // base
      [2,8],[1,7],          // internals
    ],
    labels: { 0:"Kaus Australis", 4:"Nunki", 2:"Kaus Borealis" }
  },

  // ── 14 CAPRICORNUS ────────────────────────────────────────────────────────
  // Inverted triangle / arrowhead. RA 20.3h–21.8h, Dec -12.5° to -29.8°
  "14": {
    th: { name: "แพะทะเล (แคปริคอร์นัส)", text: "กลุ่มดาวแพะทะเลรูปสามเหลี่ยมหัวกลับ เป็นกลุ่มดาวโบราณมากกว่า 3,000 ปี บาบิโลนรู้จักในฐานะแพะปลา" },
    en: { name: "Capricornus (Sea Goat)", text: "Capricornus forms an inverted triangle shape. One of the oldest recorded constellations, known to the Babylonians over 3,000 years ago as the divine sea-goat Enki." },
    stars: [
      [92.0, 8.0 ],  // 0 Algedi α — top-left, Dec=-12.5°
      [88.8, 23.0],  // 1 Dabih β — top, Dec=-14.8°
      [71.2, 92.0],  // 2 ψ Cap — bottom-left, Dec=-25.3°
      [65.5, 90.3],  // 3 ω Cap — bottom, Dec=-25.0°
      [45.6, 90.3],  // 4 ζ Cap — bottom, Dec=-25.0°
      [31.4, 73.2],  // 5 ε Cap — lower-right, Dec=-22.4°
      [8.0,  31.8],  // 6 Deneb Algedi δ — right, bright, Dec=-16.1°
      [14.5, 68.0],  // 7 γ Cap — lower far right, Dec=-21.6°
      [46.7, 39.1],  // 8 θ Cap — center, Dec=-17.2°
      [59.9, 39.1],  // 9 ι Cap — center-left, Dec=-17.2°
    ],
    lines: [
      [0,1],[1,9],[9,2],[2,3],[3,4],  // top arc and bottom
      [4,5],[5,6],[6,7],[7,4],         // right side
      [8,5],[9,8],[0,8],               // internals
    ],
    labels: { 0:"Algedi", 6:"Deneb Algedi" }
  },

  // ── 15 AQUARIUS ───────────────────────────────────────────────────────────
  // Man pouring water. Y-shaped water jar at center-top
  // RA 21.5h–22.9h, Dec -20.7° to +1.4°
  "15": {
    th: { name: "คนแบกหม้อน้ำ (อะควอเรียส)", text: "กลุ่มดาวคนแบกหม้อน้ำมีกลุ่ม Water Jar รูปตัว Y ที่โดดเด่น สายน้ำดาวไหลลงมา ดาว Sadalsuud หมายถึง 'ดาวมงคลที่สุด'" },
    en: { name: "Aquarius (Water Bearer)", text: "Aquarius depicts a figure pouring water. The Y-shaped Water Jar asterism is its most distinctive feature. A stream of stars flows southward toward Fomalhaut in Piscis Austrinus." },
    stars: [
      [92.0, 34.4],  // 0 Sadalsuud β — bright top, Dec=-5.6°
      [57.4, 14.4],  // 1 Sadalmelik α — Dec=-0.3°
      [77.6, 49.3],  // 2 ε Aqr — jar center, Dec=-9.5°
      [40.7, 34.4],  // 3 μ Aqr — Dec=-5.6°
      [67.2, 56.4],  // 4 ν Aqr — Dec=-11.4°
      [34.1, 13.3],  // 5 ζ Aqr — Dec=-0.0°
      [40.9, 8.0 ],  // 6 γ Sadachbia — top, Dec=+1.4°
      [10.1, 42.0],  // 7 π Aqr — Dec=-7.6°
      [8.0,  73.3],  // 8 δ Skat — foot, Dec=-15.8°
      [31.9, 92.0],  // 9 λ Aqr — Dec=-20.7°
      [13.1, 64.9],  // 10 τ Aqr — Dec=-13.6°
      [56.8, 65.9],  // 11 ι Aqr — Dec=-13.9°
      [46.2, 42.8],  // 12 θ Aqr — Dec=-7.8°
    ],
    lines: [
      [0,2],[1,2],[0,1],          // jar top Y
      [2,4],[4,11],[11,9],        // stream left
      [1,5],[5,6],                // upper right
      [5,7],[7,10],[10,8],[8,9],  // stream down
      [10,12],[12,0],             // body return
    ],
    labels: { 0:"Sadalsuud", 1:"Sadalmelik", 8:"Skat" }
  },

  // ── 16 CANCER ─────────────────────────────────────────────────────────────
  // Faint Y-shape with Beehive (M44) at center
  // RA 8.2h–9.0h, Dec 9.2°–21.5°
  "16": {
    th: { name: "ปู (แคนเซอร์)", text: "กลุ่มดาวปูจางที่สุดในจักรราศี แต่กระจุกดาวรังผึ้ง M44 ที่ใจกลางมองเห็นด้วยตาเปล่าในคืนมืด มีดาวมากกว่า 1,000 ดวง" },
    en: { name: "Cancer (The Crab)", text: "Cancer is the faintest zodiac constellation, but hosts the magnificent Beehive Cluster (M44) — naked-eye visible and containing over 1,000 stars. Binoculars reveal dozens of individual stars." },
    stars: [
      [41.2, 73.7],  // 0 M44 Beehive — center, Dec=11.9°
      [35.4, 8.0 ],  // 1 Asellus Borealis γ — top-left donkey, Dec=21.5°
      [32.9, 30.7],  // 2 Asellus Australis δ — top donkey, Dec=18.2°
      [8.0,  73.7],  // 3 Acubens α — left claw, Dec=11.9°
      [83.7, 92.0],  // 4 β Cnc — right claw, Dec=9.2°
      [92.0, 34.1],  // 5 ζ Cnc — upper right, Dec=17.6°
      [78.6, 8.0 ],  // 6 λ Cnc — top right, Dec=21.5°
    ],
    lines: [
      [3,0],[0,2],[2,1],    // left Y arm
      [0,4],[2,5],[5,6],    // right and top
      [1,0],[6,2],
    ],
    labels: { 0:"Beehive M44", 3:"Acubens" }
  },

  // ── 17 CANIS MAJOR ────────────────────────────────────────────────────────
  // Sirius at top, body runs south-east, triangle in body
  // RA 6.38h–7.40h, Dec -16.7° to -32.5°
  "17": {
    th: { name: "สุนัขใหญ่ (คานิสเมเจอร์)", text: "ดาวซิริอัสสว่างที่สุดบนท้องฟ้า ชาวอียิปต์โบราณเรียกว่า Sopdet ใช้ทำนายน้ำท่วมไนล์ ห่างจากโลกเพียง 8.6 ปีแสง" },
    en: { name: "Canis Major (Great Dog)", text: "Sirius, at magnitude -1.46, is the brightest star in the night sky. The ancient Egyptians called it Sopdet and based their calendar on its annual return. It's only 8.6 light-years away." },
    stars: [
      [61.3, 8.0 ],  // 0 Sirius α — top, brightest in sky, Dec=-16.7°
      [92.0, 14.6],  // 1 Mirzam β — upper-left, Dec=-18.0°
      [48.1, 26.7],  // 2 ν CMa — upper-right, Dec=-20.2°
      [29.4, 45.9],  // 3 ο2 CMa — body, Dec=-23.8°
      [29.5, 59.5],  // 4 Wezen δ — body lower, Dec=-26.4°
      [42.8, 73.2],  // 5 Adhara ε — bright lower-left, Dec=-29.0°
      [49.9, 92.0],  // 6 Furud ζ — bottom, Dec=-32.5°
      [8.0,  75.0],  // 7 Aludra η — far right lower, Dec=-29.3°
    ],
    lines: [
      [0,1],[0,2],        // Sirius to shoulders
      [2,3],[3,4],[4,5],  // body
      [5,6],[5,7],        // feet
      [1,4],              // diagonal body
    ],
    labels: { 0:"Sirius", 5:"Adhara" }
  },

  // ── 18 CANIS MINOR ────────────────────────────────────────────────────────
  // Just two stars: Procyon (α, bright) and Gomeisa (β)
  "18": {
    th: { name: "สุนัขเล็ก (คานิสไมเนอร์)", text: "กลุ่มดาวสุนัขเล็กมีเพียงสองดาวเด่น ดาว Procyon ห่างจากโลก 11.5 ปีแสง เป็นมุมหนึ่งของสามเหลี่ยมฤดูหนาว" },
    en: { name: "Canis Minor (Little Dog)", text: "One of the smallest constellations with just two notable stars. Procyon is only 11.5 light-years away and forms the Winter Triangle with Sirius and Betelgeuse." },
    stars: [
      [8.0,  92.0],  // 0 Procyon α — bright left, RA=7.66h Dec=5.2°
      [92.0, 8.0 ],  // 1 Gomeisa β — upper right, RA=7.45h Dec=8.3°
    ],
    lines: [[0,1]],
    labels: { 0:"Procyon", 1:"Gomeisa" }
  },

  // ── 19 DRACO ──────────────────────────────────────────────────────────────
  // Head = quadrilateral (Eltanin/Rastaban/ξ/ν), tail winds around pole
  // RA 11.5h–19.2h (circumpolar), Dec 51°–73°
  "19": {
    th: { name: "มังกร (ดราโก)", text: "กลุ่มดาวมังกรพันรอบขั้วฟ้าเหนือเป็นรูปยาวคดเคี้ยว ดาว Thuban เคยเป็นดาวเหนือในสมัยสร้างพีระมิด Khufu เมื่อ 2700 ปีก่อนคริสตกาล" },
    en: { name: "Draco (The Dragon)", text: "Draco winds around the north pole in a long sinuous trail. Thuban was Earth's pole star in 2700 BCE — the era of pyramid construction. The dragon's head forms a distinct quadrilateral." },
    stars: [
      [21.8, 92.0],  // 0 Eltanin γ — head top-right (brightest), Dec=51.5°
      [26.6, 88.8],  // 1 Rastaban β — head top-left, Dec=52.3°
      [30.5, 35.7],  // 2 ξ Dra — head bottom-left, Dec=65.7°
      [26.3, 77.4],  // 3 ν Dra — head bottom-right, Dec=55.2°
      [38.7, 52.4],  // 4 μ Dra — neck, Dec=61.5°
      [92.0, 21.5],  // 5 λ Dra — tail distant, Dec=69.3°
      [80.7, 19.6],  // 6 κ Dra — tail, Dec=69.8°
      [8.0,  28.1],  // 7 Altais δ — tail far right, Dec=67.7°
      [42.7, 64.0],  // 8 ζ Dra — body, Dec=65.7° (approx)
      [38.7, 52.4],  // 9 η Dra — (reuse μ approx area)
      [49.5, 62.4],  // 10 θ Dra — Dec=58.6°
      [49.5, 62.4],  // 11 ι Dra — (near θ)
      [64.1, 41.0],  // 12 Thuban α — former pole star, Dec=64.4°
      [17.4, 8.0 ],  // 13 χ Dra — Dec=72.7°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,0],              // head quadrilateral
      [0,7],[7,13],                          // tail right side
      [1,4],[4,8],[8,10],[10,12],[12,6],[6,5],  // body winding
    ],
    labels: { 0:"Eltanin", 1:"Rastaban", 12:"Thuban" }
  },

  // ── 20 AQUILA ─────────────────────────────────────────────────────────────
  // Eagle shape. Altair center, Tarazed above-left, Alshain below-right
  // RA 19.1h–20.4h, Dec -1.0° to +13.9°
  "20": {
    th: { name: "นกอินทรี (อะควิลา)", text: "ดาวอัลแทร์ในกลุ่มนกอินทรีอยู่ห่างเพียง 17 ปีแสง หมุนเร็วมากจนรูปร่างป่องตรงกลาง เป็นมุมหนึ่งของสามเหลี่ยมฤดูร้อนกับ Vega และ Deneb" },
    en: { name: "Aquila (The Eagle)", text: "Aquila soars through the Milky Way. Altair, only 17 light-years away, rotates once every 9 hours — so fast it's visibly flattened. It forms the Summer Triangle with Vega and Deneb." },
    stars: [
      [41.9, 36.2],  // 0 Altair α — center bright, Dec=8.9°
      [46.8, 26.4],  // 1 Tarazed γ — above-left, Dec=10.6°
      [36.8, 50.1],  // 2 Alshain β — below-right, Dec=6.4°
      [92.0, 8.0 ],  // 3 ζ Aql — head top, Dec=13.9° (RA most E)
      [40.0, 80.6],  // 4 η Aql — body lower, Dec=1.0°
      [19.1, 90.9],  // 5 θ Aql — tail lower, Dec=-0.8°
      [8.0,  92.0],  // 6 ι Aql — tail tip, Dec=-1.0°
      [31.6, 68.7],  // 7 κ Aql — lower body, Dec=3.1°
    ],
    lines: [
      [1,0],[0,2],        // wings
      [3,0],              // head to center
      [0,4],[4,5],[5,6],  // tail line left
      [2,7],[7,6],        // tail right
    ],
    labels: { 0:"Altair", 1:"Tarazed" }
  },

  // ── 21 LYRA ───────────────────────────────────────────────────────────────
  // Vega at top, small parallelogram below. RA 18.6h–19.0h, Dec 32°–39.6°
  "21": {
    th: { name: "พิณ (ไลรา)", text: "ดาว Vega สว่างเป็นอันดับ 5 ของท้องฟ้า เป็นมุมหนึ่งของสามเหลี่ยมฤดูร้อน ในอีก 13,700 ปี Vega จะกลับมาเป็นดาวเหนืออีกครั้ง M57 วงแหวนเนบิวลาอยู่ระหว่าง Sheliak และ Sulafat" },
    en: { name: "Lyra (The Lyre)", text: "Vega, fifth brightest star, anchors the Summer Triangle. The Ring Nebula (M57) — a beautiful planetary nebula — floats between Sheliak and Sulafat, visible through small telescopes." },
    stars: [
      [92.0, 17.4],  // 0 Vega α — top (bright), Dec=38.8°
      [54.6, 30.7],  // 1 ζ1 Lyr — right upper, Dec=37.6°
      [29.3, 78.7],  // 2 Sheliak β — right lower, Dec=33.4°
      [8.0,  92.0],  // 3 δ Lyr — bottom right, Dec=32.2°
      [56.4, 86.3],  // 4 Sulafat γ — bottom left, Dec=32.7°
      [90.8, 38.7],  // 5 δ2 Lyr — left lower, Dec=36.9°
      [54.6, 8.0 ],  // 6 ε1 Lyr — upper left (double-double), Dec=39.6°
    ],
    lines: [
      [0,6],[0,1],              // Vega to upper sides
      [6,5],[5,4],[4,3],[3,2],[2,1],  // parallelogram
      [1,5],                    // cross
    ],
    labels: { 0:"Vega", 2:"Sheliak", 4:"Sulafat" }
  },

  // ── 22 CYGNUS ─────────────────────────────────────────────────────────────
  // Northern Cross: Deneb top, Sadr center, Albireo bottom (beak)
  // Wings: ε Cyg (left) and δ Cyg (right). RA 19.5h–20.8h, Dec 28°–45.3°
  "22": {
    th: { name: "หงส์ (ไซกนัส)", text: "กากบาทเหนือ (Northern Cross) บินตามแนวทางช้างเผือก ดาว Deneb อยู่ห่าง 2,600 ปีแสงแต่ยังสว่างมาก แสดงว่าสว่างจริงๆ มหาศาล ดาวคู่ Albireo สีน้ำเงิน-ส้มงามมาก" },
    en: { name: "Cygnus (The Swan)", text: "The Northern Cross flies along the Milky Way. Deneb appears bright despite being 2,600 light-years away — making it one of the most intrinsically luminous stars known. Albireo is a stunning gold and blue double star." },
    stars: [
      [13.3, 8.0 ],  // 0 Deneb α — top (tail), Dec=45.3°
      [34.7, 32.4],  // 1 Sadr γ — cross center, Dec=40.3°
      [92.0, 92.0],  // 2 Albireo β — bottom (beak), RA=19.51h Dec=28.0°
      [8.0,  62.8],  // 3 ε Cyg — left wing tip, Dec=34.0°
      [22.6, 8.7 ],  // 4 δ Cyg — right wing tip (near Deneb lat), Dec=45.1°
      [44.1, 27.9],  // 5 ζ Cyg — left wing inner, Dec=41.2°
      [13.3, 33.6],  // 6 right wing inner, Dec=40.0°
      [24.6, 78.6],  // 7 ζ Cyg lower body, Dec=30.7°
    ],
    lines: [
      [0,1],[1,7],[7,2],        // body N→S
      [5,1],[1,6],[6,3],        // left wing
      [4,0],                    // right wing near top
    ],
    labels: { 0:"Deneb", 2:"Albireo" }
  },

  // ── 23 DELPHINUS ──────────────────────────────────────────────────────────
  // Tiny kite diamond (4 stars) + tail star ζ
  // RA 20.63h–20.80h, Dec 9.5°–15.9°
  "23": {
    th: { name: "โลมา (เดลฟินัส)", text: "กลุ่มดาวโลมาเล็กมากแต่รูปร่างสวยเหมือนโลมากระโดด ชื่อดาว Sualocin–Rotanev คือ Nicolaus Venator เขียนกลับหลัง เป็นการแอบตั้งชื่อดาวตามตัวเอง" },
    en: { name: "Delphinus (The Dolphin)", text: "Delphinus is tiny but charming, shaped exactly like a leaping dolphin. Its two brightest stars Sualocin and Rotanev are Nicolaus Venator (an astronomer's Latinized name) spelled backwards." },
    stars: [
      [75.5, 8.0 ],  // 0 Sualocin α — top, Dec=15.9°
      [31.6, 25.3],  // 1 Rotanev β — right, Dec=14.6°
      [20.6, 68.4],  // 2 ε Del — bottom right, Dec=11.3°
      [45.5, 74.5],  // 3 δ Del — bottom left, Dec=10.8°
      [92.0, 60.3],  // 4 γ Del — left, Dec=11.9°
      [8.0,  92.0],  // 5 ζ Del — tail, Dec=9.5°
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,0],  // kite
      [1,4],                           // kite cross
      [2,5],[3,5],                     // tail fork
    ],
    labels: { 0:"Sualocin", 1:"Rotanev" }
  },

  // ── 24 TRIANGULUM ─────────────────────────────────────────────────────────
  // Slim elongated triangle. RA 1.88h–2.29h, Dec 29.6°–35.0°
  "24": {
    th: { name: "สามเหลี่ยม (ไทรแองกูลัม)", text: "กลุ่มดาวสามเหลี่ยมเล็กมากรูปสามเหลี่ยมยาว กาแล็กซี M33 อยู่ใกล้เคียง มองเห็นด้วยตาเปล่าในคืนมืดสนิทเป็นกาแล็กซีที่อยู่ใกล้เราที่สุดอันดับสาม" },
    en: { name: "Triangulum", text: "One of the smallest constellations, forming a slim triangle. The Triangulum Galaxy (M33) nearby is the third-largest in our Local Group — on very dark nights it's visible to the naked eye as a faint smudge." },
    stars: [
      [92.0, 92.0],  // 0 Mothallah α — bottom vertex, RA=1.88h Dec=29.6°
      [34.9, 8.0 ],  // 1 β Tri — top-left, RA=2.16h Dec=35.0°
      [8.0,  25.7],  // 2 γ Tri — top-right, RA=2.29h Dec=33.8°
    ],
    lines: [[0,1],[1,2],[2,0]],
    labels: { 0:"Mothallah" }
  },
};