import citiesImg from "./cities.data";
import internationalImg from "./international.data";
import lakesImg from "./lakes.data";
import winterImg from "./winter.data";
import mountainsImg from "./mountains.data";

const COLLECTIONS_DATA = {
  cities: {
    id: 1,
    title: "Cities",
    routeName: "cities",
    items: [
      {
        id: 1,
        name: "Toronto | Nathan Phillips Square",
        image: citiesImg.cities1,
      },
      {
        id: 2,
        name: "San Francisco",
        image: citiesImg.cities2,
      },
      {
        id: 3,
        name: "Algeria | Algiers",
        image: citiesImg.cities3,
      },
      {
        id: 4,
        name: "Toronto | CN Tower",
        image: citiesImg.cities4,
      },
      {
        id: 5,
        name: "Italy | Rome",
        image: citiesImg.cities5,
      },
      {
        id: 6,
        name: "Toronto | Downtown",
        image: citiesImg.cities6,
      },
      {
        id: 7,
        name: "Toronto | Financial District",
        image: citiesImg.cities7,
      },
      {
        id: 8,
        name: "Toronto | Nathan Phillips Square",
        image: citiesImg.cities8,
      },
    ],
  },
  international: {
    id: 2,
    title: "International",
    routeName: "international",
    items: [
      {
        id: 1,
        name: "Abu Dhabi | Sheikh Zayed Grand Mosque",
        image: internationalImg.international1,
      },
      {
        id: 2,
        name: "San Francisco | Golden Gate Bridge",
        image: internationalImg.international2,
      },
      {
        id: 3,
        name: "Abu Dhabi | Sheikh Zayed Grand Mosque",
        image: internationalImg.international3,
      },
      {
        id: 4,
        name: "Algeria | Dellys",
        image: internationalImg.international4,
      },
      {
        id: 5,
        name: "United Arab Emirates | Desert",
        image: internationalImg.international5,
      },
      {
        id: 6,
        name: "Algeria | Bejaia",
        image: internationalImg.international6,
      },
      {
        id: 7,
        name: "Algeria | Tigzirt",
        image: internationalImg.international7,
      },
      {
        id: 8,
        name: "Vietnam | Ha Long Bay",
        image: internationalImg.international8,
      },
    ],
  },
  lakes: {
    id: 3,
    title: "Lakes",
    routeName: "lakes",
    items: [
      {
        id: 1,
        name: "Banff | Moraine Lake",
        image: lakesImg.lakes1,
      },
      {
        id: 2,
        name: "Jasper | Peyto Lake",
        image: lakesImg.lakes2,
      },
      {
        id: 3,
        name: "Jasper | Bow Lake",
        image: lakesImg.lakes3,
      },
      {
        id: 4,
        name: "Banff | Lake Louise",
        image: lakesImg.lakes4,
      },
      {
        id: 5,
        name: "Banff | Lake Louise",
        image: lakesImg.lakes5,
      },
      {
        id: 6,
        name: "Banff | Vermillion Lakes",
        image: lakesImg.lakes6,
      },
      {
        id: 7,
        name: "Banff | Lake Minnewanka",
        image: lakesImg.lakes7,
      },
      {
        id: 8,
        name: "Banff | Two Jack Lake",
        image: lakesImg.lakes8,
      },
    ],
  },
  winter: {
    id: 4,
    title: "Winter",
    routeName: "winter",
    items: [
      {
        id: 1,
        name: "Banff | Morant Curve",
        image: winterImg.winter1,
      },
      {
        id: 2,
        name: "Banff | Lake Minnewanka",
        image: winterImg.winter2,
      },
      {
        id: 3,
        name: "Jasper | Peyto Lake",
        image: winterImg.winter3,
      },
      {
        id: 4,
        name: "Kananaskis | Upper Lake",
        image: winterImg.winter4,
      },
      {
        id: 5,
        name: "Banff | Two Jack Lake",
        image: winterImg.winter5,
      },
      {
        id: 6,
        name: "Jasper | Glacier",
        image: winterImg.winter6,
      },
      {
        id: 7,
        name: "Banff | Lake Minnewanka",
        image: winterImg.winter7,
      },
      {
        id: 8,
        name: "Jasper | Mistaya Lake",
        image: winterImg.winter8,
      },
    ],
  },
  mountains: {
    id: 5,
    title: "Mountains",
    routeName: "mountains",
    items: [
      {
        id: 1,
        name: "Banff | Sentinel Pass",
        image: mountainsImg.mountains1,
      },
      {
        id: 2,
        name: "Banff | Mt Norquay",
        image: mountainsImg.mountains2,
      },
      {
        id: 3,
        name: "Banff | Castle Mountain",
        image: mountainsImg.mountains3,
      },
      {
        id: 4,
        name: "Banff | Lake Minnewanka",
        image: mountainsImg.mountains4,
      },
      {
        id: 5,
        name: "Kananaskis | Road",
        image: mountainsImg.mountains5,
      },
      {
        id: 6,
        name: "Banff | Mt Norquay",
        image: mountainsImg.mountains6,
      },
      {
        id: 7,
        name: "Canmore | East End of Rundle",
        image: mountainsImg.mountains7,
      },
      {
        id: 8,
        name: "Canmore | Spray Valley",
        image: mountainsImg.mountains8,
      },
    ],
  },
};

export default COLLECTIONS_DATA;
