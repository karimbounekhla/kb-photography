import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";

import posterImg from "../../media/menu-img/posters.jpg";
import framesImg from "../../media/menu-img/frames.jpg";
import calendarImg from "../../media/menu-img/calendars.jpg";
import digitalImg from "../../media/menu-img/digital.jpg";
import otherImg from "../../media/menu-img/other.jpg";

import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "CALENDARS",
          imageUrl: calendarImg,
          id: 1,
          linkUrl: "shop/calendars"
        },
        {
          title: "OTHER",
          imageUrl: otherImg,
          id: 2,
          linkUrl: "shop/other"
        },
        {
          title: "DIGITAL",
          imageUrl: digitalImg,
          id: 3,
          linkUrl: "shop/digital"
        },
        {
          title: "POSTERS",
          imageUrl: posterImg,
          size: "large",
          id: 4,
          linkUrl: "shop/posters"
        },
        {
          title: "FRAMES",
          imageUrl: framesImg,
          size: "large",
          id: 5,
          linkUrl: "shop/frames"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
