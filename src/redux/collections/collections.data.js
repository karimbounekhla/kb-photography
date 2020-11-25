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
        name: "San Fransisco",
        image: citiesImg.cities2,
      },
      {
        id: 3,
        name: "Algeria | Algiers",
        image: citiesImg.cities3,
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
        name: "San Fransisco | Golden Gate Bridge",
        image: internationalImg.international2,
      },
      {
        id: 3,
        name: "Abu Dhabi | Sheikh Zayed Grand Mosque",
        image: internationalImg.international3,
      },
      {
        id: 4,
        name: "United Arab Emirates | Desert",
        image: internationalImg.international4,
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
    ],
  },
  mountains: {
    id: 5,
    title: "Mountains",
    routeName: "mountains",
    items: [
      {
        id: 1,
        name: "Banff | Mt Norquay",
        image: mountainsImg.mountains1,
      },
      {
        id: 2,
        name: "Canmore | East End Of Rundle",
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
        name: "Canmore | Spray Valley",
        image: mountainsImg.mountains7,
      },
    ],
  },
};

export default COLLECTIONS_DATA;
