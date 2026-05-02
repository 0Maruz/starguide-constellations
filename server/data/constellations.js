// Mirror of client/src/data/constellations.js — must stay in sync

export const VALID_STAR_IDS = new Set([
  "01","02","03","04","05","06","07","08","09","10",
  "11","12","13","14","15","16","17","18","19","20",
  "21","22","23","24"
]);

export const constellations = {

  "01": {
    th: { name: "กลุ่มดาวเมษ (Aries)", text: "กลุ่มดาวเมษ หรือ กลุ่มดาวแกะ เป็นหนึ่งในกลุ่มดาวจักรราศี และเป็นดาวประจำเดือนเมษายน มีสัญลักษณ์เป็นแกะตัวผู้ ดาวที่สว่างที่สุดคือ Hamal มีพิกัดท้องฟ้า RA 2 ชั่วโมง 7 นาที และ Dec +23 องศาเหนือ ในตำนานกรีก เทพ Hermes มอบแกะวิเศษขนทองคำให้แก่ Phrixus และ Helle Zeus จึงนำแกะขึ้นประดับบนฟ้าเพื่อเป็นเกียรติและเป็นอนุสรณ์แห่งความกล้าหาญและการเสียสละ" },
    en: { name: "Aries (The Ram)", text: "Aries the Ram is one of the zodiac constellations for April. Its brightest star is Hamal at RA 2h 7m, Dec +23°. In Greek myth, Hermes gifted a golden-fleeced ram to save Phrixus and Helle from their cruel stepmother. After fulfilling its heroic mission, Zeus honored the ram by placing it among the stars as a symbol of courage and sacrifice." },
    stars: [[10,28],[55,42],[78,52],[90,75]],
    lines: [[0,1],[1,2],[2,3]],
    labels: { 1:"Hamal", 2:"Sheratan", 3:"Mesarthim" },
  },

  "02": {
    th: { name: "กลุ่มดาวพฤษภ (Taurus)", text: "กลุ่มดาวพฤษภ หรือ กลุ่มดาววัวกระทิง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนพฤษภาคม ดาวที่สว่างที่สุดคือ Aldebaran ซึ่งเป็นตาแดงของวัว มีกระจุกดาวลูกไก่ Pleiades อยู่บนบ่า มีพิกัด RA 4 ชั่วโมง 35 นาที และ Dec +16 องศาเหนือ ในตำนานกรีก Zeus แปลงกายเป็นวัวขาวเพื่อลักพาตัว Europa ลูกสาวของกษัตริย์ Agenor วัวกระทิงถูกยกขึ้นบนท้องฟ้าเป็นสัญลักษณ์แห่งความแข็งแรงและความมั่นคง" },
    en: { name: "Taurus (The Bull)", text: "Taurus the Bull is a zodiac constellation for May. Aldebaran, the fiery orange eye, is its brightest star. The Pleiades cluster adorns the bull's shoulder. Coordinates: RA 4h 35m, Dec +16°. In Greek myth, Zeus transformed into a magnificent white bull to abduct Europa, daughter of King Agenon. The bull was immortalized in the sky as a symbol of strength and steadfastness." },
    stars: [[12,15],[55,18],[48,38],[58,48],[45,55],[68,42],[88,12],[90,52]],
    lines: [[0,2],[1,2],[2,3],[3,5],[5,4],[4,1],[5,6],[5,7]],
    labels: { 5:"Aldebaran", 6:"Elnath", 0:"Pleiades" },
  },

  "03": {
    th: { name: "กลุ่มดาวเมถุน (Gemini)", text: "กลุ่มดาวเมถุน หรือ กลุ่มดาวคนคู่ เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนมิถุนายน ดาวสว่างที่สุดคือ Castor และ Pollux ซึ่งเป็นส่วนหัวของคนทั้งคู่ มีตำแหน่ง RA 7 ชั่วโมง 35 นาที และ Dec +28 องศาเหนือ ในตำนานกรีก Castor และ Pollux เป็นพี่น้องที่ผูกพันกันมาก แม้ Castor จะเป็นมนุษย์ธรรมดาและ Pollux เป็นบุตรของเทพ Zeus ด้วยความสงสารของเทพ Zeus จึงได้ให้ทั้งคู่อยู่ด้วยกันบนท้องฟ้า เป็นสัญลักษณ์ของความผูกพันและมิตรภาพ" },
    en: { name: "Gemini (The Twins)", text: "Gemini the Twins is a zodiac constellation for June. Castor and Pollux — the twin bright heads — stand together at the top. Coordinates: RA 7h 35m, Dec +28°. In Greek myth, mortal Castor and divine Pollux were so devoted that Zeus united them forever in the sky, side by side as an eternal symbol of brotherhood and unbreakable friendship." },
    stars: [[30,5],[52,8],[22,25],[44,28],[16,48],[38,50],[18,68],[40,68],[22,88],[56,82],[60,95]],
    lines: [[0,2],[2,4],[4,6],[6,8],[1,3],[3,5],[5,7],[7,9],[9,10],[0,1],[2,3],[4,5],[6,7]],
    labels: { 0:"Castor", 1:"Pollux", 9:"Alhena" },
  },

  "04": {
    th: { name: "กลุ่มดาวกรกฎ (Cancer)", text: "กลุ่มดาวกรกฎ หรือ กลุ่มดาวปู เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนกรกฎาคม มีกระจุกดาว M44 รังผึ้งอยู่ตรงกลาง มีตำแหน่ง RA 8 ชั่วโมง 42 นาที และ Dec +20 องศาเหนือ ในตำนานกรีก ปูยักษ์ถูกเทพี Hera ส่งไปช่วย Hydra ต่อสู้กับ Hercules แต่ถูกเหยียบตาย Hera ยกย่องในความจงรักภักดีของปู จึงถูกยกขึ้นเป็นกลุ่มดาวกรกฎ เพื่อเป็นเกียรติแก่ความทุ่มเทและความเสียสละ" },
    en: { name: "Cancer (The Crab)", text: "Cancer the Crab is a zodiac constellation for July, home to the Beehive Cluster M44 at its center. Coordinates: RA 8h 42m, Dec +20°. Cancer is the faintest of the zodiac constellations. In Greek myth, Hera sent a giant crab to distract Hercules during his battle with the Hydra, but it was crushed underfoot. Hera honored its loyalty by immortalizing it among the stars." },
    stars: [[27.8,80.5],[72.2,92],[42.3,53.8],[43.8,39.6],[40.7,8]],
    lines: [[1,0],[0,2],[2,3],[0,4]],
    labels: { 0:"Acubens", 1:"Al Tarf", 2:"Asellus Australis" },
  },

  "05": {
    th: { name: "กลุ่มดาวสิงห์ (Leo)", text: "กลุ่มดาวสิงห์ หรือ กลุ่มดาวสิงโต เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนสิงหาคม ดาวที่สว่างที่สุดคือ Regulus มีตำแหน่ง RA 10 ชั่วโมง 8 นาที และ Dec +12 องศาเหนือ ในตำนานกรีก สิงโตเนเมียนเป็นสัตว์วิเศษที่ Hercules ต้องฆ่าในการทำภารกิจ 12 ภารกิจ หลังจาก Hercules ทำสำเร็จ Zeus จึงนำสิงโตขึ้นไปบนท้องฟ้าเป็นกลุ่มดาวสิงห์ เพื่อเป็นสัญลักษณ์ของความกล้าหาญและอำนาจ" },
    en: { name: "Leo (The Lion)", text: "Leo the Lion is a zodiac constellation for August. Bright Regulus anchors the Sickle — a backward question mark forming the lion's mane and head. Coordinates: RA 10h 8m, Dec +12°. In Greek myth, this is the fearsome Nemean Lion slain by Hercules as his first labor. Zeus immortalized the mighty lion in the sky as a symbol of courage and royal power." },
    stars: [[71.7,68.5],[8,59.5],[64.3,48.7],[32.1,45.9],[84.1,37.9],[66.2,39.6],[72.1,56.3],[31.2,59],[79.8,32.5],[92,31.5]],
    lines: [[8,4],[4,5],[5,2],[2,6],[6,0],[8,9],[2,3],[3,1],[1,7],[7,0]],
    labels: { 0:"Regulus", 1:"Denebola", 2:"Algieba", 3:"Zosma" },
  },

  "06": {
    th: { name: "กลุ่มดาวกันย์ (Virgo)", text: "กลุ่มดาวกันย์ หรือ กลุ่มดาวหญิงสาว เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกันยายน ดาวที่สว่างที่สุดคือ Spica มีตำแหน่ง RA 13 ชั่วโมง 25 นาที และ Dec −11 องศาใต้ ในตำนานกรีก เทพี Demeter เทพีแห่งความบริสุทธิ์และความอุดมสมบูรณ์ ถูก Hades ลักพาตัวบุตรสาว ทำให้เกิดฤดูกาล กลุ่มดาวกันย์จึงถูกยกขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความบริสุทธิ์และความอุดมสมบูรณ์" },
    en: { name: "Virgo (The Maiden)", text: "Virgo the Maiden is the second largest constellation and a zodiac sign for September. Brilliant Spica blazes at the lower left. Coordinates: RA 13h 25m, Dec −11°. In Greek myth, Demeter — goddess of purity and abundance — mourned her daughter Persephone taken by Hades, and their separation brought the seasons. Virgo was lifted to the sky as a symbol of purity and the fertile earth." },
    stars: [[46.6,70.4],[66.6,52.6],[57.2,29.6],[60.2,43.7],[42.3,51],[77.1,51.2],[92,46.4],[9.6,60.9],[23.4,61.2],[8,46.2]],
    lines: [[6,5],[5,1],[1,3],[3,2],[1,0],[0,4],[4,3],[2,9],[9,7],[0,8],[8,7]],
    labels: { 0:"Spica", 1:"Porrima", 2:"Vindemiatrix", 6:"Zavijava" },
  },

  "07": {
    th: { name: "กลุ่มดาวตุล (Libra)", text: "กลุ่มดาวตุล หรือ กลุ่มดาวตาชั่ง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนตุลาคม ดาวสว่างที่สุดคือ Zuben Elgenubi มีตำแหน่ง RA 15 ชั่วโมง 18 นาที และ Dec −15 องศาใต้ ในตำนานกรีก ตาชั่งเป็นเครื่องมือของเทพี Astraea เทพีแห่งความยุติธรรม กลุ่มดาวตุลจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความยุติธรรมและความสมดุล" },
    en: { name: "Libra (The Scales)", text: "Libra the Scales is the only inanimate object in the zodiac, associated with October. Zubenelgenubi is its brightest star. Coordinates: RA 15h 18m, Dec −15°. Its star names mean 'southern and northern scorpion claws' in Arabic — reflecting their ancient role as Scorpius's claws. In Greek myth, these are the scales of Astraea, goddess of justice, placed in the sky as a symbol of fairness and balance." },
    stars: [[56.9,8],[89.6,43.8],[33.2,36.5],[10.4,47.3],[71.5,92],[21.9,62.9]],
    lines: [[0,1],[1,4],[0,2],[2,3],[3,1],[2,5],[5,3]],
    labels: { 0:"Zubeneschamali", 1:"Zubenelgenubi", 2:"Zubenelhakrabi" },
  },

  "08": {
    th: { name: "กลุ่มดาวพิจิก (Scorpius)", text: "กลุ่มดาวพิจิก หรือ กลุ่มดาวแมงป่อง เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนพฤศจิกายน ดาวสว่างที่สุดคือ Antares มีตำแหน่ง RA 16 ชั่วโมง 29 นาที และ Dec −26 องศาใต้ ในตำนานกรีก แมงป่องถูกส่งโดยเทพี Artemis เพื่อฆ่า Orion ที่อวดเก่ง กลุ่มดาวพิจิกจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของพลังและความเข้มแข็ง" },
    en: { name: "Scorpius (The Scorpion)", text: "Scorpius the Scorpion is a zodiac constellation for November. Red supergiant Antares blazes at its heart — its name means 'rival of Mars.' Coordinates: RA 16h 29m, Dec −26°. In Greek myth, Artemis sent this scorpion to slay the boastful Orion. Zeus honored both by placing them in opposite parts of the sky, so they can never meet — Orion sets as Scorpius rises." },
    stars: [[25,8],[42,8],[15,22],[33,22],[30,35],[38,48],[44,60],[48,70],[50,80],[48,90],[38,96],[25,92],[14,84],[8,74],[12,65]],
    lines: [[2,0],[0,1],[1,3],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14]],
    labels: { 4:"Antares", 13:"Shaula", 14:"Lesath" },
  },

  "09": {
    th: { name: "กลุ่มดาวธนู (Sagittarius)", text: "กลุ่มดาวธนู หรือ กลุ่มดาวคนยิงธนู เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนธันวาคม ดาวสว่างที่สุดคือ Kaus Australis มีตำแหน่ง RA 19 ชั่วโมง และ Dec −25 องศาใต้ ในตำนานกรีก Chiron เป็นเซนทอร์ที่ฉลาดและกล้าหาญ สุดท้ายสละความเป็นอมตะให้พ้นจากความเจ็บปวด Zeus ที่สงสารและยกย่องในความดีของ Chiron จึงนำรูปร่างของเซนทอร์นักธนูไปประดับบนท้องฟ้าเป็นสัญลักษณ์แห่งปัญญาและการแสวงหาเป้าหมาย" },
    en: { name: "Sagittarius (The Archer)", text: "Sagittarius the Archer is a zodiac constellation for December. Kaus Australis is its brightest star. Coordinates: RA 19h, Dec −25°. The Teapot asterism points its spout toward the galactic center — the Milky Way's glowing core. In myth, the noble centaur Chiron willingly surrendered his immortality to end his suffering. Zeus, moved by his wisdom and sacrifice, placed the archer's form among the stars." },
    stars: [[78,78],[72,55],[68,32],[55,18],[38,10],[20,30],[8,50],[15,70],[38,80],[60,85]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,0],[2,8],[1,9]],
    labels: { 0:"Kaus Australis", 4:"Nunki", 2:"Kaus Borealis" },
  },

  "10": {
    th: { name: "กลุ่มดาวมกร (Capricornus)", text: "กลุ่มดาวมกร หรือ กลุ่มดาวแพะทะเล เป็นหนึ่งในกลุ่มดาวจักรราศี เป็นดาวประจำเดือนมกราคม ดาวสว่างที่สุดคือ Deneb Algedi มีตำแหน่ง RA 21 ชั่วโมง 47 นาที และ Dec −16 องศาใต้ ในตำนานกรีก เกี่ยวกับ Pan ครึ่งแพะครึ่งปลาซึ่งเป็นเทพที่หนีปีศาจ Typhon แล้วกลายร่างครึ่งปลา กลุ่มดาวมกรจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความมุ่งมั่นและความพยายาม" },
    en: { name: "Capricornus (Sea Goat)", text: "Capricornus the Sea Goat is a zodiac constellation for January. Deneb Algedi is its brightest star. Coordinates: RA 21h 47m, Dec −16°. Known to Babylonians as the divine sea-goat for over 3,000 years. In Greek myth, the god Pan leaped into the Nile to escape the monster Typhon, accidentally transforming into this half-goat, half-fish creature — placed in the sky as a symbol of determination and perseverance." },
    stars: [[8,36.9],[88.2,31.4],[92,22.7],[14.7,38.6],[28,60.3],[46.3,40],[31.3,38.7],[63.8,71],[58.7,77.3],[72.2,42.5]],
    lines: [[2,1],[2,3],[3,0],[0,4],[4,7],[7,8],[8,9],[9,1]],
    labels: { 0:"Deneb Algedi", 1:"Dabih", 2:"Algedi", 3:"Nashira" },
  },

  "11": {
    th: { name: "กลุ่มดาวกุมภ์ (Aquarius)", text: "กลุ่มดาวกุมภ์ หรือ กลุ่มดาวคนแบกหม้อน้ำ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนกุมภาพันธ์ ดาวสว่างที่สุดคือ Sadalmelik มีตำแหน่ง RA 22 ชั่วโมง 0 นาที และ Dec −5 องศาใต้ ในตำนานกรีก Ganymede เป็นเด็กหนุ่มรูปงามที่ Zeus พาไปเป็นคนรินน้ำให้เทพ กลุ่มดาวกุมภ์จึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของการให้และความเมตตา" },
    en: { name: "Aquarius (Water Bearer)", text: "Aquarius the Water Bearer is a zodiac constellation for February. Sadalmelik is its brightest star. Coordinates: RA 22h 0m, Dec −5°. The Y-shaped Water Jar pours a stream of stars southward. In Greek myth, beautiful Ganymede was brought to Olympus by Zeus himself to serve as cupbearer to the gods — placed in the sky as a symbol of generosity and divine compassion." },
    stars: [[35,15],[55,22],[45,35],[30,40],[58,40],[40,52],[28,62],[18,72],[10,83],[32,88],[50,82],[65,68],[75,52]],
    lines: [[0,2],[1,2],[2,3],[2,4],[3,4],[3,5],[5,6],[6,7],[7,8],[8,9],[9,10],[4,12],[12,11],[11,10],[0,1]],
    labels: { 1:"Sadalmelik", 0:"Sadalsuud", 8:"Skat" },
  },

  "12": {
    th: { name: "กลุ่มดาวมีน (Pisces)", text: "กลุ่มดาวมีน หรือ กลุ่มดาวปลาคู่ เป็นหนึ่งในกลุ่มดาวจักรราศีและเป็นดาวประจำเดือนมีนาคม ดาวสว่างที่สุดคือ Alrescha มีตำแหน่ง RA 1 ชั่วโมง 0 นาที และ Dec +15 องศาเหนือ ในตำนานกรีก เทพี Aphrodite และลูกชาย Eros แปลงร่างเป็นปลาเพื่อหนีจาก Typhon และผูกหางด้วยเส้นเชือก กลุ่มดาวมีนจึงถูกนำขึ้นบนฟ้าเพื่อเป็นสัญลักษณ์ของความรักและความผูกพัน" },
    en: { name: "Pisces (The Fish)", text: "Pisces the Fish is a zodiac constellation for March. Alrescha, the knot tying the two fish, is its brightest star. Coordinates: RA 1h 0m, Dec +15°. In Greek myth, Aphrodite and her son Eros transformed into two fish to escape the fearsome monster Typhon, tying their tails together so they would never be separated — immortalized in the sky as a symbol of love and eternal bond." },
    stars: [[60,62],[42,45],[32,30],[20,22],[10,32],[8,48],[15,60],[30,65],[44,60],[72,50],[82,38],[92,22],[95,8]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[0,9],[9,10],[10,11],[11,12]],
    labels: { 0:"Alrescha", 12:"η Psc" },
  },

  "13": {
    th: { name: "กลุ่มดาวนายพราน (Orion)", text: "กลุ่มดาวนายพราน หรือ กลุ่มดาวโอไรออน เป็นหนึ่งในกลุ่มดาวที่สว่างและโด่งดังที่สุดบนท้องฟ้า ดาวที่เด่นที่สุดคือ Betelgeuse และ Rigel มีพิกัด RA 5 ชั่วโมง และ Dec +5 องศาเหนือ ในตำนานกรีก Orion เป็นพรานล่าสัตว์ผู้เก่งกาจ แต่ถูกแมงป่องพิฆาตตามคำสั่งของเทพี Artemis จึงถูก Zeus ยกขึ้นบนท้องฟ้าเป็นกลุ่มดาวนายพราน คู่กับกลุ่มดาวสุนัขล่าเนื้อและแมงป่อง" },
    en: { name: "Orion (The Hunter)", text: "Orion the Hunter is one of the most magnificent constellations in the sky. Betelgeuse marks the left shoulder, Rigel the right foot. Coordinates: RA 5h, Dec +5°. Three belt stars — Mintaka, Alnilam, Alnitak — form an unmistakable diagonal line. In Greek myth, Orion was a great hunter slain by Scorpius at Artemis's command. Zeus honored both by placing them on opposite sides of the sky, so they never meet." },
    stars: [[45,8],[25,28],[65,22],[62,52],[45,57],[28,62],[28,90],[70,88],[38,72],[36,80]],
    lines: [[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,7],[5,6],[5,8],[8,9]],
    labels: { 1:"Betelgeuse", 6:"Rigel", 4:"Alnilam" },
  },

  "14": {
    th: { name: "กลุ่มดาวหมาเล็ก (Canis Minor)", text: "กลุ่มดาวหมาเล็ก เป็นกลุ่มดาวที่มีสัญลักษณ์เป็นสุนัขล่าเนื้อคู่ใจของนายพราน ดาวที่สว่างที่สุดคือ Procyon มีตำแหน่ง RA 7 ชั่วโมง 39 นาที และ Dec +5 องศาเหนือ ในตำนานกรีก หมาเล็กเป็นสุนัขที่ติดตามนายพราน Orion และถูกยกขึ้นบนฟ้าเพื่อเคียงข้างเจ้านายของมัน" },
    en: { name: "Canis Minor (Little Dog)", text: "Canis Minor the Little Dog is Orion's faithful lesser hunting companion. Procyon — its brightest star — is only 11.5 light-years from Earth and forms the Winter Triangle with Sirius and Betelgeuse. Coordinates: RA 7h 39m, Dec +5°. In Greek myth, this loyal little hound faithfully followed Orion and was honored with a place in the sky forever at its master's side." },
    stars: [[25,45],[75,55]],
    lines: [[0,1]],
    labels: { 0:"Procyon", 1:"Gomeisa" },
  },

  "15": {
    th: { name: "กลุ่มดาวคนเลี้ยงสัตว์ (Boötes)", text: "กลุ่มดาวคนเลี้ยงสัตว์ มีสัญลักษณ์เป็นชายผู้เลี้ยงสัตว์และถือเคียว ดาวที่สว่างที่สุดคือ Arcturus ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 14 ชั่วโมง 15 นาที และ Dec +19 องศาเหนือ ตามตำนานกรีก คนเลี้ยงสัตว์เชื่อมโยงกับ Arcas บุตรของ Zeus คนเลี้ยงสัตว์จึงถูกวาดไว้บนฟ้าเพื่อเฝ้าดูฝูงสัตว์และเป็นสัญลักษณ์แห่งความขยัน" },
    en: { name: "Boötes (The Herdsman)", text: "Boötes the Herdsman drives the Great Bear around the pole. Orange giant Arcturus — one of the brightest stars visible — blazes at its base. Coordinates: RA 14h 15m, Dec +19°. 'Arc to Arcturus' from the handle of the Big Dipper is a famous navigation trick. In Greek myth, Boötes is Arcas, son of Zeus, placed in the sky as a symbol of diligence and watchful care." },
    stars: [[50,90],[32,65],[68,62],[22,42],[78,40],[32,20],[68,18],[50,8]],
    lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[5,7],[7,6],[1,2]],
    labels: { 0:"Arcturus", 4:"Seginus", 7:"θ Boo" },
  },

  "16": {
    th: { name: "กลุ่มดาวสารถี (Auriga)", text: "กลุ่มดาวสารถี มีสัญลักษณ์เป็นชายขับรถศึก ถือบังเหียน ดาวที่สว่างที่สุดคือ Capella ซึ่งเป็นหนึ่งในดาวฤกษ์ที่สว่างที่สุดในท้องฟ้า มีตำแหน่ง RA 5 ชั่วโมง 16 นาที และ Dec +46 องศาเหนือ ในตำนานกรีก Auriga มักเชื่อมโยงกับเทพ Hephaestus หรือกษัตริย์ที่คิดค้นรถศึก จึงถูกยกขึ้นบนฟ้าเป็นกลุ่มดาวสารถีแทนเกียรติยศ" },
    en: { name: "Auriga (The Charioteer)", text: "Auriga the Charioteer commands his chariot across the sky. Brilliant Capella — a pair of giant stars — is one of the brightest in the night sky. Coordinates: RA 5h 16m, Dec +46°. The pentagon of Auriga is easy to spot in winter skies. In Greek myth, Auriga is linked to Hephaestus or a legendary king who invented the four-horse chariot, immortalized in the sky as a symbol of ingenuity and honor." },
    stars: [[20,25],[45,18],[50,22],[55,25],[78,30],[90,60],[50,80],[15,60]],
    lines: [[0,1],[1,4],[4,5],[5,6],[6,7],[7,0],[1,2],[2,3]],
    labels: { 0:"Capella", 5:"Elnath", 7:"Menkalinan" },
  },

  "17": {
    th: { name: "กลุ่มดาวแคสสิโอเปีย (Cassiopeia)", text: "กลุ่มดาวแคสสิโอเปียมีลักษณะเด่นคือดาว 5 ดวงเรียงกันเป็นรูปตัว W หรือ M บนท้องฟ้า ในตำนานกรีก Cassiopeia เป็นราชินีผู้โอ้อวดความงามจนสร้างความไม่พอใจแก่เทพโปไซดอน เพื่อเป็นการลงโทษ Cassiopeia ถูกนำไปประดับบนท้องฟ้า โดยถูกจัดให้นั่งบนบัลลังก์หมุนรอบขั้วฟ้า เป็นเครื่องเตือนใจถึงโทษของความหยิ่งผยอง" },
    en: { name: "Cassiopeia", text: "Cassiopeia's five stars form a clear W or M shape near the north pole, visible year-round from the northern hemisphere. In Greek myth, Queen Cassiopeia boasted that she and her daughter surpassed the beauty of the sea nymphs, enraging Poseidon. As punishment, she was bound to a throne that endlessly circles the celestial pole — sometimes upside down — an eternal reminder of the dangers of arrogance." },
    stars: [[5,55],[27,22],[50,50],[73,18],[95,48]],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: { 0:"Caph", 1:"Schedar", 2:"γ Cas", 3:"Ruchbah", 4:"Segin" },
  },

  "18": {
    th: { name: "กลุ่มดาวหมีเล็ก (Ursa Minor)", text: "กลุ่มดาวหมีเล็ก หรือ กระบวยเล็ก มีดาวที่สำคัญที่สุดคือ Polaris หรือดาวเหนือ มีตำแหน่ง RA 15 ชั่วโมง และ Dec +75 องศาเหนือ ในตำนานกรีก หมีเล็กมักถูกโยงกับบุตรชายของ Callisto และ Zeus ซึ่งถูกยกขึ้นบนฟ้าเพื่ออยู่คู่กับมารดาของตนที่กลายเป็นหมีใหญ่" },
    en: { name: "Ursa Minor (Little Bear)", text: "Ursa Minor the Little Bear has Polaris — Earth's current north pole star — at the tip of its handle. The bowl opens downward unlike the Big Dipper. Coordinates: RA 15h, Dec +75°. Kochab and Pherkad are known as the Guardians of the Pole. In Greek myth, the Little Bear is Arcas, son of Callisto and Zeus, placed in the sky to be forever near his mother the Great Bear." },
    stars: [[50,8],[48,25],[50,42],[58,58],[72,68],[82,55],[65,45]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]],
    labels: { 0:"Polaris", 5:"Kochab", 4:"Pherkad" },
  },

  "19": {
    th: { name: "กลุ่มดาวหมีใหญ่ (Ursa Major)", text: "กลุ่มดาวหมีใหญ่ เป็นหนึ่งในกลุ่มดาวที่โดดเด่นที่สุดบนท้องฟ้า กระบวยใหญ่ประกอบด้วยดาวสว่าง 7 ดวง ดาวที่สว่างที่สุดคือ Dubhe มีตำแหน่ง RA 11 ชั่วโมง และ Dec +56 องศาเหนือ ในตำนานกรีก หมีใหญ่คือตัว Callisto หญิงงามที่ถูกแปลงร่างเป็นหมีโดยเทพี Hera และต่อมาถูก Zeus ยกขึ้นบนฟ้าเพื่อปกป้อง" },
    en: { name: "Ursa Major (Great Bear)", text: "Ursa Major the Great Bear contains the famous Big Dipper — seven stars forming a bowl and curved handle. Dubhe is its brightest star. Coordinates: RA 11h, Dec +56°. Pointer stars Dubhe and Merak aim directly at Polaris. Arc from the handle to Arcturus is a beloved navigation technique. In myth, Callisto was transformed into a bear by Hera; Zeus placed her in the sky to protect her." },
    stars: [[86.1,30.5],[92,47.8],[68.9,61.3],[58,50.8],[40.1,53.4],[25.4,54.3],[8,69.5]],
    lines: [[0,1],[1,2],[2,3],[3,0],[3,4],[4,5],[5,6]],
    labels: { 0:"Dubhe", 1:"Merak", 2:"Phecda", 3:"Megrez", 4:"Alioth", 5:"Mizar", 6:"Alkaid" },
  },

  "20": {
    th: { name: "กลุ่มดาวพิณ (Lyra)", text: "กลุ่มดาวพิณ มีสัญลักษณ์เป็นเครื่องดนตรีพิณของ Orpheus ดาวที่สว่างที่สุดคือ Vega ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุดบนท้องฟ้า มีตำแหน่ง RA 18 ชั่วโมง 37 นาที และ Dec +38 องศาเหนือ ตามตำนานกรีก Orpheus เป็นนักดนตรีผู้ใช้พิณบรรเลงจนเทพเจ้าหลงใหล หลังจากเขาเสียชีวิต Zeus จึงนำพิณขึ้นบนฟ้าเป็นอนุสรณ์ให้แก่ Orpheus" },
    en: { name: "Lyra (The Lyre)", text: "Lyra the Lyre is the harp of the legendary Orpheus. Brilliant Vega — fifth brightest star in the sky — anchors the Summer Triangle with Deneb and Altair. Coordinates: RA 18h 37m, Dec +38°. The Ring Nebula (M57) lies between Sheliak and Sulafat. In Greek myth, Orpheus played so beautifully that even rocks wept. After his death, Zeus honored him by placing his lyre among the stars." },
    stars: [[20,15],[45,38],[75,42],[78,75],[45,78]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,1]],
    labels: { 0:"Vega" },
  },

  "21": {
    th: { name: "กลุ่มดาวนกอินทรี (Aquila)", text: "กลุ่มดาวนกอินทรี มีสัญลักษณ์เป็นนกอินทรีผู้ยิ่งใหญ่ ดาวที่สว่างที่สุดคือ Altair มีตำแหน่ง RA 19 ชั่วโมง 51 นาที และ Dec +8 องศาเหนือ ในตำนานกรีก Aquila คือนกอินทรีของ Zeus ที่ทำหน้าที่พา Ganymede ขึ้นสู่โอลิมปัสเพื่อเป็นคนรินน้ำ" },
    en: { name: "Aquila (The Eagle)", text: "Aquila the Eagle soars along the Milky Way with brilliant Altair at its center. Altair rotates so fast it is visibly flattened. Coordinates: RA 19h 51m, Dec +8°. Altair forms one corner of the Summer Triangle with Vega and Deneb. In Greek myth, Aquila is Zeus's great eagle — tasked with carrying thunderbolts and bringing the beautiful Ganymede up to Olympus to serve the gods." },
    stars: [[50,40],[35,32],[65,48],[50,18],[38,60],[42,75],[50,88],[60,72]],
    lines: [[1,0],[0,2],[3,0],[0,4],[4,5],[5,6],[2,7],[7,6]],
    labels: { 0:"Altair", 1:"Tarazed", 2:"Alshain" },
  },

  "22": {
    th: { name: "กลุ่มดาวหงส์ (Cygnus)", text: "กลุ่มดาวหงส์ มีสัญลักษณ์เป็นนกที่กางปีกบิน ดาวที่สว่างที่สุดคือ Deneb อยู่ที่หางหงส์ มีตำแหน่ง RA 20 ชั่วโมง 41 นาที และ Dec +42 องศาเหนือ ในตำนานกรีก Cygnus เป็นเพื่อนของ Phaethon ที่ตกลงมาจากรถสุริยะ เขาแปลงกายเป็นหงส์เพื่อตามหาซากเพื่อน และได้รับการยกขึ้นบนฟ้าเป็นกลุ่มดาวเพื่อเป็นสัญลักษณ์ของความรักและมิตรภาพ" },
    en: { name: "Cygnus (The Swan)", text: "Cygnus the Swan flies along the Milky Way, its Northern Cross shape unmistakable. Deneb — despite being 2,600 light-years away — shines brilliantly as one of the most luminous stars known. Coordinates: RA 20h 41m, Dec +42°. In myth, devoted Cygnus transformed into a swan to search the river for his fallen friend Phaethon. The gods honored this friendship by placing him among the stars as a symbol of love and loyalty." },
    stars: [[39.6,36.1],[50.3,53.1],[86.9,92],[72.1,36.6],[33.5,72.6],[13.1,83],[67,69.7],[77.5,8]],
    lines: [[7,0],[0,1],[1,2],[3,1],[1,4],[1,6],[4,5]],
    labels: { 0:"Deneb", 1:"Sadr", 2:"Albireo", 4:"Gienah" },
  },

  "23": {
    th: { name: "กลุ่มดาวสุนัขใหญ่ (Canis Major)", text: "กลุ่มดาวสุนัขใหญ่ มีสัญลักษณ์เป็นสุนัขล่าเนื้อขนาดใหญ่ที่ติดตามนายพราน Orion ดาวที่สว่างที่สุดคือ Sirius ซึ่งเป็นดาวที่สว่างที่สุดในท้องฟ้ายามค่ำคืน มีตำแหน่ง RA 6 ชั่วโมง 45 นาที และ Dec −17 องศาใต้ ในตำนานกรีก Canis Major เป็นสุนัขคู่ใจของ Orion นายพราน Sirius ยังถูกเรียกว่าดาวสุนัขและถูกใช้บอกฤดูกาลมาตั้งแต่สมัยโบราณ" },
    en: { name: "Canis Major (The Great Dog)", text: "Canis Major the Great Dog faithfully follows Orion across the winter sky. Sirius — its brilliant alpha star — is the brightest star in the entire night sky at magnitude −1.46, only 8.6 light-years away. Coordinates: RA 6h 45m, Dec −17°. The ancient 'Dog Days of summer' were named for Sirius rising with the Sun. In Greek myth, this loyal hound at Orion's heel was honored with a permanent place among the stars." },
    stars: [[52,10],[50,35],[75,30],[78,50],[48,62],[15,80],[38,88],[60,78]],
    lines: [[0,1],[1,2],[2,3],[3,1],[1,4],[4,5],[5,6],[6,7],[7,4]],
    labels: { 0:"Sirius", 5:"Adhara", 6:"Wezen" },
  },

  "24": {
    th: { name: "กลุ่มดาวฟีนิกซ์ (Phoenix)", text: "กลุ่มดาวฟีนิกซ์ หรือ กลุ่มดาวนกฟีนิกซ์ เป็นกลุ่มดาวในซีกฟ้าใต้ ดาวที่สว่างที่สุดคือ Ankaa มีตำแหน่ง RA 0 ชั่วโมง 26 นาที และ Dec −42 องศาใต้ ฟีนิกซ์เป็นนกในตำนานที่เมื่อตายแล้วจะฟื้นขึ้นจากเถ้าถ่านของตนเอง เป็นสัญลักษณ์ของการเกิดใหม่และความอมตะ กลุ่มดาวนี้ถูกตั้งชื่อโดยนักดาราศาสตร์ชาวดัตช์ในศตวรรษที่ 16" },
    en: { name: "Phoenix (The Firebird)", text: "Phoenix the mythical firebird is a southern constellation best seen from the southern hemisphere in late northern autumn. Ankaa is its brightest star. Coordinates: RA 0h 26m, Dec −42°. Named by Dutch navigators Petrus Plancius and Frederick de Houtman in the late 16th century. Like the legendary phoenix rising reborn from its own ashes, this constellation endures as a symbol of renewal, resilience, and the eternal cycle of transformation." },
    stars: [[50,55],[28,35],[65,28],[85,50],[78,75],[18,65],[50,12]],
    lines: [[6,1],[6,2],[1,0],[0,2],[0,5],[0,3],[5,4],[3,4]],
    labels: { 0:"Ankaa", 6:"κ Phe", 3:"ζ Phe" },
  },

};
