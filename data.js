import faker, { random } from "faker";
import { list } from "postcss";

export const footerData = [
  [
    {
      title: "Motonet",
      list: [
        "tavaratalot ja aukioloajat",
        "tietoa motonetista",
        "ajakohtaista",
        "yhteystiedot",
      ],
    },
    {
      title: "asiakaspalvelu",
      list: ["ota yhteyttä"],
    },
    { title: "yritysmyyntipalvelu", list: ["ota yhteyttä"] },
  ],
  [
    {
      title: "kanta-asiakkuus",
      list: [
        "kanta-asiakastrjoukset",
        "Liity kanta-asikkaaksiä",
        "tietoa kanta-asiakasohjelmasta",
        "tietosuojaseloste",
      ],
    },
    {
      title: "palvelumme",
      list: [
        "motonet korjaamot",
        "motomaatti",
        "motopesu",
        "motovelo",
        "motolataus",
        "motonet lahjakortti",
      ],
    },
  ],
  [
    {
      title: "verkkokauppa",
      list: ["tekstiversio", "mobiiliversio", "rekisteröidy"],
    },
    {
      title: "tietoja ja ohjeita",
      list: [
        "nouto tavarataloista",
        "myyntiehdot",
        "maksutavat",
        "toimitustavat ja -kulut",
        "Vaihto, palautus ja takuu",
        "käyttöehdot",
      ],
    },
  ],
  [
    { title: "tuotekuvastot", list: ["tutustu oppaisiin"] },
    {
      title: "varaosaluettelot",
      list: ["kaikki ajoneuvot", "tekstiversio", "mobiiliversio"],
    },
    {
      title: "tukemiset",
      list: [
        "yhteistyökumppanuudet",
        "vastuullisuus",
        "sponsorointi- ja tukihakemus",
      ],
    },
  ],
  [
    { title: "yhteisöt", list: ["facebook", "youtube", "twitter"] },
    {
      title: "työpaikat",
      list: ["avoimet työpaikat", "broman group työnantajana"],
    },
    {
      title: "tavarantoimittajaksi",
      list: ["ota yhteyttä", "supplier, contact us"],
    },
  ],
];
export const footerImageText = [
  { text: ["tilaa verkosta - ", "nouda tavaratalosta"], image: "/arvo1.svg" },
  { text: ["ammattitaitoista", "asiakaspalvelua"], image: "/arvo2.svg" },
  {
    text: [
      "helppo ja ilmainen",
      "asiakaspalautus",
      "Palautus myös tavarataloon",
    ],
    image: "/arvo3.svg",
  },
  { text: ["turvallinen maksaaminen"], image: "/arvo4.svg" },
  { text: ["laaja valikoima", "huippumerkkejä"], image: "/arvo5.svg" },
  { text: ["kanta-asiakkaille", "etuja ja tarjouksia"], image: "/arvo6.svg" },
];
export const navCategories = [
  "autoilu",
  "työkalut & rakentaminen",
  "mp & pyöräily",
  "kalastus & erä",
  "veneily",
  "koti & vapaa-aika",
  "outlet",
];
export const makeMenuList = () => {
  let menu = [];
  for (let i = 0; i < 8; i++) {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      let group = {};
      group.title = faker.lorem.word();
      group.list = [];
      let randomNumber = Math.floor(Math.random() * 15 + 1);
      for (let i = 0; i < randomNumber; i++) {
        group.list.push(faker.lorem.word());
      }
      arr.push(group);
    }
    menu.push(arr);
  }
  return menu;
};

export const menuList = makeMenuList();
