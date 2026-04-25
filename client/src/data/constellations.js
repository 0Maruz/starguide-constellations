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
    th: { name: "แคสสิโอเปีย", text: "กลุ่มดาวแคสสิโอเปีย มีลักษณะเป็นรูปตัว W หรือ M อยู่ใกล้ขั้วฟ้าเหนือ มองเห็นได้ตลอดทั้งปีในหลายพื้นที่ และใช้ช่วยหาตำแหน่งของดาวเหนือ" },
    en: { name: "Cassiopeia", text: "Cassiopeia is a distinctive W-shaped constellation near the north celestial pole. Visible year-round from many locations, it serves as a useful guide for finding Polaris, the North Star." },
    stars: [[18,55],[33,30],[50,50],[67,28],[82,52]],
    lines: [[0,1],[1,2],[2,3],[3,4]],
    labels: {0:"Segin",4:"Caph"}
  },
  "03": {
    th: { name: "หมีใหญ่ (เออร์ซาเมเจอร์)", text: "กลุ่มดาวหมีใหญ่ หรือเออร์ซาเมเจอร์ มีส่วนที่เรียกว่ากระบวยใหญ่ ซึ่งใช้ชี้ไปยังดาวเหนือ เป็นกลุ่มดาวสำคัญในการหาทิศทาง" },
    en: { name: "Ursa Major (Great Bear)", text: "Ursa Major contains the famous Big Dipper asterism. The two stars at the end of its bowl point directly to Polaris, making it one of the most useful navigation constellations." },
    stars: [[20,55],[35,48],[55,48],[70,40],[80,52],[72,62],[52,62],[35,62],[52,48]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,2],[6,7],[1,7]],
    labels: {0:"Dubhe",3:"Mizar",4:"Alkaid"}
  },
  "04": {
    th: { name: "หมีเล็ก (เออร์ซาไมเนอร์)", text: "กลุ่มดาวหมีเล็ก หรือเออร์ซาไมเนอร์ เป็นที่ตั้งของดาวโพลาริส หรือดาวเหนือ ซึ่งแทบไม่เคลื่อนที่บนท้องฟ้า ใช้ในการนำทางมาตั้งแต่อดีต" },
    en: { name: "Ursa Minor (Little Bear)", text: "Ursa Minor is home to Polaris, the North Star, sitting almost directly above Earth's north pole. It barely moves in the sky, making it the most reliable navigation star for centuries." },
    stars: [[50,20],[52,38],[55,55],[62,65],[72,62],[78,50],[80,35]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]],
    labels: {0:"Polaris",6:"Kochab"}
  },
  "05": {
    th: { name: "สิงโต (เลโอ)", text: "กลุ่มดาวสิงโต หรือเลโอ เป็นกลุ่มดาวจักรราศี มองเห็นได้ชัดในฤดูใบไม้ผลิ มีดาวเรกูลัสเป็นดาวสว่างหลัก" },
    en: { name: "Leo (The Lion)", text: "Leo is a prominent zodiac constellation best seen in spring. Bright Regulus marks the lion's heart, while the curved Sickle of stars outlines its head and mane." },
    stars: [[25,72],[32,50],[42,40],[55,42],[70,52],[78,68],[60,70],[40,70]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[3,6]],
    labels: {0:"Regulus",4:"Denebola"}
  },
  "06": {
    th: { name: "แมงป่อง (สกอร์เปียส)", text: "กลุ่มดาวแมงป่อง หรือสกอร์เปียส มองเห็นได้ชัดในซีกโลกใต้ มีดาวแอนทาเรสสีแดงสว่างเด่น และมีรูปร่างโค้งคล้ายหางแมงป่อง" },
    en: { name: "Scorpius (The Scorpion)", text: "Scorpius is vivid and best seen from the southern hemisphere. Its brilliant red supergiant Antares marks the scorpion's heart, and the curving tail is one of the most striking shapes in the night sky." },
    stars: [[50,15],[48,28],[45,42],[42,55],[38,65],[32,75],[25,82],[28,88],[38,88],[50,82],[62,75],[68,65],[65,55]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,3]],
    labels: {0:"Antares",6:"Shaula"}
  },
  "07": {
    th: { name: "คนคู่ (เจมินี)", text: "กลุ่มดาวคนคู่ หรือเจมินี เป็นตัวแทนของฝาแฝดในตำนาน มีดาวเด่นคือคาสเตอร์และพอลลักซ์" },
    en: { name: "Gemini (The Twins)", text: "Gemini represents the mythological twins Castor and Pollux. Its two bright stars share the twins' names, and the constellation shines best in winter and spring skies." },
    stars: [[30,22],[48,22],[30,40],[48,40],[30,58],[48,58],[30,75],[48,75]],
    lines: [[0,1],[0,2],[2,3],[2,4],[4,5],[4,6],[6,7],[1,3],[3,5],[5,7]],
    labels: {0:"Castor",1:"Pollux"}
  },
  "08": {
    th: { name: "วัว (ทอรัส)", text: "กลุ่มดาววัว หรือทอรัส มีดาวอัลเดบารันสีส้มสว่าง และมีกระจุกดาวลูกไก่ หรือเพลียดีส อยู่ภายใน" },
    en: { name: "Taurus (The Bull)", text: "Taurus features the bright orange giant Aldebaran as the bull's eye, and the beautiful Pleiades star cluster — the Seven Sisters — within its boundaries." },
    stars: [[55,48],[38,40],[20,50],[32,62],[52,68],[70,55],[82,35],[78,62]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[0,5],[5,6],[5,7]],
    labels: {0:"Aldebaran",6:"Elnath"}
  },
  "09": {
    th: { name: "แกะ (เอรีส์)", text: "กลุ่มดาวแกะ หรือเอรีส์ เป็นกลุ่มดาวจักรราศีขนาดเล็ก เคยเป็นจุดเริ่มต้นของระบบพิกัดท้องฟ้าในอดีต" },
    en: { name: "Aries (The Ram)", text: "Aries is a small zodiac constellation that once marked the vernal equinox, making it historically significant as the starting point of the celestial coordinate system." },
    stars: [[22,50],[50,45],[75,55],[88,68]],
    lines: [[0,1],[1,2],[2,3]],
    labels: {0:"Hamal",1:"Sheratan"}
  },
  "10": {
    th: { name: "ปลา (ไพซีส)", text: "กลุ่มดาวปลา หรือไพซีส เป็นกลุ่มดาวจักรราศีขนาดใหญ่ แต่ดาวค่อนข้างจาง แทนปลาสองตัวที่เชื่อมกัน" },
    en: { name: "Pisces (The Fish)", text: "Pisces is a large but faint zodiac constellation representing two fish tied by a cord. It currently contains the vernal equinox point due to Earth's axial precession." },
    stars: [[20,50],[35,38],[50,48],[62,58],[72,72],[68,85],[55,80],[48,68],[55,58],[68,48],[78,38],[80,52]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,2],[8,9],[9,10],[10,11],[11,3]],
    labels: {0:"Alrescha"}
  },
  "11": {
    th: { name: "หญิงสาว (เวอร์โก)", text: "กลุ่มดาวหญิงสาว หรือเวอร์โก เป็นกลุ่มดาวขนาดใหญ่ มีดาวสไปกาเป็นดาวที่สว่างที่สุด" },
    en: { name: "Virgo (The Maiden)", text: "Virgo is the second largest constellation, featuring bright Spica. It lies near the Virgo Cluster, one of the richest galaxy clusters in the nearby universe." },
    stars: [[50,18],[42,32],[32,48],[22,62],[35,72],[52,68],[68,58],[78,42],[62,30]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,1],[5,1]],
    labels: {4:"Spica",0:"Vindemiatrix"}
  },
  "12": {
    th: { name: "คันชั่ง (ไลบรา)", text: "กลุ่มดาวคันชั่ง หรือไลบรา เป็นกลุ่มดาวจักรราศีเพียงกลุ่มเดียวที่เป็นวัตถุไม่มีชีวิต แทนความยุติธรรม" },
    en: { name: "Libra (The Scales)", text: "Libra is the only inanimate object among the zodiac constellations, representing the scales of justice. It lies between Virgo and Scorpius." },
    stars: [[28,70],[50,42],[72,70],[50,82]],
    lines: [[0,1],[1,2],[2,3],[3,0],[0,2]],
    labels: {0:"Zubenelgenubi",2:"Zubeneschamali"}
  },
  "13": {
    th: { name: "คนยิงธนู (ซาจิททาเรียส)", text: "กลุ่มดาวคนยิงธนู หรือซาจิททาเรียส อยู่ในทิศทางของใจกลางกาแล็กซีทางช้างเผือก" },
    en: { name: "Sagittarius (The Archer)", text: "Sagittarius points toward the center of the Milky Way galaxy, making this the richest star-dense region of the night sky. Its core asterism resembles a teapot." },
    stars: [[28,72],[45,55],[62,65],[78,50],[72,32],[55,38],[42,42],[52,68],[68,78],[52,82]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,1],[6,7],[7,8],[8,9],[9,0],[2,7]],
    labels: {4:"Kaus Australis",3:"Nunki"}
  },
  "14": {
    th: { name: "แพะทะเล (แคปริคอร์นัส)", text: "กลุ่มดาวแพะทะเล หรือแคปริคอร์นัส เป็นกลุ่มดาวจักรราศี รูปร่างเป็นสัตว์ครึ่งแพะครึ่งปลา" },
    en: { name: "Capricornus (Sea Goat)", text: "Capricornus is an ancient zodiac constellation representing a mythical half-goat, half-fish creature. Its triangular shape is distinctive in the autumn sky." },
    stars: [[18,42],[42,28],[65,35],[88,55],[82,72],[60,80],[38,75],[18,62]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0]],
    labels: {0:"Algedi",3:"Dabih"}
  },
  "15": {
    th: { name: "คนแบกหม้อน้ำ (อะควอเรียส)", text: "กลุ่มดาวคนแบกหม้อน้ำ หรืออะควอเรียส เป็นกลุ่มดาวจักรราศีขนาดใหญ่ มีความเกี่ยวข้องกับน้ำและฤดูฝนในหลายวัฒนธรรม" },
    en: { name: "Aquarius (Water Bearer)", text: "Aquarius is a large zodiac constellation associated with water and rain across many ancient cultures. It represents a figure pouring water, symbolizing life and knowledge." },
    stars: [[50,22],[38,38],[25,55],[32,72],[50,80],[68,72],[72,55],[60,40],[50,55],[38,68]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[7,8],[8,9],[9,3]],
    labels: {0:"Sadalsuud",4:"Sadalmelik"}
  },
  "16": {
    th: { name: "ปู (แคนเซอร์)", text: "กลุ่มดาวปู หรือแคนเซอร์ เป็นกลุ่มดาวจักรราศีที่ค่อนข้างจาง แต่มีกระจุกดาวรังผึ้งที่น่าสนใจ" },
    en: { name: "Cancer (The Crab)", text: "Cancer is the faintest zodiac constellation, but contains the Beehive Cluster — a naked-eye open star cluster with over a thousand stars visible through binoculars." },
    stars: [[28,35],[50,50],[72,35],[65,70],[35,70]],
    lines: [[0,1],[1,2],[1,3],[1,4],[0,4],[2,3]],
    labels: {1:"Beehive Cluster",0:"Acubens"}
  },
  "17": {
    th: { name: "สุนัขใหญ่ (คานิสเมเจอร์)", text: "กลุ่มดาวสุนัขใหญ่ หรือคานิสเมเจอร์ มีดาวซิริอัส ซึ่งเป็นดาวที่สว่างที่สุดบนท้องฟ้ายามค่ำคืน" },
    en: { name: "Canis Major (Great Dog)", text: "Canis Major contains Sirius, the brightest star in the entire night sky. Known as the Dog Star, Sirius was vital to ancient Egyptians whose calendar was based on its rising." },
    stars: [[50,22],[38,38],[25,55],[20,72],[35,80],[55,75],[70,62],[78,45],[62,38]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[6,5],[1,8]],
    labels: {0:"Sirius",4:"Adhara"}
  },
  "18": {
    th: { name: "สุนัขเล็ก (คานิสไมเนอร์)", text: "กลุ่มดาวสุนัขเล็ก หรือคานิสไมเนอร์ มีดาวโพรซิออนเป็นดาวสว่างหลัก และเป็นส่วนหนึ่งของสามเหลี่ยมฤดูหนาว" },
    en: { name: "Canis Minor (Little Dog)", text: "Canis Minor is a tiny constellation with two prominent stars. Bright Procyon forms part of the Winter Triangle with Sirius and Betelgeuse." },
    stars: [[28,55],[62,45],[88,55]],
    lines: [[0,1],[1,2]],
    labels: {0:"Procyon",2:"Gomeisa"}
  },
  "19": {
    th: { name: "มังกร (ดราโก)", text: "กลุ่มดาวมังกร หรือดราโก เป็นกลุ่มดาวยาวคดเคี้ยวอยู่ใกล้ขั้วฟ้าเหนือ ระหว่างหมีใหญ่และหมีเล็ก" },
    en: { name: "Draco (The Dragon)", text: "Draco is a long winding constellation coiling around the north celestial pole. Its star Thuban was the pole star around 2700 BCE, used by ancient Egyptians to align their pyramids." },
    stars: [[52,18],[62,28],[72,42],[68,58],[55,68],[42,78],[32,68],[25,55],[28,42],[40,35],[55,42],[68,52]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,3]],
    labels: {0:"Thuban",4:"Eltanin"}
  },
  "20": {
    th: { name: "นกอินทรี (อะควิลา)", text: "กลุ่มดาวนกอินทรี หรืออะควิลา มีดาวอัลแทร์เป็นดาวสว่าง และเป็นส่วนหนึ่งของสามเหลี่ยมฤดูร้อน" },
    en: { name: "Aquila (The Eagle)", text: "Aquila features bright Altair, one vertex of the Summer Triangle. Altair is only 17 light-years away and rotates so fast it bulges noticeably at its equator." },
    stars: [[50,22],[38,38],[25,52],[42,62],[50,48],[58,62],[75,52],[62,38],[50,35]],
    lines: [[0,8],[8,1],[8,7],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]],
    labels: {0:"Altair",2:"Tarazed"}
  },
  "21": {
    th: { name: "พิณ (ไลรา)", text: "กลุ่มดาวพิณ หรือไลรา มีดาวเวกา ซึ่งเป็นหนึ่งในดาวที่สว่างที่สุด และเป็นมุมหนึ่งของสามเหลี่ยมฤดูร้อน" },
    en: { name: "Lyra (The Lyre)", text: "Lyra contains Vega, the fifth brightest star in the sky and a corner of the Summer Triangle. Due to precession, Vega will become the pole star again around 14000 CE." },
    stars: [[50,22],[38,48],[32,72],[50,80],[68,72],[62,48]],
    lines: [[0,1],[0,5],[1,2],[2,3],[3,4],[4,5],[1,5]],
    labels: {0:"Vega",3:"Sulafat"}
  },
  "22": {
    th: { name: "หงส์ (ไซกนัส)", text: "กลุ่มดาวหงส์ หรือไซกนัส มีรูปร่างคล้ายไม้กางเขน อยู่ในแนวของทางช้างเผือก" },
    en: { name: "Cygnus (The Swan)", text: "Cygnus is shaped like a cross and flies along the Milky Way. Deneb is one of the most luminous stars known, while Albireo at the tail is a stunning double star." },
    stars: [[50,18],[50,40],[50,62],[50,82],[22,52],[78,52]],
    lines: [[0,1],[1,2],[2,3],[4,1],[1,5]],
    labels: {0:"Deneb",3:"Albireo"}
  },
  "23": {
    th: { name: "โลมา (เดลฟินัส)", text: "กลุ่มดาวโลมา หรือเดลฟินัส เป็นกลุ่มดาวขนาดเล็ก แต่มีรูปทรงชัดเจน มองเห็นได้ง่ายในท้องฟ้าฤดูร้อน" },
    en: { name: "Delphinus (The Dolphin)", text: "Delphinus is small but distinctive, resembling a leaping dolphin. Its compact diamond shape makes it surprisingly easy to spot in the summer sky." },
    stars: [[50,28],[62,42],[58,60],[42,60],[38,42]],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0],[1,4]],
    labels: {0:"Rotanev",2:"Sualocin"}
  },
  "24": {
    th: { name: "สามเหลี่ยม (ไทรแองกูลัม)", text: "กลุ่มดาวสามเหลี่ยม หรือไทรแองกูลัม เป็นกลุ่มดาวขนาดเล็ก มีดาวสามดวงเรียงกัน และอยู่ใกล้กาแล็กซีแอนดรอเมดา" },
    en: { name: "Triangulum", text: "Triangulum is a small constellation forming a slim triangle near the Andromeda Galaxy. It contains the Triangulum Galaxy — the third largest in our Local Group — visible to the naked eye." },
    stars: [[50,22],[22,72],[78,72]],
    lines: [[0,1],[1,2],[2,0]],
    labels: {0:"Mothallah",1:"Deltotum"}
  }
};
