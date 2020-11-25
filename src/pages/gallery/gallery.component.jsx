import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

const GalleryPage = ({ match }) => (
  <div className="shop-page">
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default GalleryPage;
