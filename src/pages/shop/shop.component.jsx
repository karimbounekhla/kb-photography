import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return this.state.collections.map(({ id, ...shopProps }) => (
      <CollectionPreview key={id} {...shopProps} />
    ));
  }
}

export default ShopPage;
