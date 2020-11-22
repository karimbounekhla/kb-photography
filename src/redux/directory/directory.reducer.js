import posterImg from "../../media/menu-img/posters.jpg";
import framesImg from "../../media/menu-img/frames.jpg";
import calendarImg from "../../media/menu-img/calendars.jpg";
import digitalImg from "../../media/menu-img/digital.jpg";
import otherImg from "../../media/menu-img/other.jpg";

const INITIAL_STATE = {
  sections: [
    {
      title: "Calendars",
      imageUrl: calendarImg,
      id: 1,
      linkUrl: "shop/calendars",
    },
    {
      title: "Other",
      imageUrl: otherImg,
      id: 2,
      linkUrl: "shop/other",
    },
    {
      title: "Digital",
      imageUrl: digitalImg,
      id: 3,
      linkUrl: "shop/digital",
    },
    {
      title: "Posters",
      imageUrl: posterImg,
      size: "large",
      id: 4,
      linkUrl: "shop/posters",
    },
    {
      title: "Frames",
      imageUrl: framesImg,
      size: "large",
      id: 5,
      linkUrl: "shop/frames",
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
