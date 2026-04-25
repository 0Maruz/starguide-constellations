// Mirror of client/src/data/constellations.js — single source of truth on the server
// In a real app, both client and server would import from a shared /packages/data package

export const VALID_STAR_IDS = new Set([
  "01","02","03","04","05","06","07","08","09","10",
  "11","12","13","14","15","16","17","18","19","20",
  "21","22","23","24"
]);

export const constellations = {
  "01": {
    th: { name: "นายพราน (โอไรออน)", text: "กลุ่มดาวนายพราน หรือโอไรออน เป็นกลุ่มดาวที่โดดเด่นที่สุด รู้จักในฐานะราชาแห่งท้องฟ้าฤดูหนาว มีเข็มขัดโอไรออนสามดาวเรียงกัน พร้อมดาวเบเทลจุสและดาวไรเจล" },
    en: { name: "Orion (The Hunter)", text: "Orion is one of the most prominent constellations, known as the winter sky king. Famous for Orion's Belt — three bright stars in a row — along with the giant stars Betelgeuse and Rigel." },
    stars: [[50,18],[38,35],[62,35],[35,50],[50,50],[65,50],[38,65],[50,65],[62,65]],
    lines: [[0,1],[0,2],[1,3],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8]],
    labels: {0:"Betelgeuse",8:"Rigel"}
  },
  "02": {
    th: { name: "แคสสิโอเปีย", text: "กลุ่มดาวแคสสิโอเปีย มีลักษณะเป็นรูปตัว W หรือ M อยู่ใกล้ขั้วฟ้าเหนือ" },
    en: { name: "Cassiopeia", text: "Cassiopeia is a distinctive W-shaped constellation near the north celestial pole, visible year-round." },
    stars: [[18,55],[33,30],[50,50],[67,28],[82,52]],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: {0:"Segin",4:"Caph"}
  },
  "03": {
    th: { name: "หมีใหญ่ (เออร์ซาเมเจอร์)", text: "กลุ่มดาวหมีใหญ่มีส่วนที่เรียกว่ากระบวยใหญ่ ซึ่งใช้ชี้ไปยังดาวเหนือ" },
    en: { name: "Ursa Major (Great Bear)", text: "Ursa Major contains the famous Big Dipper asterism. The two stars at the end of its bowl point directly to Polaris." },
    stars: [[20,55],[35,48],[55,48],[70,40],[80,52],[72,62],[52,62],[35,62],[52,48]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,2],[6,7],[1,7]],
    labels: {0:"Dubhe",3:"Mizar",4:"Alkaid"}
  },
  "04": {
    th: { name: "หมีเล็ก (เออร์ซาไมเนอร์)", text: "กลุ่มดาวหมีเล็กเป็นที่ตั้งของดาวโพลาริส หรือดาวเหนือ" },
    en: { name: "Ursa Minor (Little Bear)", text: "Ursa Minor is home to Polaris, the North Star, sitting almost directly above Earth's north pole." },
    stars: [[50,20],[52,38],[55,55],[62,65],[72,62],[78,50],[80,35]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
    labels: {0:"Polaris",6:"Kochab"}
  },
  "05": {
    th: { name: "สิงโต (เลโอ)", text: "กลุ่มดาวสิงโต มีดาวเรกูลัสเป็นดาวสว่างหลัก" },
    en: { name: "Leo (The Lion)", text: "Leo is a prominent zodiac constellation best seen in spring. Bright Regulus marks the lion's heart." },
    stars: [[25,72],[32,50],[42,40],[55,42],[70,52],[78,68],[60,70],[40,70]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[3,6]],
    labels: {0:"Regulus",4:"Denebola"}
  },
  "06": {
    th: { name: "แมงป่อง (สกอร์เปียส)", text: "กลุ่มดาวแมงป่อง มีดาวแอนทาเรสสีแดงสว่างเด่น" },
    en: { name: "Scorpius (The Scorpion)", text: "Scorpius is vivid and best seen from the southern hemisphere. Its brilliant red supergiant Antares marks the scorpion's heart." },
    stars: [[50,15],[48,28],[45,42],[42,55],[38,65],[32,75],[25,82],[28,88],[38,88],[50,82],[62,75],[68,65],[65,55]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,3]],
    labels: {0:"Antares",6:"Shaula"}
  },
  "07": {
    th: { name: "คนคู่ (เจมินี)", text: "กลุ่มดาวคนคู่มีดาวเด่นคือคาสเตอร์และพอลลักซ์" },
    en: { name: "Gemini (The Twins)", text: "Gemini represents the mythological twins Castor and Pollux, shining best in winter and spring." },
    stars: [[30,22],[48,22],[30,40],[48,40],[30,58],[48,58],[30,75],[48,75]],
    lines: [[0,1],[0,2],[2,3],[2,4],[4,5],[4,6],[6,7],[1,3],[3,5],[5,7]],
    labels: {0:"Castor",1:"Pollux"}
  },
  "08": {
    th: { name: "วัว (ทอรัส)", text: "กลุ่มดาววัว มีดาวอัลเดบารันสีส้มสว่างและกระจุกดาวลูกไก่" },
    en: { name: "Taurus (The Bull)", text: "Taurus features bright orange Aldebaran and the beautiful Pleiades star cluster — the Seven Sisters." },
    stars: [[55,48],[38,40],[20,50],[32,62],[52,68],[70,55],[82,35],[78,62]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[5,6],[5,7]],
    labels: {0:"Aldebaran",6:"Elnath"}
  },
  "09": {
    th: { name: "แกะ (เอรีส์)", text: "กลุ่มดาวแกะ เคยเป็นจุดเริ่มต้นของระบบพิกัดท้องฟ้าในอดีต" },
    en: { name: "Aries (The Ram)", text: "Aries once marked the vernal equinox, making it the historical starting point of the celestial coordinate system." },
    stars: [[22,50],[50,45],[75,55],[88,68]],
    lines: [[0,1],[1,2],[2,3]],
    labels: {0:"Hamal",1:"Sheratan"}
  },
  "10": {
    th: { name: "ปลา (ไพซีส)", text: "กลุ่มดาวปลา เป็นกลุ่มดาวจักรราศีขนาดใหญ่ แทนปลาสองตัวที่เชื่อมกัน" },
    en: { name: "Pisces (The Fish)", text: "Pisces is a large but faint zodiac constellation representing two fish tied by a cord." },
    stars: [[20,50],[35,38],[50,48],[62,58],[72,72],[68,85],[55,80],[48,68],[55,58],[68,48],[78,38],[80,52]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,2],[8,9],[9,10],[10,11],[11,3]],
    labels: {0:"Alrescha"}
  },
  "11": {
    th: { name: "หญิงสาว (เวอร์โก)", text: "กลุ่มดาวหญิงสาว มีดาวสไปกาเป็นดาวที่สว่างที่สุด" },
    en: { name: "Virgo (The Maiden)", text: "Virgo is the second largest constellation, featuring bright Spica near the Virgo galaxy cluster." },
    stars: [[50,18],[42,32],[32,48],[22,62],[35,72],[52,68],[68,58],[78,42],[62,30]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,1],[5,1]],
    labels: {4:"Spica",0:"Vindemiatrix"}
  },
  "12": {
    th: { name: "คันชั่ง (ไลบรา)", text: "กลุ่มดาวคันชั่ง เป็นกลุ่มดาวจักรราศีเพียงกลุ่มเดียวที่เป็นวัตถุไม่มีชีวิต" },
    en: { name: "Libra (The Scales)", text: "Libra is the only inanimate object among the zodiac constellations, representing the scales of justice." },
    stars: [[28,70],[50,42],[72,70],[50,82]],
    lines: [[0,1],[1,2],[2,3],[3,0],[0,2]],
    labels: {0:"Zubenelgenubi",2:"Zubeneschamali"}
  },
  "13": {
    th: { name: "คนยิงธนู (ซาจิททาเรียส)", text: "กลุ่มดาวคนยิงธนู อยู่ในทิศทางของใจกลางกาแล็กซีทางช้างเผือก" },
    en: { name: "Sagittarius (The Archer)", text: "Sagittarius points toward the center of the Milky Way, the richest star-dense region of the night sky." },
    stars: [[28,72],[45,55],[62,65],[78,50],[72,32],[55,38],[42,42],[52,68],[68,78],[52,82]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[6,7],[7,8],[8,9],[9,0],[2,7]],
    labels: {4:"Kaus Australis",3:"Nunki"}
  },
  "14": {
    th: { name: "แพะทะเล (แคปริคอร์นัส)", text: "กลุ่มดาวแพะทะเล รูปร่างเป็นสัตว์ครึ่งแพะครึ่งปลา" },
    en: { name: "Capricornus (Sea Goat)", text: "Capricornus represents a mythical half-goat, half-fish creature with a distinctive triangular shape." },
    stars: [[18,42],[42,28],[65,35],[88,55],[82,72],[60,80],[38,75],[18,62]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]],
    labels: {0:"Algedi",3:"Dabih"}
  },
  "15": {
    th: { name: "คนแบกหม้อน้ำ (อะควอเรียส)", text: "กลุ่มดาวคนแบกหม้อน้ำ มีความเกี่ยวข้องกับน้ำและฤดูฝนในหลายวัฒนธรรม" },
    en: { name: "Aquarius (Water Bearer)", text: "Aquarius is a large zodiac constellation associated with water and rain across many ancient cultures." },
    stars: [[50,22],[38,38],[25,55],[32,72],[50,80],[68,72],[72,55],[60,40],[50,55],[38,68]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[7,8],[8,9],[9,3]],
    labels: {0:"Sadalsuud",4:"Sadalmelik"}
  },
  "16": {
    th: { name: "ปู (แคนเซอร์)", text: "กลุ่มดาวปู มีกระจุกดาวรังผึ้งที่น่าสนใจ" },
    en: { name: "Cancer (The Crab)", text: "Cancer is the faintest zodiac constellation, containing the Beehive Cluster with over a thousand stars." },
    stars: [[28,35],[50,50],[72,35],[65,70],[35,70]],
    lines: [[0,1],[1,2],[1,3],[1,4],[0,4],[2,3]],
    labels: {1:"Beehive",0:"Acubens"}
  },
  "17": {
    th: { name: "สุนัขใหญ่ (คานิสเมเจอร์)", text: "กลุ่มดาวสุนัขใหญ่ มีดาวซิริอัส ซึ่งเป็นดาวที่สว่างที่สุดบนท้องฟ้ายามค่ำคืน" },
    en: { name: "Canis Major (Great Dog)", text: "Canis Major contains Sirius, the brightest star in the entire night sky, known as the Dog Star." },
    stars: [[50,22],[38,38],[25,55],[20,72],[35,80],[55,75],[70,62],[78,45],[62,38]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[6,5],[1,8]],
    labels: {0:"Sirius",4:"Adhara"}
  },
  "18": {
    th: { name: "สุนัขเล็ก (คานิสไมเนอร์)", text: "กลุ่มดาวสุนัขเล็ก มีดาวโพรซิออนเป็นดาวสว่างหลัก" },
    en: { name: "Canis Minor (Little Dog)", text: "Canis Minor features bright Procyon, forming part of the Winter Triangle with Sirius and Betelgeuse." },
    stars: [[28,55],[62,45],[88,55]],
    lines: [[0,1],[1,2]],
    labels: {0:"Procyon",2:"Gomeisa"}
  },
  "19": {
    th: { name: "มังกร (ดราโก)", text: "กลุ่มดาวมังกร เป็นกลุ่มดาวยาวคดเคี้ยวอยู่ใกล้ขั้วฟ้าเหนือ" },
    en: { name: "Draco (The Dragon)", text: "Draco is a long winding constellation coiling around the north celestial pole. Its star Thuban was once the pole star." },
    stars: [[52,18],[62,28],[72,42],[68,58],[55,68],[42,78],[32,68],[25,55],[28,42],[40,35],[55,42],[68,52]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,3]],
    labels: {0:"Thuban",4:"Eltanin"}
  },
  "20": {
    th: { name: "นกอินทรี (อะควิลา)", text: "กลุ่มดาวนกอินทรี มีดาวอัลแทร์และเป็นส่วนหนึ่งของสามเหลี่ยมฤดูร้อน" },
    en: { name: "Aquila (The Eagle)", text: "Aquila features bright Altair, one vertex of the Summer Triangle, only 17 light-years from Earth." },
    stars: [[50,22],[38,38],[25,52],[42,62],[50,48],[58,62],[75,52],[62,38],[50,35]],
    lines: [[0,8],[8,1],[8,7],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
    labels: {0:"Altair",2:"Tarazed"}
  },
  "21": {
    th: { name: "พิณ (ไลรา)", text: "กลุ่มดาวพิณ มีดาวเวกา หนึ่งในดาวที่สว่างที่สุดและเป็นมุมของสามเหลี่ยมฤดูร้อน" },
    en: { name: "Lyra (The Lyre)", text: "Lyra contains Vega, fifth brightest star in the sky and a corner of the Summer Triangle." },
    stars: [[50,22],[38,48],[32,72],[50,80],[68,72],[62,48]],
    lines: [[0,1],[0,5],[1,2],[2,3],[3,4],[4,5],[1,5]],
    labels: {0:"Vega",3:"Sulafat"}
  },
  "22": {
    th: { name: "หงส์ (ไซกนัส)", text: "กลุ่มดาวหงส์ มีรูปร่างคล้ายไม้กางเขน อยู่ในแนวของทางช้างเผือก" },
    en: { name: "Cygnus (The Swan)", text: "Cygnus is shaped like a cross along the Milky Way. Deneb is one of the most luminous stars known." },
    stars: [[50,18],[50,40],[50,62],[50,82],[22,52],[78,52]],
    lines: [[0,1],[1,2],[2,3],[4,1],[1,5]],
    labels: {0:"Deneb",3:"Albireo"}
  },
  "23": {
    th: { name: "โลมา (เดลฟินัส)", text: "กลุ่มดาวโลมา เป็นกลุ่มดาวขนาดเล็กแต่มีรูปทรงชัดเจน" },
    en: { name: "Delphinus (The Dolphin)", text: "Delphinus is small but distinctive, resembling a leaping dolphin in the summer sky." },
    stars: [[50,28],[62,42],[58,60],[42,60],[38,42]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[1,4]],
    labels: {0:"Rotanev",2:"Sualocin"}
  },
  "24": {
    th: { name: "สามเหลี่ยม (ไทรแองกูลัม)", text: "กลุ่มดาวสามเหลี่ยม มีดาวสามดวงเรียงกัน และอยู่ใกล้กาแล็กซีแอนดรอเมดา" },
    en: { name: "Triangulum", text: "Triangulum forms a slim triangle near the Andromeda Galaxy, containing the Triangulum Galaxy visible to the naked eye." },
    stars: [[50,22],[22,72],[78,72]],
    lines: [[0,1],[1,2],[2,0]],
    labels: {0:"Mothallah",1:"Deltotum"}
  }
};
