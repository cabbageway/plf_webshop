import React, {ReactNode, useState} from 'react';
import {productData} from './common/models/mockDataProducts';
import {IProduct} from './common/models/IProduct';

import Header from "./views/header/Header";
import ProductList from "./views/product-list/ProductList";
import Warenkorb from "./views/warenkorb/Warenkorb";
import DetailsView from "./views/details-view/DetailsView";


export enum AppViews {
  ProductOverview = 1,
  Warenkorb = 2,
  ProductDetails = 3,
  Login = 4,
  Meldung = 5
}


function App() {

  const [products, setproducts] = useState(productData);
  const [warenkorb, setWarenkorb] = useState([{
    PIndex: 0,
    name: "",
    category: "",
    image: "",
    price: 0.0,
    anzahlImWarenkorb: 0
  }]);

  const [detailP, setdetailP] = useState(productData[0]);

  const inWarenkorb = (p: IProduct) => {

    let existP = warenkorb.find((item) => {
      return (item == p);
    })

    let warenkorbNew: IProduct[] = [];

    if (existP == undefined) {
      warenkorbNew = [...warenkorb, p];
    } else {
      existP.anzahlImWarenkorb++;
      warenkorbNew = [...warenkorb];
    }

    setWarenkorb(warenkorbNew);
  }

  const minusWarenkorb = (p: IProduct) => {

    let warenkorbNew = warenkorb.map(w => {
      if (w.PIndex === p.PIndex) {
        w.anzahlImWarenkorb--;
        return w;
      } else {
        return w;
      }
    })

    const warenkorbFiltered = warenkorbNew.filter(w => w.anzahlImWarenkorb > 0);

    setWarenkorb(warenkorbFiltered);

  }
  const [selectedView, setSelectedView] = useState(AppViews.ProductOverview);

  const clickProducts = () => {
    setSelectedView(AppViews.ProductOverview);
  }

  const clickWarenkorb = () => {
    setSelectedView(AppViews.Warenkorb);
  }

  const clickLogin = () => {
    setSelectedView(AppViews.Login);
  }
  const toDetails = (p: IProduct) => {
    setdetailP(p);
    setSelectedView(AppViews.ProductDetails);
  }


  const renderSelectedView = (): ReactNode => {
    switch (selectedView) {
      case AppViews.ProductOverview:
        return (
            <ProductList products={products} inWarenkorb={inWarenkorb} toDetails={toDetails}/>

        )
      case AppViews.Warenkorb:
        return (
            <Warenkorb warenkorb={warenkorb} inWarenkorb={inWarenkorb}
                       minusWarenkorb={minusWarenkorb}/>
        )
      case AppViews.ProductDetails:
        return (
            <DetailsView detailedProduct={detailP} toShowProducts={clickProducts}/>
        )
    }
  }

  return (
      <div className="App container">

        <Header clickProducts={clickProducts} clickWarenkorb={clickWarenkorb}
                clickLogin={clickLogin}/>
        <div className="app-content">
          {renderSelectedView()}
        </div>
      </div>
  );
}

export default App;