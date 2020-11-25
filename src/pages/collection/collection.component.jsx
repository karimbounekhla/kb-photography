import React from "react";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  // const { title, items } = collection;
  return (
    <div className="collection-page">
      <Lightbox
        images={[
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
          {
            src:
              "https://via.placeholder.com/250x350/000000/FFFFFF/?text=KB-Photography",
          },
        ]}
        thumbnailWidth="400px"
        thumbnailHeight="300px"
      />
      {/* <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
