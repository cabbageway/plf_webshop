import React, {ReactNode, useState} from 'react';
import {productData} from './common/models/mockDataProducts';

export enum AppViews {
  ProductOverview = 1,
  Warenkorb = 2,
  ProductDetails = 3,
}


function App() {

  const [products, setproducts] = useState(productData);
  const [warenkorb, setWarenkorb] = useState([]);

  const [selectedView, setSelectedView] = useState(AppViews.ProductOverview);

  const renderSelectedView = (): ReactNode => {
    switch (selectedView) {
      case AppViews.ProductOverview:
        return (
            <div>Replace with Product-List Component</div>

        )
      case AppViews.Warenkorb:
        return (
            <div>Replace with Warenkorb Component</div>
        )

    }
  }

  return (
      <div className="App container">

        <div>Replace with Header Component</div>
        <div className="app-content">
          {renderSelectedView()}
        </div>
      </div>
  );
}

export default App;