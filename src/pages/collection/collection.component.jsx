import React from "react";
import Lightbox from "react-lightbox-component";
import "react-lightbox-component/build/css/index.css";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/collections/collections.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <Lightbox
        images={items.map((item) => ({
          src: item.image,
          title: item.name,
          description: "Karim Bounekhla",
        }))}
        thumbnailWidth="400px"
        thumbnailHeight="500px"
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
