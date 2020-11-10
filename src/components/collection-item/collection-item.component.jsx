import React from "react";

import FormButton from "../form-button/form-button.component";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <FormButton invertColors>Add to Cart</FormButton>
  </div>
);

export default CollectionItem;
