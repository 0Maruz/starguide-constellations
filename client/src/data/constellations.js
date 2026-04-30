export const VALID_STAR_IDS = new Set([
  "aquarius","aquila","aries","auriga","bootes",
  "cancer","canis-major","canis-minor","capricornus","cassiopeia",
  "cygnus","gemini","leo","libra","lyra",
  "orion","phoenix","pisces","sagittarius","scorpius",
  "taurus","ursa-major","ursa-minor","virgo",
]);

// Star positions (0–100 grid) and connection lines are derived from
// Stellarium skycultures (https://github.com/Stellarium/stellarium):
//   * H.A. Rey patterns (skycultures/modern_rey/) — iconic, "looks-like" figures
//   * Modern western (skycultures/modern/) — minimalist stick figures, used for
//     constellations whose Rey version is too crowded for a small touch display:
//     aquarius, bootes, virgo, sagittarius, taurus, scorpius
// Coordinates: Hipparcos J2000 ICRS (Vizier I/239/hip_main).
// Each constellation is gnomonically projected on its own tangent plane,
// then normalized so the larger axis fills the 0–100 frame.
// Labels: IAU proper names (SIMBAD), top 5 brightest named per constellation.

export const constellations = {

  // ── ARIES ─── (modern) ──────────────────────────────────────
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
      [ 10.0,  25.3],
      [ 69.4,  49.6],
      [ 87.9,  65.3],
      [ 90.0,  74.7],
    ],
    lines: [[0,1], [1,2], [2,3]],
    labels: { 0:"Bharani", 1:"Hamal", 2:"Sheratan", 3:"Mesarthim" },
  },

  // ── TAURUS ─── (modern) ──────────────────────────────────────
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
      [ 18.4,  25.4],
      [ 42.6,  41.3],
      [ 50.2,  50.6],
      [ 46.0,  57.1],
      [ 10.0,  43.6],
      [ 55.4,  59.2],
      [ 53.5,  54.5],
      [ 67.0,  66.7],
      [ 90.0,  74.6],
      [ 50.2,  58.6],
      [ 52.0,  53.6],
      [ 72.4,  37.9],
    ],
    lines: [[0,1], [1,2], [2,3], [2,10], [3,4], [3,9], [5,6], [5,7], [5,9], [6,10], [6,11], [7,8]],
    labels: { 0:"Elnath", 2:"", 3:"Aldebaran", 5:"", 11:"Pleiades" }, //{ 0:"Elnath", 2:"Ain", 3:"Aldebaran", 5:"Prima Hyadum", 11:"Pleiades" },
  },

  // ── GEMINI ─── (Rey) ──────────────────────────────────────
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
      [ 63.8,  74.0],
      [ 41.8,  59.8],
      [ 29.0,  54.8],
      [ 30.1,  73.7],
      [ 57.8,  86.6],
      [ 17.3,  37.2],
      [ 10.0,  45.4],
      [ 10.3,  32.7],
      [ 25.4,  34.5],
      [ 36.7,  26.4],
      [ 23.5,  20.5],
      [ 19.4,  19.8],
      [ 50.2,  13.4],
      [ 57.6,  43.9],
      [ 70.4,  60.4],
      [ 74.8,  52.1],
      [ 81.4,  51.7],
      [ 90.0,  48.2],
    ],
    lines: [[0,1], [1,2], [2,3], [2,5], [3,4], [5,6], [5,7], [5,8], [8,9], [9,10], [9,12], [9,13], [10,11], [13,14], [13,15], [15,16], [16,17]],
    labels: { 0:"Alhena", 7:"Pollux", 11:"Castor", 13:"Mebsuta", 15:"Tejat" },
  },

  // ── CANCER ─── (modern) ──────────────────────────────────────
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
      [ 41.5,  10.0],
      [ 44.4,  40.0],
      [ 65.7,  16.2],
      [ 42.9,  53.4],
      [ 71.2,  90.0],
      [ 28.8,  78.9],
    ],
    lines: [[0,1], [1,2], [1,3], [3,4], [3,5]],
    labels: { 1:"Asellus Australis", 3:"Asellus Borealis", 4:"Altarf", 5:"Acubens" },
  },

  // ── LEO ─── (modern) ──────────────────────────────────────
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
      [ 10.0,  61.6],
      [ 33.7,  60.5],
      [ 77.3,  69.7],
      [ 77.3,  56.5],
      [ 68.6,  48.5],
      [ 34.3,  46.6],
      [ 70.3,  38.7],
      [ 85.0,  30.3],
      [ 90.0,  36.1],
    ],
    lines: [[0,1], [0,5], [1,2], [1,5], [2,3], [3,4], [4,5], [4,6], [6,7], [7,8]],
    labels: { 0:"Denebola", 1:"Chertan", 3:"Regulus", 4:"Algieba", 5:"Zosma" },
  },

  // ── VIRGO ─── (modern) ──────────────────────────────────────
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
      [ 90.0,  37.7],
      [ 73.4,  51.1],
      [ 63.7,  52.4],
      [ 45.2,  68.8],
      [ 25.1,  67.6],
      [ 23.7,  60.2],
      [ 11.6,  60.0],
      [ 41.2,  50.9],
      [ 29.9,  47.3],
      [ 10.0,  46.6],
      [ 57.7,  44.2],
      [ 54.9,  31.2],
    ],
    lines: [[0,1], [1,2], [2,3], [2,10], [3,4], [3,7], [4,5], [5,6], [7,8], [7,10], [8,9], [10,11]],
    labels: { 2:"Porrima", 3:"Spica", 7:"Heze", 10:"Minelauva", 11:"Vindemiatrix" },
  },

  // ── LIBRA ─── (Rey) ──────────────────────────────────────
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
      [ 58.3,  72.3],
      [ 71.6,  36.8],
      [ 47.3,  10.0],
      [ 29.7,  31.5],
      [ 29.6,  83.4],
      [ 28.4,  90.0],
    ],
    lines: [[0,1], [1,2], [1,3], [2,3], [3,4], [4,5]],
    labels: { 0:"Brachium", 1:"Zubenelgenubi", 2:"Zubeneschamali" },
  },

  // ── SCORPIUS ─── (modern) ──────────────────────────────────────
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
      [ 19.1,  69.4],
      [ 13.8,  76.7],
      [ 10.8,  81.0],
      [ 18.7,  90.0],
      [ 34.6,  89.4],
      [ 46.0,  86.0],
      [ 47.4,  71.2],
      [ 48.6,  58.5],
      [ 59.5,  38.1],
      [ 64.8,  32.2],
      [ 89.2,  20.5],
      [ 88.7,  33.0],
      [ 86.2,  10.0],
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [9,11], [9,12]],
    labels: { 0:"Shaula", 3:"Sargas", 8:"Paikauhale", 9:"Antares", 10:"Dschubba" },
  },

  // ── SAGITTARIUS ─── (modern) ──────────────────────────────────────
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
      [ 69.4,  46.3],
      [ 66.1,  34.3],
      [ 69.7,  64.9],
      [ 66.7,  58.2],
      [ 78.1,  48.7],
      [ 90.0,  43.2],
      [ 45.6,  45.5],
      [ 55.5,  38.0],
      [ 75.9,  23.2],
      [ 43.0,  39.8],
      [ 49.8,  36.1],
      [ 48.4,  22.4],
      [ 44.1,  24.1],
      [ 35.9,  16.7],
      [ 33.1,  13.8],
      [ 25.4,  32.7],
      [ 10.0,  42.3],
      [ 14.5,  62.4],
      [ 19.2,  80.0],
      [ 35.0,  74.6],
      [ 35.9,  86.2],
    ],
    lines: [[0,1], [0,3], [0,4], [0,7], [1,7], [1,8], [2,3], [3,4], [3,6], [4,5], [6,7], [6,9], [7,10], [9,10], [9,15], [10,11], [11,12], [12,13], [13,14], [15,16], [16,17], [17,18], [18,19], [18,20]],
    labels: { 0:"Kaus Media", 1:"Kaus Borealis", 3:"Kaus Australis", 6:"Ascella", 10:"Nunki" },
  },

  // ── CAPRICORNUS ─── (modern) ──────────────────────────────────────
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
      [ 90.0,  24.0],
      [ 86.7,  32.3],
      [ 46.6,  40.4],
      [ 32.3,  39.1],
      [ 16.4,  39.1],
      [ 10.0,  37.4],
      [ 29.1,  59.7],
      [ 63.2,  70.0],
      [ 58.4,  76.0],
    ],
    lines: [[0,1], [1,2], [1,7], [2,3], [2,6], [2,8], [3,4], [3,6], [4,5]],
    labels: { 0:"Algedi", 1:"Dabih", 3:"Nashira", 5:"Deneb Algedi" },
  },

  // ── AQUARIUS ─── (modern) ──────────────────────────────────────
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
      [ 65.8,  39.8],
      [ 48.2,  28.8],
      [ 40.1,  31.0],
      [ 36.5,  28.2],
      [ 33.2,  28.4],
      [ 24.6,  43.6],
      [ 12.8,  46.9],
      [ 10.0,  70.1],
      [ 42.5,  43.9],
      [ 47.5,  56.3],
      [ 35.6,  49.7],
      [ 26.3,  55.7],
      [ 23.9,  60.3],
      [ 16.8,  71.8],
      [ 90.0,  49.3],
    ],
    lines: [[0,1], [0,14], [1,2], [1,8], [2,3], [3,4], [4,5], [5,6], [6,7], [8,9], [8,10], [10,11], [11,12], [12,13]],
    labels: { 0:"Sadalsuud", 1:"Sadalmelik", 2:"Sadachbia", 12:"Skat", 14:"Albali" },
  },

  // ── PISCES ─── (Rey) ──────────────────────────────────────
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
      [ 36.0,  22.4],
      [ 34.8,  33.6],
      [ 32.5,  28.0],
      [ 28.9,  43.8],
      [ 26.3,  50.9],
      [ 19.1,  62.4],
      [ 10.0,  74.6],
      [ 20.7,  69.5],
      [ 26.2,  68.3],
      [ 34.1,  65.8],
      [ 39.1,  65.3],
      [ 45.6,  65.9],
      [ 68.5,  67.0],
      [ 78.0,  69.1],
      [ 77.3,  76.6],
      [ 85.1,  77.6],
      [ 90.0,  73.4],
      [ 88.0,  69.3],
      [ 84.0,  67.5],
    ],
    lines: [[0,1], [0,2], [1,2], [1,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10], [10,11], [11,12], [12,13], [13,14], [13,18], [14,15], [15,16], [16,17], [17,18]],
    labels: { 4:"Alpherg", 5:"Torcular", 6:"Alrescha" },
  },

  // ── ORION ─── (modern) ──────────────────────────────────────
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
      [ 43.4,  69.0],
      [ 46.4,  67.1],
      [ 49.1,  64.7],
      [ 23.4,  20.9],
      [ 23.4,  26.2],
      [ 28.9,  10.1],
      [ 35.0,  10.0],
      [ 26.3,  24.8],
      [ 29.5,  38.6],
      [ 34.1,  44.5],
      [ 38.6,  90.0],
      [ 60.7,  85.9],
      [ 53.6,  47.4],
      [ 47.1,  38.0],
      [ 76.6,  45.5],
      [ 75.8,  49.1],
      [ 74.4,  57.3],
      [ 73.9,  57.5],
      [ 71.0,  59.4],
      [ 76.0,  40.4],
      [ 73.1,  37.1],
    ],
    lines: [[0,1], [0,9], [0,10], [1,2], [2,11], [2,12], [3,4], [3,5], [4,7], [4,8], [5,6], [6,7], [7,8], [8,9], [9,13], [10,11], [12,13], [12,14], [14,15], [14,19], [15,16], [16,17], [17,18], [19,20]],
    labels: { 0:"Alnitak", 1:"Alnilam", 2:"Mintaka", 9:"Betelgeuse", 10:"Saiph", 11:"Rigel", 12:"Bellatrix" },
  },

  // ── CANIS-MINOR ─── (Rey) ──────────────────────────────────────
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
      [ 10.6,  90.0],
      [ 89.4,  10.0],
    ],
    lines: [[0,1]],
    labels: { 0:"Procyon", 1:"Gomeisa" },
  },

  // ── BOOTES ─── (modern) ──────────────────────────────────────
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
      [ 41.5,  90.0],
      [ 59.5,  73.5],
      [ 39.7,  50.4],
      [ 21.2,  30.7],
      [ 30.9,  10.0],
      [ 48.1,  17.2],
      [ 48.3,  40.8],
      [ 74.4,  75.3],
      [ 78.8,  83.0],
    ],
    lines: [[0,1], [1,2], [1,6], [1,7], [2,3], [3,4], [4,5], [5,6], [7,8]],
    labels: { 1:"Arcturus", 2:"Izar", 4:"Nekkar", 5:"Seginus", 7:"Muphrid" },
  },

  // ── AURIGA ─── (modern) ──────────────────────────────────────
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
      [ 20.7,  49.3],
      [ 23.8,  13.8],
      [ 58.6,  10.0],
      [ 71.5,  32.0],
      [ 79.3,  67.8],
      [ 51.3,  90.0],
    ],
    lines: [[0,1], [0,5], [1,2], [2,3], [3,4], [4,5]],
    labels: { 0:"Mahasim", 1:"Menkalinan", 2:"Capella", 4:"Hassaleh" },
  },

  // ── CASSIOPEIA ─── (modern) ──────────────────────────────────────
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
      [ 10.0,  25.7],
      [ 28.1,  50.6],
      [ 51.1,  48.3],
      [ 65.8,  74.3],
      [ 90.0,  54.1],
    ],
    lines: [[0,1], [1,2], [2,3], [3,4]],
    labels: { 0:"Segin", 1:"Ruchbah", 3:"Schedar", 4:"Caph" },
  },

  // ── URSA-MINOR ─── (Rey) ──────────────────────────────────────
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
      [ 22.5,  10.0],
      [ 25.4,  30.2],
      [ 33.6,  52.3],
      [ 53.5,  67.6],
      [ 48.7,  80.8],
      [ 75.5,  90.0],
      [ 77.5,  73.8],
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [3,6], [4,5], [5,6]],
    labels: { 0:"Polaris", 1:"Yildun", 5:"Pherkad", 6:"Kochab" },
  },

  // ── URSA-MAJOR ─── (modern) ──────────────────────────────────────
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
      [ 10.0,  46.6],
      [ 21.3,  41.2],
      [ 29.1,  42.8],
      [ 38.5,  43.9],
      [ 54.6,  37.8],
      [ 55.2,  46.8],
      [ 42.5,  50.4],
      [ 43.2,  60.5],
      [ 53.3,  66.6],
      [ 69.5,  68.0],
      [ 68.3,  70.7],
      [ 72.3,  48.1],
      [ 78.3,  50.5],
      [ 89.4,  54.7],
      [ 90.0,  52.8],
      [ 70.2,  39.9],
      [ 85.7,  29.3],
      [ 72.1,  31.9],
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [3,6], [4,5], [4,17], [5,6], [5,11], [6,7], [7,8], [8,9], [8,10], [11,12], [11,15], [12,13], [12,14], [15,16], [16,17]],
    labels: { 0:"Alkaid", 1:"Mizar", 2:"Alioth", 3:"Megrez", 4:"Dubhe", 5:"Merak", 6:"Phecda" },
  },

  // ── LYRA ─── (modern) ──────────────────────────────────────
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
      [ 79.3,  10.0],
      [ 59.4,  25.9],
      [ 45.3,  81.5],
      [ 20.7,  90.0],
      [ 33.9,  35.0],
    ],
    lines: [[0,1], [1,2], [1,4], [2,3], [3,4]],
    labels: { 0:"Vega", 2:"Sheliak", 3:"Sulafat" },
  },

  // ── AQUILA ─── (modern) ──────────────────────────────────────
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
      [ 31.0,  45.0],
      [ 35.5,  35.4],
      [ 40.0,  28.5],
      [ 60.2,  58.0],
      [ 33.7,  66.3],
      [ 14.8,  73.6],
      [ 79.6,  15.1],
      [ 85.2,  10.0],
      [ 79.6,  90.0],
    ],
    lines: [[0,1], [1,2], [1,3], [3,4], [3,6], [3,8], [4,5], [6,7]],
    labels: { 0:"Alshain", 1:"Altair", 2:"Tarazed" },
  },

  // ── CYGNUS ─── (modern) ──────────────────────────────────────
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
      [ 83.7,  15.3],
      [ 79.3,  21.0],
      [ 75.3,  39.9],
      [ 58.2,  54.1],
      [ 49.0,  40.9],
      [ 45.5,  70.6],
      [ 29.5,  79.6],
      [ 10.0,  81.3],
      [ 72.6,  67.0],
      [ 90.0,  84.7],
    ],
    lines: [[0,1], [1,2], [2,3], [3,4], [3,5], [3,8], [5,6], [6,7], [8,9]],
    labels: { 3:"Sadr", 4:"Deneb", 9:"Albireo" },
  },

  // ── CANIS-MAJOR ─── (Rey) ──────────────────────────────────────
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
      [ 48.0,  10.0],
      [ 39.1,  24.3],
      [ 46.3,  29.9],
      [ 56.5,  28.6],
      [ 40.3,  56.2],
      [ 35.8,  66.3],
      [ 30.3,  67.9],
      [ 22.7,  78.3],
      [ 44.4,  76.1],
      [ 41.7,  72.1],
      [ 48.2,  57.5],
      [ 64.1,  38.6],
      [ 68.0,  54.9],
      [ 77.3,  33.9],
      [ 51.8,  90.0],
      [ 76.8,  81.3],
    ],
    lines: [[0,1], [0,2], [1,2], [2,3], [3,4], [3,11], [4,5], [5,6], [5,9], [6,7], [8,9], [8,10], [8,14], [8,15], [10,11], [11,12], [11,13]],
    labels: { 3:"Sirius", 5:"Wezen", 7:"Aludra", 8:"Adhara", 13:"Mirzam" },
  },

  // ── PHOENIX ─── (Rey) ──────────────────────────────────────
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
      [ 45.8,  78.1],
      [ 46.4,  40.2],
      [ 65.3,  37.7],
      [ 78.0,  28.0],
      [ 28.4,  51.7],
      [ 10.0,  41.9],
      [ 28.1,  26.2],
      [ 78.5,  21.9],
      [ 90.0,  38.8],
    ],
    lines: [[0,1], [0,2], [1,2], [1,4], [1,5], [1,6], [2,3], [2,6], [3,7], [3,8], [4,5], [7,8]],
    labels: { 7:"Ankaa" },
  },

};
