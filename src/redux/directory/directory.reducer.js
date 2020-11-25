import mountainsImg from "../../media/menu-img/mountains.jpg";
import lakesImg from "../../media/menu-img/lakes.jpg";
import internationalImg from "../../media/menu-img/international.jpg";
import winterImg from "../../media/menu-img/winter.jpg";
import citiesImg from "../../media/menu-img/cities.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "International",
      imageUrl: internationalImg,
      id: 1,
      linkUrl: "gallery/international",
    },
    {
      title: "Winter",
      imageUrl: winterImg,
      id: 2,
      linkUrl: "gallery/winter",
    },
    {
      title: "Cities",
      imageUrl: citiesImg,
      id: 3,
      linkUrl: "gallery/cities",
    },
    {
      title: "Mountains",
      imageUrl: mountainsImg,
      size: "large",
      id: 4,
      linkUrl: "gallery/mountains",
    },
    {
      title: "Lakes",
      imageUrl: lakesImg,
      size: "large",
      id: 5,
      linkUrl: "gallery/lakes",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
