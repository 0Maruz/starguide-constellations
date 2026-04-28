// พิกัดดาว mapped จากภาพ IAU/Sleepopolis constellation reference charts
// x,y = 0–100, (0,0) = top-left

export const VALID_STAR_IDS = new Set([
  "01","02","03","04","05","06","07","08","09","10",
  "11","12","13","14","15","16","17","18","19","20",
  "21","22","23","24"
]);

export const constellations = {

  // ── 01 ARIES ──────────────────────────────────────────────────────────────
  // ref: screenshots — small arc of 4 stars curving slightly
  "01": {
    th: {
      name: "กลุ่มดาวเมษ (Aries)",
      text: "กลุ่มดาวเมษ หรือ กลุ่มดาวแกะ เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนเมษายน มีสัญลักษณ์เป็นแกะตัวผู้ ดาวที่สว่างที่สุดคือ Hamal มีพิกัดท้องฟ้า RA 2 ชั่วโมง 7 นาที และ Dec +23 องศาเหนือ ในตำนานกรีก เทพ Hermes มอบแกะวิเศษขนทองคำให้แก่ Phrixus และ Helle Zeus จึงนำแกะขึ้นประดับบนฟ้าเพื่อเป็นเกียรติและเป็นอนุสรณ์แห่งความกล้าหาญและการเสียสละ",
    },
    en: {
      name: "Aries (The Ram)",
      text: "Aries the Ram is one of the zodiac constellations for April. Its brightest star is Hamal at RA 2h 7m, Dec +23°. In Greek myth, Hermes gifted a golden-fleeced ram to save Phrixus and Helle from their cruel stepmother. After fulfilling its heroic mission, Zeus honored the ram by placing it among the stars as a symbol of courage and sacrifice.",
    },
    stars: [
      [ 8, 45],  // 0 Hamal α — brightest, leftmost
      [32, 50],  // 1 Sheratan β
      [48, 55],  // 2 Mesarthim γ
      [88, 52],  // 3 δ Ari — rightmost
    ],
    lines: [[0,1],[1,2],[2,3]],
    labels: { 0:"Hamal", 1:"Sheratan", 2:"Mesarthim" },
  },

  // ── 02 TAURUS ─────────────────────────────────────────────────────────────
  // ref: V-shaped Hyades, Aldebaran eye, two horns up, Pleiades top-left
  "02": {
    th: {
      name: "กลุ่มดาวพฤษภ (Taurus)",
      text: "กลุ่มดาวพฤษภ หรือ กลุ่มดาววัวกระทิง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนพฤษภาคม ดาวที่สว่างที่สุดคือ Aldebaran ซึ่งเป็นตาแดงของวัว มีกระจุกดาวลูกไก่ Pleiades อยู่บนบ่า มีพิกัด RA 4 ชั่วโมง 35 นาที และ Dec +16 องศาเหนือ ในตำนานกรีก Zeus แปลงกายเป็นวัวขาวเพื่อลักพาตัว Europa ลูกสาวของกษัตริย์ Agenor วัวกระทิงถูกยกขึ้นบนท้องฟ้าเป็นสัญลักษณ์แห่งความแข็งแรงและความมั่นคง",
    },
    en: {
      name: "Taurus (The Bull)",
      text: "Taurus the Bull is a zodiac constellation for May. Aldebaran, the fiery orange eye, is its brightest star. The Pleiades cluster adorns the bull's shoulder. Coordinates: RA 4h 35m, Dec +16°. In Greek myth, Zeus transformed into a magnificent white bull to abduct Europa, daughter of King Agenon. The bull was immortalized in the sky as a symbol of strength and steadfastness.",
    },
    stars: [
      [10, 18],  // 0 Pleiades — shoulder cluster top-left
      [35, 55],  // 1 θ1 Tau — Hyades left
      [42, 62],  // 2 γ Tau — Hyades center-left
      [50, 57],  // 3 δ1 Tau — Hyades center
      [38, 68],  // 4 ε Ain — Hyades bottom
      [58, 65],  // 5 Aldebaran α — eye (bright orange)
      [80, 20],  // 6 Elnath β — N horn tip
      [90, 48],  // 7 ζ Tau — S horn tip
    ],
    lines: [
      [0,2],
      [1,2],[2,3],[3,5],[5,4],[4,1],
      [5,6],[5,7],
    ],
    labels: { 5:"Aldebaran", 6:"Elnath", 0:"Pleiades" },
  },

  // ── 03 GEMINI ─────────────────────────────────────────────────────────────
  // ref: two parallel figures, Castor(L) Pollux(R) at top
  "03": {
    th: {
      name: "กลุ่มดาวเมถุน (Gemini)",
      text: "กลุ่มดาวเมถุน หรือ กลุ่มดาวคนคู่ เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนมิถุนายน ดาวสว่างที่สุดคือ Castor และ Pollux ซึ่งเป็นส่วนหัวของคนทั้งคู่ มีตำแหน่ง RA 7 ชั่วโมง 35 นาที และ Dec +28 องศาเหนือ ในตำนานกรีก Castor และ Pollux เป็นพี่น้องที่ผูกพันกันมาก แม้ Castor จะเป็นมนุษย์ธรรมดาและ Pollux เป็นบุตรของเทพ Zeus ด้วยความสงสารของเทพ Zeus จึงได้ให้ทั้งคู่อยู่ด้วยกันบนท้องฟ้า เป็นสัญลักษณ์ของความผูกพันและมิตรภาพ",
    },
    en: {
      name: "Gemini (The Twins)",
      text: "Gemini the Twins is a zodiac constellation for June. Castor and Pollux — the twin bright heads — stand together at the top. Coordinates: RA 7h 35m, Dec +28°. In Greek myth, mortal Castor and divine Pollux were so devoted that Zeus united them forever in the sky, side by side as an eternal symbol of brotherhood and unbreakable friendship.",
    },
    stars: [
      [27,  5],  // 0 Castor α — left head
      [48,  8],  // 1 Pollux β — right head (brighter)
      [18, 28],  // 2 μ Tejat — Castor upper body
      [40, 30],  // 3 δ Wasat — Pollux upper body
      [12, 52],  // 4 η Propus — Castor lower body
      [36, 50],  // 5 ε Mebsuda — Pollux lower body
      [15, 72],  // 6 Castor knee
      [34, 70],  // 7 Pollux knee
      [18, 90],  // 8 Castor foot
      [52, 82],  // 9 Alhena γ — bright right foot
      [58, 95],  // 10 ξ Alzirr — right toe
    ],
    lines: [
      [0,2],[2,4],[4,6],[6,8],
      [1,3],[3,5],[5,7],[7,9],[9,10],
      [0,1],[2,3],[4,5],[6,7],
    ],
    labels: { 0:"Castor", 1:"Pollux", 9:"Alhena" },
  },

  // ── 04 CANCER ─────────────────────────────────────────────────────────────
  // ref: faint Y-shape, Beehive M44 center
  "04": {
    th: {
      name: "กลุ่มดาวกรกฎ (Cancer)",
      text: "กลุ่มดาวกรกฎ หรือ กลุ่มดาวปู เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนกรกฎาคม มีกระจุกดาว M44 รังผึ้งอยู่ตรงกลาง มีตำแหน่ง RA 8 ชั่วโมง 42 นาที และ Dec +20 องศาเหนือ ในตำนานกรีก ปูยักษ์ถูกเทพี Hera ส่งไปช่วย Hydra ต่อสู้กับ Hercules แต่ถูกเหยียบตาย Hera ยกย่องในความจงรักภักดีของปู จึงถูกยกขึ้นเป็นกลุ่มดาวกรกฎ เพื่อเป็นเกียรติแก่ความทุ่มเทและความเสียสละ",
    },
    en: {
      name: "Cancer (The Crab)",
      text: "Cancer the Crab is a zodiac constellation for July, home to the Beehive Cluster M44 at its center. Coordinates: RA 8h 42m, Dec +20°. Cancer is the faintest of the zodiac constellations. In Greek myth, Hera sent a giant crab to distract Hercules during his battle with the Hydra, but it was crushed underfoot. Hera honored its loyalty by immortalizing it among the stars.",
    },
    stars: [
      [50, 50],  // 0 M44 Beehive — center
      [28, 28],  // 1 γ Asellus Borealis — top-left
      [68, 25],  // 2 δ Asellus Australis — top-right
      [12, 65],  // 3 α Acubens — left claw (brightest)
      [85, 60],  // 4 β Tarf — right claw
      [30, 78],  // 5 ζ1 — bottom-left
      [72, 75],  // 6 λ — bottom-right
    ],
    lines: [
      [3,1],[1,0],[0,2],[2,4],
      [1,5],[2,6],
    ],
    labels: { 0:"Beehive M44", 3:"Acubens", 4:"β Tarf" },
  },

  // ── 05 LEO ────────────────────────────────────────────────────────────────
  // ref: backward question-mark Sickle + triangle body
  "05": {
    th: {
      name: "กลุ่มดาวสิงห์ (Leo)",
      text: "กลุ่มดาวสิงห์ หรือ กลุ่มดาวสิงโต เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนสิงหาคม ดาวที่สว่างที่สุดคือ Regulus มีตำแหน่ง RA 10 ชั่วโมง 8 นาที และ Dec +12 องศาเหนือ ในตำนานกรีก สิงโตเนเมียนเป็นสัตว์วิเศษที่ Hercules ต้องฆ่าในการทำภารกิจ 12 ภารกิจ หลังจาก Hercules ทำสำเร็จ Zeus จึงนำสิงโตขึ้นไปบนท้องฟ้าเป็นกลุ่มดาวสิงห์ เพื่อเป็นสัญลักษณ์ของความกล้าหาญและอำนาจ",
    },
    en: {
      name: "Leo (The Lion)",
      text: "Leo the Lion is a zodiac constellation for August. Bright Regulus anchors the Sickle — a backward question mark forming the lion's mane and head. Coordinates: RA 10h 8m, Dec +12°. In Greek myth, this is the fearsome Nemean Lion slain by Hercules as his first labor. Zeus immortalized the mighty lion in the sky as a symbol of courage and royal power.",
    },
    stars: [
      [30, 75],  // 0 Regulus α — base of sickle (bright)
      [25, 55],  // 1 η Leo
      [18, 38],  // 2 Rasalas μ
      [25, 20],  // 3 Adhafera ζ
      [42, 12],  // 4 Algieba γ — sickle peak
      [55, 28],  // 5 Zosma δ — back
      [65, 48],  // 6 Chertan θ — haunches
      [95, 38],  // 7 Denebola β — tail tip
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,0],
      [4,5],[5,6],[6,7],
      [0,6],
    ],
    labels: { 0:"Regulus", 7:"Denebola", 4:"Algieba" },
  },

  // ── 06 VIRGO ──────────────────────────────────────────────────────────────
  // ref: large body, Spica bright bottom-left
  "06": {
    th: {
      name: "กลุ่มดาวกันย์ (Virgo)",
      text: "กลุ่มดาวกันย์ หรือ กลุ่มดาวหญิงสาว เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกันยายน ดาวที่สว่างที่สุดคือ Spica มีตำแหน่ง RA 13 ชั่วโมง 25 นาที และ Dec −11 องศาใต้ ในตำนานกรีก เทพี Demeter เทพีแห่งความบริสุทธิ์และความอุดมสมบูรณ์ ถูก Hades ลักพาตัวบุตรสาว ทำให้เกิดฤดูกาล กลุ่มดาวกันย์จึงถูกยกขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความบริสุทธิ์และความอุดมสมบูรณ์",
    },
    en: {
      name: "Virgo (The Maiden)",
      text: "Virgo the Maiden is the second largest constellation and a zodiac sign for September. Brilliant Spica blazes at the lower left. Coordinates: RA 13h 25m, Dec −11°. In Greek myth, Demeter — goddess of purity and abundance — mourned her daughter Persephone taken by Hades, and their separation brought the seasons. Virgo was lifted to the sky as a symbol of purity and the fertile earth.",
    },
    stars: [
      [35, 90],  // 0 Spica α — bright bottom-left
      [42, 72],  // 1 θ Vir
      [52, 55],  // 2 γ Porrima
      [58, 38],  // 3 η Vir
      [62, 22],  // 4 β Zavijava
      [68,  8],  // 5 ε Vindemiatrix — top-right
      [78, 28],  // 6 δ Vir
      [88, 45],  // 7 ζ Vir
      [28, 55],  // 8 τ Vir — left arm
      [15, 42],  // 9 left outer
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],
      [5,6],[6,7],
      [2,8],[8,9],
    ],
    labels: { 0:"Spica", 5:"Vindemiatrix", 2:"Porrima" },
  },

  // ── 07 LIBRA ──────────────────────────────────────────────────────────────
  // ref: balance-scales, two pans bottom, beam top-center
  "07": {
    th: {
      name: "กลุ่มดาวตุล (Libra)",
      text: "กลุ่มดาวตุล หรือ กลุ่มดาวตาชั่ง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนตุลาคม ดาวสว่างที่สุดคือ Zuben Elgenubi มีตำแหน่ง RA 15 ชั่วโมง 18 นาที และ Dec −15 องศาใต้ ในตำนานกรีก ตาชั่งเป็นเครื่องมือของเทพี Astraea เทพีแห่งความยุติธรรม กลุ่มดาวตุลจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความยุติธรรมและความสมดุล",
    },
    en: {
      name: "Libra (The Scales)",
      text: "Libra the Scales is the only inanimate object in the zodiac, associated with October. Zubenelgenubi is its brightest star. Coordinates: RA 15h 18m, Dec −15°. Its star names mean 'southern and northern scorpion claws' in Arabic — reflecting their ancient role as Scorpius's claws. In Greek myth, these are the scales of Astraea, goddess of justice, placed in the sky as a symbol of fairness and balance.",
    },
    stars: [
      [30, 78],  // 0 Zubenelgenubi α — south pan
      [68, 70],  // 1 Zubeneschamali β — north pan
      [50, 32],  // 2 γ Brachium — beam top-center
      [22, 55],  // 3 ι Lib — left support
      [78, 52],  // 4 θ Lib — right support
    ],
    lines: [
      [3,2],[2,4],
      [2,0],[2,1],
      [3,0],[4,1],
    ],
    labels: { 0:"Zubenelgenubi", 1:"Zubeneschamali", 2:"Brachium" },
  },

  // ── 08 SCORPIUS ───────────────────────────────────────────────────────────
  // ref: J-hook, Antares heart-red, long curved tail, stinger at end
  "08": {
    th: {
      name: "กลุ่มดาวพิจิก (Scorpius)",
      text: "กลุ่มดาวพิจิก หรือ กลุ่มดาวแมงป่อง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนพฤศจิกายน ดาวสว่างที่สุดคือ Antares มีตำแหน่ง RA 16 ชั่วโมง 29 นาที และ Dec −26 องศาใต้ ในตำนานกรีก แมงป่องถูกส่งโดยเทพี Artemis เพื่อฆ่า Orion ที่อวดเก่ง กลุ่มดาวพิจิกจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของพลังและความเข้มแข็ง",
    },
    en: {
      name: "Scorpius (The Scorpion)",
      text: "Scorpius the Scorpion is a zodiac constellation for November. Red supergiant Antares blazes at its heart — its name means 'rival of Mars.' Coordinates: RA 16h 29m, Dec −26°. In Greek myth, Artemis sent this scorpion to slay the boastful Orion. Zeus honored both by placing them in opposite parts of the sky, so they can never meet — Orion sets as Scorpius rises.",
    },
    stars: [
      [28,  5],  // 0 Graffias β — head top-left
      [45,  5],  // 1 δ Dschubba — head top-right
      [18, 18],  // 2 π Sco — head left
      [36, 18],  // 3 σ Sco
      [32, 32],  // 4 Antares α — heart (RED, bright)
      [40, 45],  // 5 τ Sco
      [46, 58],  // 6 ε Sco
      [50, 68],  // 7 μ Sco
      [53, 78],  // 8 ζ Sco
      [50, 88],  // 9 η Sco — tail bend
      [40, 94],  // 10 θ Sargas
      [28, 90],  // 11 ι Sco
      [16, 82],  // 12 κ Sco
      [ 8, 72],  // 13 Shaula λ — stinger (bright)
      [12, 65],  // 14 Lesath υ
    ],
    lines: [
      [2,0],[0,1],[1,3],
      [2,3],[3,4],
      [4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],
    ],
    labels: { 4:"Antares", 13:"Shaula", 14:"Lesath" },
  },

  // ── 09 SAGITTARIUS ────────────────────────────────────────────────────────
  // ref: Teapot asterism, handle right, spout left, lid top
  "09": {
    th: {
      name: "กลุ่มดาวธนู (Sagittarius)",
      text: "กลุ่มดาวธนู หรือ กลุ่มดาวคนยิงธนู เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนธันวาคม ดาวสว่างที่สุดคือ Kaus Australis มีตำแหน่ง RA 19 ชั่วโมง และ Dec −25 องศาใต้ ในตำนานกรีก Chiron เป็นเซนทอร์ที่ฉลาดและกล้าหาญ สุดท้ายสละความเป็นอมตะให้พ้นจากความเจ็บปวด Zeus ที่สงสารและยกย่องในความดีของ Chiron จึงนำรูปร่างของเซนทอร์นักธนูไปประดับบนท้องฟ้าเป็นสัญลักษณ์แห่งปัญญาและการแสวงหาเป้าหมาย",
    },
    en: {
      name: "Sagittarius (The Archer)",
      text: "Sagittarius the Archer is a zodiac constellation for December. Kaus Australis is its brightest star. Coordinates: RA 19h, Dec −25°. The Teapot asterism points its spout toward the galactic center — the Milky Way's glowing core. In myth, the noble centaur Chiron willingly surrendered his immortality to end his suffering. Zeus, moved by his wisdom and sacrifice, placed the archer's form among the stars.",
    },
    stars: [
      [82, 75],  // 0 Kaus Australis ε — handle bottom (brightest)
      [78, 52],  // 1 Kaus Media δ — handle mid
      [75, 30],  // 2 Kaus Borealis λ — handle top
      [58, 15],  // 3 φ Sgr — lid-left
      [40,  8],  // 4 σ Nunki — lid-right (bright)
      [22, 28],  // 5 τ Sgr — spout top
      [ 8, 48],  // 6 ζ Ascella — spout
      [15, 68],  // 7 δ Sgr — spout base
      [38, 78],  // 8 γ Sgr — bottom-center
      [60, 82],  // 9 bottom-right
    ],
    lines: [
      [0,1],[1,2],
      [2,3],[3,4],
      [4,5],[5,6],[6,7],
      [7,8],[8,9],[9,0],
      [2,8],[1,9],
    ],
    labels: { 0:"Kaus Australis", 4:"Nunki", 2:"Kaus Borealis" },
  },

  // ── 10 CAPRICORNUS ────────────────────────────────────────────────────────
  // ref: inverted triangle / arrowhead, wide top narrow bottom
  "10": {
    th: {
      name: "กลุ่มดาวมกร (Capricornus)",
      text: "กลุ่มดาวมกร หรือ กลุ่มดาวแพะทะเล เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนมกราคม ดาวสว่างที่สุดคือ Deneb Algedi มีตำแหน่ง RA 21 ชั่วโมง 47 นาที และ Dec −16 องศาใต้ ในตำนานกรีก เกี่ยวกับ Pan ครึ่งแพะครึ่งปลาซึ่งเป็นเทพที่หนีปีศาจ Typhon แล้วกลายร่างครึ่งปลา กลุ่มดาวมกรจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความมุ่งมั่นและความพยายาม",
    },
    en: {
      name: "Capricornus (Sea Goat)",
      text: "Capricornus the Sea Goat is a zodiac constellation for January. Deneb Algedi is its brightest star. Coordinates: RA 21h 47m, Dec −16°. Known to Babylonians as the divine sea-goat for over 3,000 years. In Greek myth, the god Pan leaped into the Nile to escape the monster Typhon, accidentally transforming into this half-goat, half-fish creature — placed in the sky as a symbol of determination and perseverance.",
    },
    stars: [
      [ 8, 28],  // 0 Algedi α — top-left
      [28, 18],  // 1 Dabih β — top-center-left
      [52, 10],  // 2 ψ Cap — top-center
      [75, 18],  // 3 ω Cap
      [92, 32],  // 4 ζ Cap — top-right
      [88, 55],  // 5 ε Cap
      [72, 75],  // 6 Deneb Algedi δ — bottom-right (brightest)
      [48, 85],  // 7 γ Cap — bottom-center
      [22, 78],  // 8 θ Cap — bottom-left
      [ 5, 55],  // 9 ι Cap — left
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],
      [1,9],[2,7],
    ],
    labels: { 0:"Algedi", 6:"Deneb Algedi", 1:"Dabih" },
  },

  // ── 11 AQUARIUS ───────────────────────────────────────────────────────────
  // ref: Water Bearer, Y-shaped jar, stream south
  "11": {
    th: {
      name: "กลุ่มดาวกุมภ์ (Aquarius)",
      text: "กลุ่มดาวกุมภ์ หรือ กลุ่มดาวคนแบกหม้อน้ำ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกุมภาพันธ์ ดาวสว่างที่สุดคือ Sadalmelik มีตำแหน่ง RA 22 ชั่วโมง 0 นาที และ Dec −5 องศาใต้ ในตำนานกรีก Ganymede เป็นเด็กหนุ่มรูปงามที่ Zeus พาไปเป็นคนรินน้ำให้เทพ กลุ่มดาวกุมภ์จึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของการให้และความเมตตา",
    },
    en: {
      name: "Aquarius (Water Bearer)",
      text: "Aquarius the Water Bearer is a zodiac constellation for February. Sadalmelik is its brightest star. Coordinates: RA 22h 0m, Dec −5°. The Y-shaped Water Jar pours a stream of stars southward. In Greek myth, beautiful Ganymede was brought to Olympus by Zeus himself to serve as cupbearer to the gods — placed in the sky as a symbol of generosity and divine compassion.",
    },
    stars: [
      [35, 15],  // 0 Sadalsuud β — top-left
      [55, 22],  // 1 Sadalmelik α — top-right (brightest)
      [45, 35],  // 2 ε Aqr — jar center
      [30, 40],  // 3 μ Aqr — jar left
      [58, 40],  // 4 ν Aqr — jar right
      [40, 52],  // 5 ζ Aqr — below jar
      [28, 62],  // 6 γ Sadachbia
      [18, 72],  // 7 π Aqr
      [10, 83],  // 8 δ Skat — lower-left
      [32, 88],  // 9 λ Aqr
      [50, 82],  // 10 τ Aqr
      [65, 68],  // 11 ι Aqr
      [75, 52],  // 12 θ Aqr
    ],
    lines: [
      [0,2],[1,2],
      [2,3],[2,4],[3,4],
      [3,5],[5,6],[6,7],[7,8],[8,9],[9,10],
      [4,12],[12,11],[11,10],
      [0,1],
    ],
    labels: { 1:"Sadalmelik", 0:"Sadalsuud", 8:"Skat" },
  },

  // ── 12 PISCES ─────────────────────────────────────────────────────────────
  // ref: two fish, N circlet + W line, Alrescha knot
  "12": {
    th: {
      name: "กลุ่มดาวมีน (Pisces)",
      text: "กลุ่มดาวมีน หรือ กลุ่มดาวปลาคู่ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนมีนาคม ดาวสว่างที่สุดคือ Alrescha มีตำแหน่ง RA 1 ชั่วโมง 0 นาที และ Dec +15 องศาเหนือ ในตำนานกรีก เทพี Aphrodite และลูกชาย Eros แปลงร่างเป็นปลาเพื่อหนีจาก Typhon และผูกหางด้วยเส้นเชือก กลุ่มดาวมีนจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความรักและความผูกพัน",
    },
    en: {
      name: "Pisces (The Fish)",
      text: "Pisces the Fish is a zodiac constellation for March. Alrescha, the knot tying the two fish, is its brightest star. Coordinates: RA 1h 0m, Dec +15°. In Greek myth, Aphrodite and her son Eros transformed into two fish to escape the fearsome monster Typhon, tying their tails together so they would never be separated — immortalized in the sky as a symbol of love and eternal bond.",
    },
    stars: [
      [60, 62],  // 0 Alrescha α — knot center
      [42, 45],  // 1 N circlet
      [32, 30],  // 2
      [20, 22],  // 3
      [10, 32],  // 4
      [ 8, 48],  // 5
      [15, 60],  // 6
      [30, 65],  // 7
      [44, 60],  // 8
      [72, 50],  // 9 W fish
      [82, 38],  // 10
      [92, 22],  // 11
      [95,  8],  // 12 η Psc — tail
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],
      [0,9],[9,10],[10,11],[11,12],
    ],
    labels: { 0:"Alrescha", 12:"η Psc" },
  },

  // ── 13 ORION ──────────────────────────────────────────────────────────────
  // ref: hourglass, belt 3 stars diagonal, Betelgeuse L-shoulder, Rigel R-foot
  "13": {
    th: {
      name: "กลุ่มดาวนายพราน (Orion)",
      text: "กลุ่มดาวนายพราน หรือ กลุ่มดาวโอไรออน เป็นหนึ่งในกลุ่มดาวที่สว่างและโด่งดังที่สุดบนท้องฟ้า ดาวที่เด่นที่สุดคือ Betelgeuse และ Rigel มีพิกัด RA 5 ชั่วโมง และ Dec +5 องศาเหนือ ในตำนานกรีก Orion เป็นพรานล่าสัตว์ผู้เก่งกาจ แต่ถูกแมงป่องพิฆาตตามคำสั่งของเทพี Artemis จึงถูก Zeus ยกขึ้นบนท้องฟ้าเป็นกลุ่มดาวนายพราน คู่กับกลุ่มดาวสุนัขล่าเนื้อและแมงป่อง",
    },
    en: {
      name: "Orion (The Hunter)",
      text: "Orion the Hunter is one of the most magnificent constellations in the sky. Betelgeuse marks the left shoulder, Rigel the right foot. Coordinates: RA 5h, Dec +5°. Three belt stars — Mintaka, Alnilam, Alnitak — form an unmistakable diagonal line. In Greek myth, Orion was a great hunter slain by Scorpius at Artemis's command. Zeus honored both by placing them on opposite sides of the sky, so they never meet.",
    },
    stars: [
      [48,  5],  // 0 Meissa λ — head
      [28, 25],  // 1 Betelgeuse α — LEFT shoulder (bright red)
      [68, 20],  // 2 Bellatrix γ — RIGHT shoulder
      [65, 50],  // 3 Mintaka δ — belt RIGHT
      [48, 55],  // 4 Alnilam ε — belt CENTER
      [30, 60],  // 5 Alnitak ζ — belt LEFT
      [30, 88],  // 6 Rigel β — LEFT foot (brightest)
      [72, 85],  // 7 Saiph κ — RIGHT foot
      [40, 70],  // 8 ι Ori — sword top
      [38, 79],  // 9 θ1/M42 — sword nebula
    ],
    lines: [
      [0,1],[0,2],
      [1,3],[2,5],
      [3,4],[4,5],
      [3,7],[5,6],
      [5,8],[8,9],
    ],
    labels: { 1:"Betelgeuse", 6:"Rigel", 4:"Alnilam" },
  },

  // ── 14 CANIS MINOR ────────────────────────────────────────────────────────
  // ref: just two main stars
  "14": {
    th: {
      name: "กลุ่มดาวหมาเล็ก (Canis Minor)",
      text: "กลุ่มดาวหมาเล็ก เป็นกลุ่มดาวที่มีสัญลักษณ์เป็นสุนัขล่าเนื้อคู่ใจของนายพราน ดาวที่สว่างที่สุดคือ Procyon มีตำแหน่ง RA 7 ชั่วโมง 39 นาที และ Dec +5 องศาเหนือ ในตำนานกรีก หมาเล็กเป็นสุนัขที่ติดตามนายพราน Orion และถูกยกขึ้นบนฟ้าเพื่อเคียงข้างเจ้านายของมัน",
    },
    en: {
      name: "Canis Minor (Little Dog)",
      text: "Canis Minor the Little Dog is Orion's faithful lesser hunting companion. Procyon — its brightest star — is only 11.5 light-years from Earth and forms the Winter Triangle with Sirius and Betelgeuse. Coordinates: RA 7h 39m, Dec +5°. In Greek myth, this loyal little hound faithfully followed Orion and was honored with a place in the sky forever at its master's side.",
    },
    stars: [
      [25, 45],  // 0 Procyon α — bright left
      [75, 55],  // 1 Gomeisa β — right
    ],
    lines: [[0,1]],
    labels: { 0:"Procyon", 1:"Gomeisa" },
  },

  // ── 15 BOOTES ─────────────────────────────────────────────────────────────
  // ref: kite/ice-cream-cone shape, Arcturus bright at bottom
  "15": {
    th: {
      name: "กลุ่มดาวคนเลี้ยงสัตว์ (Boötes)",
      text: "กลุ่มดาวคนเลี้ยงสัตว์ มีสัญลักษณ์เป็นชายผู้เลี้ยงสัตว์และถือเคียว ดาวที่สว่างที่สุดคือ Arcturus ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 14 ชั่วโมง 15 นาที และ Dec +19 องศาเหนือ ตามตำนานกรีก คนเลี้ยงสัตว์เชื่อมโยงกับ Arcas บุตรของ Zeus คนเลี้ยงสัตว์จึงถูกวาดไว้บนฟ้าเพื่อเฝ้าดูฝูงสัตว์และเป็นสัญลักษณ์แห่งความขยัน",
    },
    en: {
      name: "Boötes (The Herdsman)",
      text: "Boötes the Herdsman drives the Great Bear around the pole. Orange giant Arcturus — one of the brightest stars visible — blazes at its base. Coordinates: RA 14h 15m, Dec +19°. 'Arc to Arcturus' from the handle of the Big Dipper is a famous navigation trick. In Greek myth, Boötes is Arcas, son of Zeus, placed in the sky as a symbol of diligence and watchful care.",
    },
    stars: [
      [50, 92],  // 0 Arcturus α — bright bottom-center
      [30, 68],  // 1 ε Izar — lower-left
      [70, 65],  // 2 η Muphrid — lower-right
      [20, 45],  // 3 β Nekkar — mid-left
      [80, 42],  // 4 γ Seginus — mid-right
      [30, 22],  // 5 ρ Boo — upper-left
      [70, 20],  // 6 ζ Boo — upper-right
      [50,  8],  // 7 θ Boo — top
    ],
    lines: [
      [0,1],[0,2],
      [1,3],[2,4],
      [3,5],[4,6],
      [5,7],[7,6],
      [1,2],
    ],
    labels: { 0:"Arcturus", 4:"Seginus", 7:"θ Boo" },
  },

  // ── 16 AURIGA ─────────────────────────────────────────────────────────────
  // ref: pentagon shape, Capella bright top-left
  "16": {
    th: {
      name: "กลุ่มดาวสารถี (Auriga)",
      text: "กลุ่มดาวสารถี มีสัญลักษณ์เป็นชายขับรถศึก ถือบังเหียน ดาวที่สว่างที่สุดคือ Capella ซึ่งเป็นหนึ่งในดาวฤกษ์ที่สว่างที่สุดในท้องฟ้า มีตำแหน่ง RA 5 ชั่วโมง 16 นาที และ Dec +46 องศาเหนือ ในตำนานกรีก Auriga มักเชื่อมโยงกับเทพ Hephaestus หรือกษัตริย์ที่คิดค้นรถศึก จึงถูกยกขึ้นบนฟ้าเป็นกลุ่มดาวสารถีแทนเกียรติยศ",
    },
    en: {
      name: "Auriga (The Charioteer)",
      text: "Auriga the Charioteer commands his chariot across the sky. Brilliant Capella — a pair of giant stars — is one of the brightest in the night sky. Coordinates: RA 5h 16m, Dec +46°. The pentagon of Auriga is easy to spot in winter skies. In Greek myth, Auriga is linked to Hephaestus or a legendary king who invented the four-horse chariot, immortalized in the sky as a symbol of ingenuity and honor.",
    },
    stars: [
      [20, 12],  // 0 Capella α — bright top-left
      [65,  8],  // 1 β Menkib — top-right
      [90, 42],  // 2 θ Aur — right
      [75, 82],  // 3 ι Aur — bottom-right (Hassaleh)
      [25, 88],  // 4 ε Aur — bottom-left
      [ 5, 52],  // 5 ζ Aur — left
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
      [0,3],
    ],
    labels: { 0:"Capella", 1:"Menkib", 3:"Hassaleh" },
  },

  // ── 17 CASSIOPEIA ─────────────────────────────────────────────────────────
  // ref: clear W/M shape, 5 stars
  "17": {
    th: {
      name: "กลุ่มดาวค้างคาว (Cassiopeia)",
      text: "กลุ่มดาวแคสสิโอเปียมีลักษณะเด่นคือดาว 5 ดวงเรียงกันเป็นรูปตัว W หรือ M บนท้องฟ้า ในตำนานกรีก Cassiopeia เป็นราชินีผู้โอ้อวดความงามจนสร้างความไม่พอใจแก่เทพโปไซดอน เพื่อเป็นการลงโทษ Cassiopeia ถูกนำไปประดับบนท้องฟ้า โดยถูกจัดให้นั่งบนบัลลังก์หมุนรอบขั้วฟ้า เป็นเครื่องเตือนใจถึงโทษของความหยิ่งผยอง",
    },
    en: {
      name: "Cassiopeia",
      text: "Cassiopeia's five stars form a clear W or M shape near the north pole, visible year-round from the northern hemisphere. In Greek myth, Queen Cassiopeia boasted that she and her daughter surpassed the beauty of the sea nymphs, enraging Poseidon. As punishment, she was bound to a throne that endlessly circles the celestial pole — sometimes upside down — an eternal reminder of the dangers of arrogance.",
    },
    stars: [
      [ 5, 38],  // 0 Caph β — top-left
      [27, 78],  // 1 Schedar α — dip-left
      [50, 28],  // 2 γ Cas — peak middle
      [73, 72],  // 3 Ruchbah δ — dip-right
      [95, 35],  // 4 Segin ε — top-right
    ],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: { 0:"Caph", 1:"Schedar", 2:"γ Cas", 3:"Ruchbah", 4:"Segin" },
  },

  // ── 18 URSA MINOR ─────────────────────────────────────────────────────────
  // ref: Little Dipper, Polaris handle-tip top, bowl opens down-left
  "18": {
    th: {
      name: "กลุ่มดาวหมีเล็ก (Ursa Minor)",
      text: "กลุ่มดาวหมีเล็ก หรือ กระบวยเล็ก มีดาวที่สำคัญที่สุดคือ Polaris หรือดาวเหนือ มีตำแหน่ง RA 15 ชั่วโมง และ Dec +75 องศาเหนือ ในตำนานกรีก หมีเล็กมักถูกโยงกับบุตรชายของ Callisto และ Zeus ซึ่งถูกยกขึ้นบนฟ้าเพื่ออยู่คู่กับมารดาของตนที่กลายเป็นหมีใหญ่",
    },
    en: {
      name: "Ursa Minor (Little Bear)",
      text: "Ursa Minor the Little Bear has Polaris — Earth's current north pole star — at the tip of its handle. The bowl opens downward unlike the Big Dipper. Coordinates: RA 15h, Dec +75°. Kochab and Pherkad are known as the Guardians of the Pole. In Greek myth, the Little Bear is Arcas, son of Callisto and Zeus, placed in the sky to be forever near his mother the Great Bear.",
    },
    stars: [
      [50,  5],  // 0 Polaris α — pole star, handle tip (TOP)
      [55, 22],  // 1 δ UMi
      [62, 38],  // 2 ε UMi
      [72, 52],  // 3 ζ UMi — bowl corner
      [85, 65],  // 4 Pherkad γ — bowl outer
      [70, 72],  // 5 Kochab β — bowl inner (bright)
      [58, 58],  // 6 η UMi
    ],
    lines: [
      [0,1],[1,2],[2,3],
      [3,4],[4,5],[5,6],[6,3],
    ],
    labels: { 0:"Polaris", 5:"Kochab", 4:"Pherkad" },
  },

  // ── 19 URSA MAJOR ─────────────────────────────────────────────────────────
  // ref: Big Dipper bowl open right, handle curves up-right to Alkaid
  "19": {
    th: {
      name: "กลุ่มดาวหมีใหญ่ (Ursa Major)",
      text: "กลุ่มดาวหมีใหญ่ เป็นหนึ่งในกลุ่มดาวที่โดดเด่นที่สุดบนท้องฟ้า กระบวยใหญ่ประกอบด้วยดาวสว่าง 7 ดวง ดาวที่สว่างที่สุดคือ Dubhe มีตำแหน่ง RA 11 ชั่วโมง และ Dec +56 องศาเหนือ ในตำนานกรีก หมีใหญ่คือตัว Callisto หญิงงามที่ถูกแปลงร่างเป็นหมีโดยเทพี Hera และต่อมาถูก Zeus ยกขึ้นบนฟ้าเพื่อปกป้อง",
    },
    en: {
      name: "Ursa Major (Great Bear)",
      text: "Ursa Major the Great Bear contains the famous Big Dipper — seven stars forming a bowl and curved handle. Dubhe is its brightest star. Coordinates: RA 11h, Dec +56°. Pointer stars Dubhe and Merak aim directly at Polaris. Arc from the handle to Arcturus is a beloved navigation technique. In myth, Callisto was transformed into a bear by Hera; Zeus placed her in the sky to protect her.",
    },
    stars: [
      [18, 12],  // 0 Dubhe α — bowl top-right (pointer)
      [22, 35],  // 1 Merak β — bowl bottom-right (pointer)
      [42, 48],  // 2 Phecda γ — bowl bottom-left
      [38, 22],  // 3 Megrez δ — bowl top-left / handle join
      [58, 28],  // 4 Alioth ε — handle 1
      [75, 42],  // 5 Mizar ζ — handle 2
      [95, 62],  // 6 Alkaid η — handle tip
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,0],
      [3,4],[4,5],[5,6],
    ],
    labels: { 0:"Dubhe", 1:"Merak", 5:"Mizar", 6:"Alkaid" },
  },

  // ── 20 LYRA ───────────────────────────────────────────────────────────────
  // ref: Vega bright top, small parallelogram below
  "20": {
    th: {
      name: "กลุ่มดาวพิณ (Lyra)",
      text: "กลุ่มดาวพิณ มีสัญลักษณ์เป็นเครื่องดนตรีพิณของ Orpheus ดาวที่สว่างที่สุดคือ Vega ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 18 ชั่วโมง 37 นาที และ Dec +38 องศาเหนือ ตามตำนานกรีก Orpheus เป็นนักดนตรีผู้ใช้พิณบรรเลงจนเทพเจ้าหลงใหล หลังจากเขาเสียชีวิต Zeus จึงนำพิณขึ้นบนฟ้าเป็นอนุสรณ์ให้แก่ Orpheus",
    },
    en: {
      name: "Lyra (The Lyre)",
      text: "Lyra the Lyre is the harp of the legendary Orpheus. Brilliant Vega — fifth brightest star in the sky — anchors the Summer Triangle with Deneb and Altair. Coordinates: RA 18h 37m, Dec +38°. The Ring Nebula (M57) lies between Sheliak and Sulafat. In Greek myth, Orpheus played so beautifully that even rocks wept. After his death, Zeus honored him by placing his lyre among the stars.",
    },
    stars: [
      [50,  8],  // 0 Vega α — top center (bright)
      [25, 40],  // 1 ζ Lyr — left
      [28, 65],  // 2 Sheliak β — bottom-left
      [50, 75],  // 3 bottom-center
      [72, 65],  // 4 Sulafat γ — bottom-right
      [75, 40],  // 5 δ Lyr — right
    ],
    lines: [
      [0,1],[0,5],
      [1,2],[2,3],[3,4],[4,5],[5,1],
    ],
    labels: { 0:"Vega", 2:"Sheliak", 4:"Sulafat" },
  },

  // ── 21 AQUILA ─────────────────────────────────────────────────────────────
  // ref: eagle, Altair center flanked by Tarazed / Alshain, wings spread
  "21": {
    th: {
      name: "กลุ่มดาวนกอินทรี (Aquila)",
      text: "กลุ่มดาวนกอินทรี มีสัญลักษณ์เป็นนกอินทรีผู้ยิ่งใหญ่ ดาวที่สว่างที่สุดคือ Altair มีตำแหน่ง RA 19 ชั่วโมง 51 นาที และ Dec +8 องศาเหนือ ในตำนานกรีก Aquila คือนกอินทรีของ Zeus ที่ทำหน้าที่พา Ganymede ขึ้นสู่โอลิมปัสเพื่อเป็นคนรินน้ำ",
    },
    en: {
      name: "Aquila (The Eagle)",
      text: "Aquila the Eagle soars along the Milky Way with brilliant Altair at its center. Altair rotates so fast it is visibly flattened. Coordinates: RA 19h 51m, Dec +8°. Altair forms one corner of the Summer Triangle with Vega and Deneb. In Greek myth, Aquila is Zeus's great eagle — tasked with carrying thunderbolts and bringing the beautiful Ganymede up to Olympus to serve the gods.",
    },
    stars: [
      [50, 38],  // 0 Altair α — center (bright)
      [36, 30],  // 1 Tarazed γ — upper-left wing
      [64, 45],  // 2 Alshain β — lower-right wing
      [50, 15],  // 3 ζ Aql — head top
      [38, 58],  // 4 η Aql — body lower-left
      [42, 72],  // 5 θ Aql
      [50, 85],  // 6 ι Aql — tail
      [60, 70],  // 7 κ Aql
    ],
    lines: [
      [1,0],[0,2],
      [3,0],
      [0,4],[4,5],[5,6],
      [2,7],[7,6],
    ],
    labels: { 0:"Altair", 1:"Tarazed", 2:"Alshain" },
  },

  // ── 22 CYGNUS ─────────────────────────────────────────────────────────────
  // ref: Northern Cross, Deneb top, Albireo bottom, wings at Sadr
  "22": {
    th: {
      name: "กลุ่มดาวหงส์ (Cygnus)",
      text: "กลุ่มดาวหงส์ มีสัญลักษณ์เป็นนกที่กางปีกบิน ดาวที่สว่างที่สุดคือ Deneb อยู่ที่หางหงส์ มีตำแหน่ง RA 20 ชั่วโมง 41 นาที และ Dec +42 องศาเหนือ ในตำนานกรีก Cygnus เป็นเพื่อนของ Phaethon ที่ตกลงมาจากรถสุริยะ เขาแปลงกายเป็นหงส์เพื่อตามหาซากเพื่อน และได้รับการยกขึ้นบนฟ้าเป็นกลุ่มดาวเพื่อเป็นสัญลักษณ์ของความรักและมิตรภาพ",
    },
    en: {
      name: "Cygnus (The Swan)",
      text: "Cygnus the Swan flies along the Milky Way, its Northern Cross shape unmistakable. Deneb — despite being 2,600 light-years away — shines brilliantly as one of the most luminous stars known. Coordinates: RA 20h 41m, Dec +42°. In myth, devoted Cygnus transformed into a swan to search the river for his fallen friend Phaethon. The gods honored this friendship by placing him among the stars as a symbol of love and loyalty.",
    },
    stars: [
      [50,  5],  // 0 Deneb α — top/tail (bright)
      [50, 38],  // 1 Sadr γ — cross center
      [50, 82],  // 2 Albireo β — bottom/head
      [ 8, 40],  // 3 ε Cyg — left wing tip
      [92, 38],  // 4 δ Cyg — right wing tip
      [26, 39],  // 5 left wing inner
      [74, 38],  // 6 right wing inner
      [50, 62],  // 7 ζ Cyg — lower body
    ],
    lines: [
      [0,1],[1,7],[7,2],
      [3,5],[5,1],[1,6],[6,4],
    ],
    labels: { 0:"Deneb", 2:"Albireo", 1:"Sadr" },
  },

  // ── 23 CORONA BOREALIS ────────────────────────────────────────────────────
  // ref: small semicircle arc, Alphecca brightest at top-center
  "23": {
    th: {
      name: "กลุ่มดาวมงกุฏเหนือ (Corona Borealis)",
      text: "กลุ่มดาวมงกุฏเหนือ มีสัญลักษณ์เป็นมงกุฏวงกลมเล็กๆ ดาวที่สว่างที่สุดคือ Alphecca มีตำแหน่ง RA 15 ชั่วโมง 35 นาที และ Dec +31 องศาเหนือ ในตำนานกรีก มงกุฏนี้เป็นของ Ariadne บุตรสาวกษัตริย์ Minos ที่เทพ Dionysus มอบให้ และ Zeus ได้นำขึ้นไปประดับบนท้องฟ้า",
    },
    en: {
      name: "Corona Borealis (Northern Crown)",
      text: "Corona Borealis the Northern Crown forms a delicate semicircle of stars like a jeweled tiara. Alphecca is its brightest star. Coordinates: RA 15h 35m, Dec +31°. In Greek myth, this golden crown was a wedding gift from the god Dionysus to Ariadne, daughter of King Minos of Crete. Zeus placed it among the stars as a symbol of love and divine blessing.",
    },
    stars: [
      [50,  8],  // 0 Alphecca α — top-center (brightest)
      [22, 28],  // 1 θ CrB — upper-left
      [ 8, 55],  // 2 β CrB — left
      [20, 80],  // 3 γ CrB — lower-left
      [50, 90],  // 4 δ CrB — bottom
      [80, 80],  // 5 ε CrB — lower-right
      [92, 55],  // 6 ι CrB — right
      [78, 28],  // 7 κ CrB — upper-right
    ],
    lines: [
      [1,0],[0,7],
      [2,1],[7,6],
      [3,2],[6,5],
      [4,3],[5,4],
    ],
    labels: { 0:"Alphecca", 2:"β CrB", 6:"ι CrB" },
  },

  // ── 24 CENTAURUS ──────────────────────────────────────────────────────────
  // ref: large constellation body, Alpha Centauri brightest, wide spread
  "24": {
    th: {
      name: "กลุ่มดาวคนครึ่งม้า (Centaurus)",
      text: "กลุ่มดาวคนครึ่งม้า มีสัญลักษณ์เป็นเซนทอร์ครึ่งม้า ครึ่งมนุษย์ ดาวที่สว่างที่สุดคือ Alpha Centauri มีตำแหน่ง RA 14 ชั่วโมง และ Dec −60 องศาใต้ Alpha Centauri เป็นดาวที่อยู่ใกล้โลกที่สุดรองจากดวงอาทิตย์ เพียง 4.37 ปีแสง ในตำนานกรีก เซนทอร์ผู้โด่งดังคือ Chiron อาจารย์ผู้สอนฮีโร่มากมาย",
    },
    en: {
      name: "Centaurus (The Centaur)",
      text: "Centaurus the Centaur is one of the largest and most brilliant constellations. Alpha Centauri — its brightest star — is the nearest stellar system to our Sun at just 4.37 light-years. Coordinates: RA 14h, Dec −60°. It points toward the Southern Cross (Crux) nearby. In Greek myth, this is the noble centaur Chiron, wisest and kindest of his kind — teacher of heroes like Achilles — honored eternally among the stars.",
    },
    stars: [
      [15, 45],  // 0 Alpha Centauri α — bright left (nearest star)
      [30, 38],  // 1 Hadar β — upper-left (bright)
      [50, 25],  // 2 θ Cen — upper-center
      [70, 20],  // 3 upper-right
      [85, 35],  // 4 ν Cen — right shoulder
      [88, 55],  // 5 μ Cen
      [78, 72],  // 6 ε Cen
      [62, 82],  // 7 ζ Cen — lower-right
      [42, 85],  // 8 η Cen — lower-center
      [25, 75],  // 9 γ Cen — lower-left
      [10, 62],  // 10 δ Cen — far left
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,0],
      [1,9],[2,8],[3,7],
    ],
    labels: { 0:"Alpha Centauri", 1:"Hadar", 2:"θ Cen" },
  },

};