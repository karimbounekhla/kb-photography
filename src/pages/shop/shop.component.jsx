import React from "react";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import "./shop.styles.scss";

const ShopPage = () => (
  <div className="shop-page">
    <span class="info">
      <strong>Note:</strong> Shop Content is a work in Progress. The below items
      are placeholders only.
    </span>
    <CollectionOverview />
  </div>
);

export default ShopPage;
