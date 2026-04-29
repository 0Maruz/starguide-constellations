export const VALID_STAR_IDS = new Set([
  "aquarius","aquila","aries","auriga","bootes",
  "cancer","canis-major","canis-minor","capricornus","cassiopeia",
  "cygnus","gemini","leo","libra","lyra",
  "orion","phoenix","pisces","sagittarius","scorpius",
  "taurus","ursa-major","ursa-minor","virgo",
]);

export const constellations = {

  // ── ARIES ─────────────────────────────────────────────────────────────────
  "aries": {
    th: {
      name: "กลุ่มดาวเมษ (Aries)",
      text: "กลุ่มดาวเมษ (Aries) หรือ กลุ่มดาวแกะ เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนเมษายน มีสัญลักษณ์เป็นแกะตัวผู้ ประกอบด้วยดาวสว่าง 4 ดวง โดยดาวที่สว่างที่สุดคือ Hamal มีพิกัดท้องฟ้า RA 2 ชั่วโมง 7 นาที และ Dec +23 องศาเหนือ ในตำนานกรีก เล่าว่าเทพ Hermes ได้มอบแกะวิเศษขนทองคำให้แก่นาง Nephele เพื่อช่วยบุตรของเธอคือ Phrixus และ Helle หลบหนีจากแม่เลี้ยงใจร้าย ระหว่างการเดินทาง Helle พลัดตกทะเล ส่วน Phrixus รอดไปถึงแคว้น Colchis แล้วได้บูชายัญแกะถวายแด่เทพ Zeus เมื่อ Zeus เห็นว่าแกะได้ทำหน้าที่อันยิ่งใหญ่ในการช่วยชีวิตผู้บริสุทธิ์ จึงทรงนำแกะขึ้นไปประดับบนฟ้าเป็นกลุ่มดาวเมษ เพื่อเป็นเกียรติและเป็นอนุสรณ์แห่งความกล้าหาญและการเสียสละ",
    },
    en: {
      name: "Aries (The Ram)",
      text: "Aries the Ram is one of the zodiac constellations, associated with April. Its brightest star is Hamal at RA 2h 7m, Dec +23°. In Greek myth, Hermes gifted a golden-fleeced ram to Nephele to save her children Phrixus and Helle from their cruel stepmother. Helle fell into the sea during the journey, while Phrixus reached Colchis safely and sacrificed the ram to Zeus, who honored its great deed by placing it among the stars as a symbol of courage and sacrifice.",
    },
    stars: [
      [ 8, 45],
      [32, 50],
      [48, 55],
      [88, 52],
    ],
    lines: [[0,1],[1,2],[2,3]],
    labels: { 0:"Hamal", 1:"Sheratan", 2:"Mesarthim" },
  },

  // ── TAURUS ────────────────────────────────────────────────────────────────
  "taurus": {
    th: {
      name: "กลุ่มดาวพฤษภ (Taurus)",
      text: "กลุ่มดาวพฤษภ (Taurus) หรือ กลุ่มดาววัวกระทิง เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนพฤษภาคม มีสัญลักษณ์เป็นวัวตัวผู้ ประกอบด้วยดาวสว่าง 11 ดวง โดยดาวที่สว่างที่สุดคือ Aldebaran ซึ่งเป็นตาแดงของวัว มีกระจุกดาวลูกไก่อยู่ด้านขวาของการ์ด มีพิกัด RA 4 ชั่วโมง 35 นาที และ Dec +16 องศาเหนือ ในตำนานกรีก Zeus แปลงกายเป็นวัวขาวเพื่อลักพาตัว Europa ลูกสาวของกษัตริย์ Agenor บินไปยังเกาะครีต ทำให้วัวกระทิงถูกยกขึ้นบนท้องฟ้าเป็นกลุ่มดาวพฤษภ เพื่อเป็นสัญลักษณ์แห่งความแข็งแรงและความมั่นคง",
    },
    en: {
      name: "Taurus (The Bull)",
      text: "Taurus the Bull is a zodiac constellation for May. Aldebaran, its fiery orange eye, is the brightest star, and the Pleiades cluster adorns the bull's shoulder. Coordinates: RA 4h 35m, Dec +16°. In Greek myth, Zeus transformed into a magnificent white bull to carry Europa, daughter of King Agenor, to the island of Crete. The bull was immortalized in the sky as a symbol of strength and steadfastness.",
    },
    stars: [
      [10, 18],
      [35, 55],
      [42, 62],
      [50, 57],
      [38, 68],
      [58, 65],
      [80, 20],
      [90, 48],
    ],
    lines: [
      [0,2],
      [1,2],[2,3],[3,5],[5,4],[4,1],
      [5,6],[5,7],
    ],
    labels: { 5:"Aldebaran", 6:"Elnath", 0:"Pleiades" },
  },

  // ── GEMINI ────────────────────────────────────────────────────────────────
  "gemini": {
    th: {
      name: "กลุ่มดาวเมถุน (Gemini)",
      text: "กลุ่มดาวเมถุน (Gemini) หรือ กลุ่มดาวคนคู่ เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนมิถุนายน มีสัญลักษณ์เป็นผู้ชายคู่กัน ประกอบด้วยดาวสว่าง 17 ดวง โดยสว่างที่สุดคือ Castor และรองลงมาคือ Pollux ซึ่งเป็นส่วนหัวของคนที่คู่กัน มีตำแหน่ง RA 7 ชั่วโมง 35 นาที และ Dec +28 องศาเหนือ ในตำนานกรีก Castor และ Pollux เป็นพี่น้องที่ผูกพันกันมาก แม้ Castor จะเป็นมนุษย์ธรรมดาและ Pollux เป็นบุตรของเทพ Zeus ด้วยความสงสารของเทพ Zeus จึงได้ให้ทั้งคู่อยู่ด้วยกันบนท้องฟ้า กลายเป็นกลุ่มดาวเมถุน เพื่อเป็นสัญลักษณ์ของความผูกพันและมิตรภาพ",
    },
    en: {
      name: "Gemini (The Twins)",
      text: "Gemini the Twins is a zodiac constellation for June. Castor and Pollux — the twin bright heads — stand side by side. Coordinates: RA 7h 35m, Dec +28°. In Greek myth, mortal Castor and divine Pollux son of Zeus were so devoted to each other that Zeus united them forever in the sky as an eternal symbol of brotherhood and unbreakable friendship.",
    },
    stars: [
      [27,  5],
      [48,  8],
      [18, 28],
      [40, 30],
      [12, 52],
      [36, 50],
      [15, 72],
      [34, 70],
      [18, 90],
      [52, 82],
      [58, 95],
    ],
    lines: [
      [0,2],[2,4],[4,6],[6,8],
      [1,3],[3,5],[5,7],[7,9],[9,10],
      [0,1],[2,3],[4,5],[6,7],
    ],
    labels: { 0:"Castor", 1:"Pollux", 9:"Alhena" },
  },

  // ── CANCER ────────────────────────────────────────────────────────────────
  "cancer": {
    th: {
      name: "กลุ่มดาวกรกฎ (Cancer)",
      text: "กลุ่มดาวกรกฎ (Cancer) หรือ กลุ่มดาวปู เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนกรกฎาคม มีสัญลักษณ์เป็นปู ประกอบด้วยดาวสว่าง 5 ดวง โดยมี Al Tarf ที่สังเกตได้ชัดเจนที่สุด มีตำแหน่ง RA 8 ชั่วโมง 42 นาที และ Dec +20 องศาเหนือ ในตำนานกรีก ปูยักษ์ถูกเทพี Hera ส่งไปช่วย Hydra ต่อสู้กับ Hercules แต่ถูกเหยียบตาย Hera ยกย่องในความจงรักภักดีของปู จึงถูกยกขึ้นเป็นกลุ่มดาวกรกฎ เพื่อเป็นเกียรติแก่ความทุ่มเทและความเสียสละ",
    },
    en: {
      name: "Cancer (The Crab)",
      text: "Cancer the Crab is a faint zodiac constellation for July, home to the Beehive Cluster M44 at its center. Coordinates: RA 8h 42m, Dec +20°. In Greek myth, Hera sent a giant crab to distract Hercules during his battle with the Hydra. Though crushed underfoot, Hera honored its loyalty by immortalizing it among the stars as a symbol of devotion and sacrifice.",
    },
    stars: [
      [50, 50],
      [28, 28],
      [68, 25],
      [12, 65],
      [85, 60],
      [30, 78],
      [72, 75],
    ],
    lines: [
      [3,1],[1,0],[0,2],[2,4],
      [1,5],[2,6],
    ],
    labels: { 0:"Beehive M44", 3:"Acubens", 4:"β Tarf" },
  },

  // ── LEO ───────────────────────────────────────────────────────────────────
  "leo": {
    th: {
      name: "กลุ่มดาวสิงห์ (Leo)",
      text: "กลุ่มดาวสิงห์ (Leo) หรือ กลุ่มดาวสิงโต เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนสิงหาคม มีสัญลักษณ์เป็นสิงโตตัวผู้ ประกอบด้วยดาวสว่าง 9 ดวง โดยดาวที่สว่างที่สุดคือ Regulus มีตำแหน่ง RA 10 ชั่วโมง 8 นาที และ Dec +12 องศาเหนือ ในตำนานกรีก สิงโตเนเมียน เป็นสัตว์วิเศษที่ Hercules ต้องฆ่าในการทำภารกิจ 12 ภารกิจ หลังจาก Hercules ทำสำเร็จ Zeus จึงนำสิงโตขึ้นไปบนท้องฟ้าเป็นกลุ่มดาวสิงห์ เพื่อเป็นสัญลักษณ์ของความกล้าหาญและอำนาจ",
    },
    en: {
      name: "Leo (The Lion)",
      text: "Leo the Lion is a zodiac constellation for August. Bright Regulus anchors the Sickle — a backward question mark forming the lion's mane. Coordinates: RA 10h 8m, Dec +12°. In Greek myth, the fearsome Nemean Lion was slain by Hercules as the first of his twelve labors. Zeus immortalized the mighty lion in the sky as a symbol of courage and royal power.",
    },
    stars: [
      [30, 75],
      [25, 55],
      [18, 38],
      [25, 20],
      [42, 12],
      [55, 28],
      [65, 48],
      [95, 38],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,0],
      [4,5],[5,6],[6,7],
      [0,6],
    ],
    labels: { 0:"Regulus", 7:"Denebola", 4:"Algieba" },
  },

  // ── VIRGO ─────────────────────────────────────────────────────────────────
  "virgo": {
    th: {
      name: "กลุ่มดาวกันย์ (Virgo)",
      text: "กลุ่มดาวกันย์ (Virgo) หรือ กลุ่มดาวหญิงสาว เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกันยายน มีสัญลักษณ์เป็นหญิงสาวถือรวงข้าว ประกอบด้วยดาวสว่างหลายดวง โดยดาวที่สว่างที่สุดคือ Spica มีตำแหน่ง RA 13 ชั่วโมง 25 นาที และ Dec −11 องศาใต้ ในตำนานกรีก เทพี Demeter เทพีแห่งความบริสุทธิ์และความอุดมสมบูรณ์ ถูก Hades ลักพาตัวบุตรสาว ทำให้เกิดฤดูกาล กลุ่มดาวกันย์จึงถูกยกขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความบริสุทธิ์และความอุดมสมบูรณ์",
    },
    en: {
      name: "Virgo (The Maiden)",
      text: "Virgo the Maiden is the second largest constellation and a zodiac sign for September. Brilliant Spica blazes at the lower left. Coordinates: RA 13h 25m, Dec −11°. In Greek myth, Demeter — goddess of purity and abundance — mourned her daughter Persephone taken by Hades, and their separation created the seasons. Virgo was lifted to the sky as a symbol of purity and the fertile earth.",
    },
    stars: [
      [35, 90],
      [42, 72],
      [52, 55],
      [58, 38],
      [62, 22],
      [68,  8],
      [78, 28],
      [88, 45],
      [28, 55],
      [15, 42],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],
      [5,6],[6,7],
      [2,8],[8,9],
    ],
    labels: { 0:"Spica", 5:"Vindemiatrix", 2:"Porrima" },
  },

  // ── LIBRA ─────────────────────────────────────────────────────────────────
  "libra": {
    th: {
      name: "กลุ่มดาวตุล (Libra)",
      text: "กลุ่มดาวตุล (Libra) หรือ กลุ่มดาวตาชั่ง เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนตุลาคม มีสัญลักษณ์เป็นตาชั่ง ประกอบด้วยดาวสว่าง 5 ดวง โดยสว่างที่สุดคือ Zuben Elgenubi มีตำแหน่ง RA 15 ชั่วโมง 18 นาที และ Dec −15 องศาใต้ ในตำนานกรีก ตาชั่งเป็นเครื่องมือของเทพี Astraea เทพีแห่งความยุติธรรม กลุ่มดาวตุลจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความยุติธรรมและความสมดุล",
    },
    en: {
      name: "Libra (The Scales)",
      text: "Libra the Scales is the only inanimate zodiac symbol, associated with October. Zubenelgenubi is its brightest star. Coordinates: RA 15h 18m, Dec −15°. Its star names in Arabic mean 'southern and northern scorpion claws' — they were once considered part of Scorpius. In Greek myth, these are the scales of Astraea, goddess of justice, placed in the sky as a symbol of fairness and balance.",
    },
    stars: [
      [30, 78],
      [68, 70],
      [50, 32],
      [22, 55],
      [78, 52],
    ],
    lines: [
      [3,2],[2,4],
      [2,0],[2,1],
      [3,0],[4,1],
    ],
    labels: { 0:"Zubenelgenubi", 1:"Zubeneschamali", 2:"Brachium" },
  },

  // ── SCORPIUS ──────────────────────────────────────────────────────────────
  "scorpius": {
    th: {
      name: "กลุ่มดาวพิจิก (Scorpius)",
      text: "กลุ่มดาวพิจิก (Scorpius) หรือ กลุ่มดาวแมงป่อง เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนพฤศจิกายน มีสัญลักษณ์เป็นแมงป่อง ประกอบด้วยดาวสว่าง 13 ดวง โดยสว่างที่สุดคือ Antares มีตำแหน่ง RA 16 ชั่วโมง 29 นาที และ Dec −26 องศาใต้ ในตำนานกรีก แมงป่องถูกส่งโดยเทพี Artemis เพื่อฆ่า Orion ที่อวดเก่ง กลุ่มดาวพิจิกจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของพลังและความเข้มแข็ง",
    },
    en: {
      name: "Scorpius (The Scorpion)",
      text: "Scorpius the Scorpion is a zodiac constellation for November. Red supergiant Antares blazes at its heart — its name means 'rival of Mars.' Coordinates: RA 16h 29m, Dec −26°. In Greek myth, Artemis sent this scorpion to slay the boastful Orion. Zeus honored both by placing them on opposite sides of the sky so they never meet — Orion sets as Scorpius rises.",
    },
    stars: [
      [28,  5],
      [45,  5],
      [18, 18],
      [36, 18],
      [32, 32],
      [40, 45],
      [46, 58],
      [50, 68],
      [53, 78],
      [50, 88],
      [40, 94],
      [28, 90],
      [16, 82],
      [ 8, 72],
      [12, 65],
    ],
    lines: [
      [2,0],[0,1],[1,3],
      [2,3],[3,4],
      [4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],
    ],
    labels: { 4:"Antares", 13:"Shaula", 14:"Lesath" },
  },

  // ── SAGITTARIUS ───────────────────────────────────────────────────────────
  "sagittarius": {
    th: {
      name: "กลุ่มดาวธนู (Sagittarius)",
      text: "กลุ่มดาวธนู (Sagittarius) หรือ กลุ่มดาวคนยิงธนู เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนธันวาคม มีสัญลักษณ์เป็นคนครึ่งม้าเล็งธนู ประกอบด้วยดาวสว่าง 19 ดวง โดยสว่างที่สุดคือ Kaus Australis มีตำแหน่ง RA 19 ชั่วโมง และ Dec −25 องศาใต้ ในตำนานกรีก Heracles ใช้ลูกศรที่ชุบพิษจากเลือดไฮดรา ยิงพลาดไปโดน Chiron เข้า แม้ไม่ตั้งใจแต่พิษก็ร้ายแรงจนไม่มีทางรักษาได้ Chiron เป็นอมตะ จึงทนทุกข์ทรมานอย่างมหาศาล สุดท้ายจึงสละความเป็นอมตะ เมื่อ Chiron สิ้นชีวิตลง Zeus ที่สงสารและยกย่องในความดีของเขา จึงนำรูปร่างของเซนทอร์นักธนูไปประดับบนท้องฟ้าเป็นสัญลักษณ์แห่งปัญญาและการแสวงหาเป้าหมาย",
    },
    en: {
      name: "Sagittarius (The Archer)",
      text: "Sagittarius the Archer is a zodiac constellation for December. Kaus Australis is its brightest star. Coordinates: RA 19h, Dec −25°. The Teapot asterism points its spout toward the galactic center. In myth, the noble centaur Chiron was accidentally poisoned by Hercules. Unable to die and suffering greatly, he willingly surrendered his immortality. Zeus, moved by his wisdom and sacrifice, placed the archer's form among the stars.",
    },
    stars: [
      [82, 75],
      [78, 52],
      [75, 30],
      [58, 15],
      [40,  8],
      [22, 28],
      [ 8, 48],
      [15, 68],
      [38, 78],
      [60, 82],
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

  // ── CAPRICORNUS ───────────────────────────────────────────────────────────
  "capricornus": {
    th: {
      name: "กลุ่มดาวมกร (Capricornus)",
      text: "กลุ่มดาวมกร (Capricornus) หรือ กลุ่มดาวแพะทะเล เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนมกราคม มีสัญลักษณ์เป็นแพะครึ่งปลา ประกอบด้วยดาวสว่าง 10 ดวง โดยสว่างที่สุดคือ Deneb Algedi มีตำแหน่ง RA 21 ชั่วโมง 47 นาที และ Dec −16 องศาใต้ ในตำนานกรีก เกี่ยวกับ Pan ครึ่งแพะครึ่งปลาซึ่งเป็นเทพ ที่หนีปีศาจ Typhon แล้วกลายร่างครึ่งปลา กลุ่มดาวมกรจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความมุ่งมั่นและความพยายาม",
    },
    en: {
      name: "Capricornus (Sea Goat)",
      text: "Capricornus the Sea Goat is a zodiac constellation for January. Deneb Algedi is its brightest star. Coordinates: RA 21h 47m, Dec −16°. Known to Babylonians as the divine sea-goat for over 3,000 years. In Greek myth, the god Pan leaped into the Nile to escape the monster Typhon, accidentally transforming into this half-goat, half-fish creature — placed in the sky as a symbol of determination and perseverance.",
    },
    stars: [
      [ 8, 28],
      [28, 18],
      [52, 10],
      [75, 18],
      [92, 32],
      [88, 55],
      [72, 75],
      [48, 85],
      [22, 78],
      [ 5, 55],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],
      [1,9],[2,7],
    ],
    labels: { 0:"Algedi", 6:"Deneb Algedi", 1:"Dabih" },
  },

  // ── AQUARIUS ──────────────────────────────────────────────────────────────
  "aquarius": {
    th: {
      name: "กลุ่มดาวกุมภ์ (Aquarius)",
      text: "กลุ่มดาวกุมภ์ (Aquarius) หรือ กลุ่มดาวคนแบกหม้อน้ำ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกุมภาพันธ์ มีสัญลักษณ์เป็นชายหนุ่มรินน้ำ ประกอบด้วยดาวสว่าง 15 ดวง โดยสว่างที่สุดคือ Sadalmelik มีตำแหน่ง RA 22 ชั่วโมง 0 นาที และ Dec −5 องศาใต้ ในตำนานกรีก Ganymede เป็นเด็กหนุ่มรูปงามที่ Zeus พาไปเป็นคนรินน้ำให้เทพ กลุ่มดาวกุมภ์จึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของการให้และความเมตตา",
    },
    en: {
      name: "Aquarius (Water Bearer)",
      text: "Aquarius the Water Bearer is a zodiac constellation for February. Sadalmelik is its brightest star. Coordinates: RA 22h 0m, Dec −5°. The Y-shaped Water Jar pours a stream of stars southward. In Greek myth, the beautiful Ganymede was brought to Olympus by Zeus to serve as cupbearer to the gods — placed in the sky as a symbol of generosity and divine compassion.",
    },
    stars: [
      [35, 15],
      [55, 22],
      [45, 35],
      [30, 40],
      [58, 40],
      [40, 52],
      [28, 62],
      [18, 72],
      [10, 83],
      [32, 88],
      [50, 82],
      [65, 68],
      [75, 52],
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

  // ── PISCES ────────────────────────────────────────────────────────────────
  "pisces": {
    th: {
      name: "กลุ่มดาวมีน (Pisces)",
      text: "กลุ่มดาวมีน (Pisces) หรือ กลุ่มดาวปลาคู่ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนมีนาคม มีสัญลักษณ์เป็นปลาคู่ ประกอบด้วยดาวสว่าง 14 ดวง โดยสว่างที่สุดคือ Alrescha มีตำแหน่ง RA 1 ชั่วโมง 0 นาที และ Dec +15 องศาเหนือ ในตำนานกรีก เทพี Aphrodite และลูกชาย Eros แปลงร่างเป็นปลาเพื่อหนีจาก Typhon และผูกหางด้วยเส้นเชือก กลุ่มดาวมีนจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความรักและความผูกพัน",
    },
    en: {
      name: "Pisces (The Fish)",
      text: "Pisces the Fish is a zodiac constellation for March. Alrescha, the knot tying the two fish, is its brightest star. Coordinates: RA 1h 0m, Dec +15°. In Greek myth, Aphrodite and her son Eros transformed into two fish to escape the fearsome monster Typhon, tying their tails together so they would never be separated — immortalized in the sky as a symbol of love and eternal bond.",
    },
    stars: [
      [60, 62],
      [42, 45],
      [32, 30],
      [20, 22],
      [10, 32],
      [ 8, 48],
      [15, 60],
      [30, 65],
      [44, 60],
      [72, 50],
      [82, 38],
      [92, 22],
      [95,  8],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],
      [0,9],[9,10],[10,11],[11,12],
    ],
    labels: { 0:"Alrescha", 12:"η Psc" },
  },

  // ── ORION ─────────────────────────────────────────────────────────────────
  "orion": {
    th: {
      name: "กลุ่มดาวนายพราน (Orion)",
      text: "กลุ่มดาวนายพราน (Orion) หรือ กลุ่มดาวโอไรออน เป็นหนึ่งในกลุ่มดาวที่สว่างและโด่งดังที่สุดบนท้องฟ้า มีสัญลักษณ์เป็นนายพรานผู้ถือคันธนูและโล่ ประกอบด้วยดาวสว่าง 7 ดวง โดยมีดาวที่เด่นที่สุดคือ Betelgeuse และ Rigel ซึ่งเป็นไหล่และเท้าของนายพรานตามลำดับ มีพิกัด RA 5 ชั่วโมง และ Dec +5 องศาเหนือ ในตำนานกรีก Orion เป็นพรานล่าสัตว์ผู้เก่งกาจ แต่ถูกแมงป่องพิฆาตตามคำสั่งของเทพี Artemis จึงถูก Zeus ยกขึ้นบนท้องฟ้าเป็นกลุ่มดาวนายพราน คู่กับกลุ่มดาวสุนัขล่าเนื้อและแมงป่อง",
    },
    en: {
      name: "Orion (The Hunter)",
      text: "Orion the Hunter is one of the most magnificent constellations in the sky. Betelgeuse marks the left shoulder, Rigel the right foot. Coordinates: RA 5h, Dec +5°. Three belt stars — Mintaka, Alnilam, Alnitak — form an unmistakable diagonal line. In Greek myth, Orion was a great hunter slain by Scorpius at Artemis's command. Zeus honored both by placing them on opposite sides of the sky so they can never meet.",
    },
    stars: [
      [48,  5],
      [28, 25],
      [68, 20],
      [65, 50],
      [48, 55],
      [30, 60],
      [30, 88],
      [72, 85],
      [40, 70],
      [38, 79],
    ],
    lines: [
      [0,1],[0,2],
      [1,5],[2,3],
      [3,4],[4,5],
      [3,7],[5,6],
      [5,8],[8,9],
    ],
    labels: { 1:"Betelgeuse", 7:"Rigel", 4:"Alnilam" },
  },

  // ── CANIS MINOR ───────────────────────────────────────────────────────────
  "canis-minor": {
    th: {
      name: "กลุ่มดาวหมาเล็ก (Canis Minor)",
      text: "กลุ่มดาวหมาเล็ก (Canis Minor) เป็นกลุ่มดาวที่มีสัญลักษณ์เป็นสุนัขล่าเนื้อคู่ใจของนายพราน ประกอบด้วยดาวสว่างเพียงไม่กี่ดวง โดยดาวที่สว่างที่สุดคือ Procyon มีตำแหน่ง RA 7 ชั่วโมง 39 นาที และ Dec +5 องศาเหนือ ในตำนานกรีก หมาเล็กเป็นสุนัขที่ติดตามนายพราน Orion และถูกยกขึ้นบนฟ้าเพื่อเคียงข้างเจ้านายของมัน",
    },
    en: {
      name: "Canis Minor (Little Dog)",
      text: "Canis Minor the Little Dog is Orion's faithful lesser hunting companion. Procyon — its brightest star — is only 11.5 light-years from Earth and forms the Winter Triangle with Sirius and Betelgeuse. Coordinates: RA 7h 39m, Dec +5°. In Greek myth, this loyal little hound faithfully followed Orion and was honored with a permanent place in the sky forever at its master's side.",
    },
    stars: [
      [25, 45],
      [75, 55],
    ],
    lines: [[0,1]],
    labels: { 0:"Procyon", 1:"Gomeisa" },
  },

  // ── BOOTES ────────────────────────────────────────────────────────────────
  "bootes": {
    th: {
      name: "กลุ่มดาวคนเลี้ยงสัตว์ (Boötes)",
      text: "กลุ่มดาวคนเลี้ยงสัตว์ (Bootes) มีสัญลักษณ์เป็นชายผู้เลี้ยงสัตว์และถือเคียว ประกอบด้วยดาวสว่าง 9 ดวง โดยดาวที่สว่างที่สุดคือ Arcturus ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 14 ชั่วโมง 15 นาที และ Dec +19 องศาเหนือ ตามตำนานกรีก คนเลี้ยงสัตว์เชื่อมโยงกับ Arcas บุตรของ Zeus และ Callisto ผู้ที่ถูกยกขึ้นเป็นกลุ่มดาวหมีใหญ่ คนเลี้ยงสัตว์จึงถูกวาดไว้บนฟ้าเพื่อเฝ้าดูฝูงสัตว์และเป็นสัญลักษณ์แห่งความขยัน",
    },
    en: {
      name: "Boötes (The Herdsman)",
      text: "Boötes the Herdsman drives the Great Bear around the pole. Orange giant Arcturus — one of the brightest stars visible — blazes at its base. Coordinates: RA 14h 15m, Dec +19°. 'Arc to Arcturus' along the Big Dipper's handle is a classic navigation trick. In Greek myth, Boötes is Arcas, son of Zeus, placed in the sky as a symbol of diligence and watchful care.",
    },
    stars: [
      [50, 92],
      [30, 68],
      [70, 65],
      [20, 45],
      [80, 42],
      [30, 22],
      [70, 20],
      [50,  8],
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

  // ── AURIGA ────────────────────────────────────────────────────────────────
  "auriga": {
    th: {
      name: "กลุ่มดาวสารถี (Auriga)",
      text: "กลุ่มดาวสารถี (Auriga) มีสัญลักษณ์เป็นชายขับรถศึก ถือบังเหียน ประกอบด้วยดาวสว่าง 5 ดวง โดยดาวที่สว่างที่สุดคือ Capella ซึ่งเป็นหนึ่งในดาวฤกษ์ที่สว่างที่สุดในท้องฟ้า มีตำแหน่ง RA 5 ชั่วโมง 16 นาที และ Dec +46 องศาเหนือ ในตำนานกรีก Auriga มักเชื่อมโยงกับเทพ Hephaestus หรือกษัตริย์ที่คิดค้นรถศึก จึงถูกยกขึ้นบนฟ้าเป็นกลุ่มดาวสารถีแทนเกียรติยศ",
    },
    en: {
      name: "Auriga (The Charioteer)",
      text: "Auriga the Charioteer commands his chariot across the sky. Brilliant Capella — a pair of giant stars — is one of the brightest in the night sky. Coordinates: RA 5h 16m, Dec +46°. The pentagon of Auriga is easy to spot in winter skies. In Greek myth, Auriga is linked to Hephaestus or a legendary king who invented the four-horse chariot, immortalized in the sky as a symbol of ingenuity and honor.",
    },
    stars: [
      [20, 12],
      [65,  8],
      [90, 42],
      [75, 82],
      [25, 88],
      [ 5, 52],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
      [0,3],
    ],
    labels: { 0:"Capella", 1:"Menkib", 3:"Hassaleh" },
  },

  // ── CASSIOPEIA ────────────────────────────────────────────────────────────
  "cassiopeia": {
    th: {
      name: "กลุ่มดาวค้างคาว (Cassiopeia)",
      text: "กลุ่มดาวค้างคาว (Cassiopeia) มีลักษณะเด่นคือดาว 5 ดวงเรียงกันเป็นรูปตัว W หรือ M บนท้องฟ้า ในตำนานกรีก Cassiopeia เป็นราชินีผู้โอ้อวดความงามของตนและลูกสาวจนสร้างความไม่พอใจแก่เทพทะเลโปไซดอน ทำให้แคว้นถูกส่งมังกรทะเลมาทำลาย เพื่อเป็นการลงโทษ Cassiopeia ถูกนำไปประดับบนท้องฟ้า โดยถูกจัดให้นั่งบนบัลลังก์หมุนรอบขั้วฟ้า ครึ่งหนึ่งของเวลาดูเหมือนนั่งกลับหัว เป็นเครื่องเตือนใจถึงโทษของความหยิ่งผยอง",
    },
    en: {
      name: "Cassiopeia",
      text: "Cassiopeia's five stars form a clear W or M shape near the north pole, visible year-round from the northern hemisphere. In Greek myth, Queen Cassiopeia boasted that she and her daughter surpassed the beauty of the sea nymphs, enraging Poseidon. As punishment, she was bound to a throne that endlessly circles the celestial pole — sometimes upside down — an eternal reminder of the dangers of arrogance.",
    },
    stars: [
      [ 5, 38],
      [27, 78],
      [50, 28],
      [73, 72],
      [95, 35],
    ],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: { 0:"Caph", 1:"Schedar", 2:"γ Cas", 3:"Ruchbah", 4:"Segin" },
  },

  // ── URSA MINOR ────────────────────────────────────────────────────────────
  "ursa-minor": {
    th: {
      name: "กลุ่มดาวหมีเล็ก (Ursa Minor)",
      text: "กลุ่มดาวหมีเล็ก (Ursa Minor) หรือ กลุ่มดาวเล็ก มีสัญลักษณ์เป็นหมี ประกอบด้วยดาวสว่าง 7 ดวง โดยดาวที่สำคัญที่สุดคือ Polaris หรือดาวเหนือ มีตำแหน่ง RA 15 ชั่วโมง และ Dec +75 องศาเหนือ ในตำนานกรีก หมีเล็กมักถูกโยงกับบุตรชายของ Callisto และ Zeus ซึ่งถูกยกขึ้นบนฟ้าเพื่ออยู่คู่กับมารดาของตนที่กลายเป็นหมีใหญ่",
    },
    en: {
      name: "Ursa Minor (Little Bear)",
      text: "Ursa Minor the Little Bear has Polaris — Earth's current north pole star — at the tip of its handle. The bowl opens downward. Coordinates: RA 15h, Dec +75°. Kochab and Pherkad are known as the Guardians of the Pole. In Greek myth, the Little Bear is Arcas, son of Callisto and Zeus, placed in the sky to be forever near his mother the Great Bear.",
    },
    stars: [
      [50,  5],
      [55, 22],
      [62, 38],
      [72, 52],
      [85, 65],
      [70, 72],
      [58, 58],
    ],
    lines: [
      [0,1],[1,2],[2,3],
      [3,4],[4,5],[5,6],[6,3],
    ],
    labels: { 0:"Polaris", 5:"Kochab", 4:"Pherkad" },
  },

  // ── URSA MAJOR ────────────────────────────────────────────────────────────
  "ursa-major": {
    th: {
      name: "กลุ่มดาวหมีใหญ่ (Ursa Major)",
      text: "กลุ่มดาวหมีใหญ่ (Ursa Major) เป็นหนึ่งในกลุ่มดาวที่โดดเด่นที่สุดบนท้องฟ้า มีสัญลักษณ์เป็นหมี ประกอบด้วยดาวสว่าง 7 ดวงที่เรียงตัวเป็นกระบวยใหญ่ โดยดาวที่สว่างที่สุดคือ Dubhe มีตำแหน่ง RA 11 ชั่วโมง และ Dec +56 องศาเหนือ ในตำนานกรีก หมีใหญ่คือตัว Callisto หญิงงามที่ถูกแปลงร่างเป็นหมีโดยเทพี Hera และต่อมาถูก Zeus ยกขึ้นบนฟ้าเพื่อปกป้อง",
    },
    en: {
      name: "Ursa Major (Great Bear)",
      text: "Ursa Major the Great Bear contains the famous Big Dipper — seven stars forming a bowl and curved handle. Dubhe is its brightest star. Coordinates: RA 11h, Dec +56°. Pointer stars Dubhe and Merak aim directly at Polaris. In myth, Callisto was transformed into a bear by Hera; Zeus placed her in the sky to protect her from harm.",
    },
    stars: [
      [18, 12],
      [22, 35],
      [42, 48],
      [38, 22],
      [58, 28],
      [75, 42],
      [95, 62],
    ],
    lines: [
      [0,1],[1,2],[2,3],[3,0],
      [3,4],[4,5],[5,6],
    ],
    labels: { 0:"Dubhe", 1:"Merak", 5:"Mizar", 6:"Alkaid" },
  },

  // ── LYRA ──────────────────────────────────────────────────────────────────
  "lyra": {
    th: {
      name: "กลุ่มดาวพิณ (Lyra)",
      text: "กลุ่มดาวพิณ (Lyra) มีสัญลักษณ์เป็นเครื่องดนตรีพิณของ Orpheus ประกอบด้วยดาวสว่าง 5 ดวง โดยดาวที่สว่างที่สุดคือ Vega ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 18 ชั่วโมง 37 นาที และ Dec +38 องศาเหนือ ตามตำนานกรีก Orpheus เป็นนักดนตรีผู้ใช้พิณบรรเลงจนเทพเจ้าหลงใหล หลังจากเขาเสียชีวิต Zeus จึงนำพิณขึ้นบนฟ้าเป็นอนุสรณ์ให้แก่ Orpheus",
    },
    en: {
      name: "Lyra (The Lyre)",
      text: "Lyra the Lyre is the harp of the legendary Orpheus. Brilliant Vega — fifth brightest star in the sky — anchors the Summer Triangle with Deneb and Altair. Coordinates: RA 18h 37m, Dec +38°. In Greek myth, Orpheus played so beautifully that even rocks wept. After his death, Zeus honored him by placing his lyre among the stars.",
    },
    stars: [
      [50,  8],
      [25, 40],
      [28, 65],
      [50, 75],
      [72, 65],
      [75, 40],
    ],
    lines: [
      [0,1],[0,5],
      [1,2],[2,3],[3,4],[4,5],[5,1],
    ],
    labels: { 0:"Vega", 2:"Sheliak", 4:"Sulafat" },
  },

  // ── AQUILA ────────────────────────────────────────────────────────────────
  "aquila": {
    th: {
      name: "กลุ่มดาวนกอินทรี (Aquila)",
      text: "กลุ่มดาวนกอินทรี (Aquila) มีสัญลักษณ์เป็นนกอินทรีผู้ยิ่งใหญ่ ประกอบด้วยดาวสว่าง 10 ดวง โดยดาวที่สว่างที่สุดคือ Altair มีตำแหน่ง RA 19 ชั่วโมง 51 นาที และ Dec +8 องศาเหนือ ในตำนานกรีก Aquila คือนกอินทรีของ Zeus ที่ทำหน้าที่พา Ganymede ขึ้นสู่โอลิมปัสเพื่อเป็นคนรินน้ำ",
    },
    en: {
      name: "Aquila (The Eagle)",
      text: "Aquila the Eagle soars along the Milky Way with brilliant Altair at its center. Altair rotates so fast it is visibly flattened at its poles. Coordinates: RA 19h 51m, Dec +8°. Altair forms one corner of the Summer Triangle with Vega and Deneb. In Greek myth, Aquila is Zeus's great eagle — tasked with carrying thunderbolts and bringing the beautiful Ganymede up to Olympus to serve the gods.",
    },
    stars: [
      [50, 38],
      [36, 30],
      [64, 45],
      [50, 15],
      [38, 58],
      [42, 72],
      [50, 85],
      [60, 70],
    ],
    lines: [
      [1,0],[0,2],
      [3,0],
      [0,4],[4,5],[5,6],
      [2,7],[7,6],
    ],
    labels: { 0:"Altair", 1:"Tarazed", 2:"Alshain" },
  },

  // ── CYGNUS ────────────────────────────────────────────────────────────────
  "cygnus": {
    th: {
      name: "กลุ่มดาวหงส์ (Cygnus)",
      text: "กลุ่มดาวหงส์ (Cygnus) มีสัญลักษณ์เป็นนกที่กางปีกบิน ประกอบด้วยดาวสว่าง 9 ดวง โดยดาวที่สว่างที่สุดคือ Deneb อยู่ที่หางหงส์ มีตำแหน่ง RA 20 ชั่วโมง 41 นาที และ Dec +42 องศาเหนือ ในตำนานกรีก Cygnus เป็นเพื่อนของ Phaethon ที่ตกลงมาจากรถสุริยะ เขาแปลงกายเป็นหงส์เพื่อตามหาซากเพื่อน และได้รับการยกขึ้นบนฟ้าเป็นกลุ่มดาวเพื่อเป็นสัญลักษณ์ของความรักและมิตรภาพ",
    },
    en: {
      name: "Cygnus (The Swan)",
      text: "Cygnus the Swan flies along the Milky Way, its Northern Cross shape unmistakable. Deneb — 2,600 light-years away — is one of the most luminous stars known. Coordinates: RA 20h 41m, Dec +42°. In myth, devoted Cygnus transformed into a swan to search the river for his fallen friend Phaethon. The gods honored this friendship by placing him among the stars as a symbol of love and loyalty.",
    },
    stars: [
      [50,  5],
      [50, 38],
      [50, 82],
      [ 8, 40],
      [92, 38],
      [26, 39],
      [74, 38],
      [50, 62],
    ],
    lines: [
      [0,1],[1,7],[7,2],
      [3,5],[5,1],[1,6],[6,4],
    ],
    labels: { 0:"Deneb", 2:"Albireo", 1:"Sadr" },
  },

  // ── CANIS MAJOR ───────────────────────────────────────────────────────────
  "canis-major": {
    th: {
      name: "กลุ่มดาวหมาใหญ่ (Canis Major)",
      text: "กลุ่มดาวหมาใหญ่ (Canis Major) มีสัญลักษณ์เป็นสุนัขใหญ่ ประกอบด้วยดาวสว่างหลายดวง โดยดาวที่สว่างที่สุดคือ Sirius ซึ่งเป็นดาวที่สว่างที่สุดบนท้องฟ้ายามค่ำคืน มีตำแหน่ง RA 6 ชั่วโมง 45 นาที และ Dec −16 องศาใต้ ในตำนาน หมาใหญ่เป็นสุนัขคู่ใจของ Orion จึงถูกยกขึ้นบนฟ้าเคียงข้างเจ้านาย",
    },
    en: {
      name: "Canis Major (The Great Dog)",
      text: "Canis Major the Great Dog faithfully follows Orion across the winter sky. Sirius — its brilliant alpha star — is the brightest star in the entire night sky at magnitude −1.46, only 8.6 light-years away. Coordinates: RA 6h 45m, Dec −16°. The ancient 'Dog Days of summer' were named for Sirius rising with the Sun. In Greek myth, this loyal hound at Orion's heel was honored with a permanent place among the stars.",
    },
    stars: [
      [50, 20],
      [22, 28],
      [68, 18],
      [72, 52],
      [62, 68],
      [22, 72],
      [90, 62],
    ],
    lines: [
      [0,1],[0,2],
      [0,3],[2,3],
      [3,4],[4,5],[1,5],
      [3,6],[4,6],
    ],
    labels: { 0:"Sirius", 4:"Adhara", 6:"Aludra" },
  },

  // ── PHOENIX ───────────────────────────────────────────────────────────────
  "phoenix": {
    th: {
      name: "กลุ่มดาวฟินิกซ์ (Phoenix)",
      text: "กลุ่มดาวฟินิกซ์ (Phoenix) มีสัญลักษณ์เป็นนกฟินิกซ์ในตำนานที่เกิดใหม่จากกองไฟ ประกอบด้วยดาวสว่างหลายดวง โดยดาวที่สว่างที่สุดคือ Ankaa มีตำแหน่ง RA 0 ชั่วโมง 26 นาที และ Dec −42 องศาใต้ กลุ่มดาวนี้ถูกตั้งชื่อโดยนักดาราศาสตร์ชาวดัตช์ในศตวรรษที่ 16 และเป็นสัญลักษณ์ของการฟื้นคืนชีพและความอมตะ",
    },
    en: {
      name: "Phoenix (The Firebird)",
      text: "Phoenix the mythical firebird is a southern constellation best seen in late northern autumn. Ankaa is its brightest star. Coordinates: RA 0h 26m, Dec −42°. Named by Dutch navigators in the late 16th century. Like the legendary phoenix rising reborn from its own ashes, this constellation endures as a symbol of renewal, resilience, and the eternal cycle of transformation.",
    },
    stars: [
      [50, 55],
      [28, 35],
      [65, 28],
      [85, 50],
      [78, 75],
      [18, 65],
      [50, 12],
    ],
    lines: [
      [6,1],[6,2],
      [1,0],[0,2],
      [0,5],[0,3],
      [5,4],[3,4],
    ],
    labels: { 0:"Ankaa", 6:"κ Phe", 3:"ζ Phe" },
  },

};
