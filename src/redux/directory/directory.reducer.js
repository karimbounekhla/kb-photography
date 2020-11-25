import posterImg from "../../media/menu-img/posters.jpg";
import framesImg from "../../media/menu-img/frames.jpg";
import calendarImg from "../../media/menu-img/calendars.jpg";
import digitalImg from "../../media/menu-img/digital.jpg";
import otherImg from "../../media/menu-img/other.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "International",
      imageUrl: calendarImg,
      id: 1,
      linkUrl: "gallery/international",
    },
    {
      title: "Winter",
      imageUrl: otherImg,
      id: 2,
      linkUrl: "gallery/winter",
    },
    {
      title: "Cities",
      imageUrl: digitalImg,
      id: 3,
      linkUrl: "gallery/cities",
    },
    {
      title: "Mountains",
      imageUrl: posterImg,
      size: "large",
      id: 4,
      linkUrl: "gallery/mountains",
    },
    {
      title: "Lakes",
      imageUrl: framesImg,
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
