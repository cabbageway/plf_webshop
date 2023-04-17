import React, {ReactNode, useState} from 'react';
import { productData, userData } from './common/models/mochDataproducts';
import { product } from './common/models/product';
import { user } from './common/models/user';

import Header from "./views/Header/Header";
import LogInForm from './views/LogInForm/LogInForm';
import Meldung from './views/LogInForm/Meldung';
import DetailsView from './views/ProductSingle/DetailsView';
import ShowProducts from "./views/ProductView/ShowProducts";
import Waren from './views/ProductView/Waren';



export enum AppViews {
    ProductOverview = 1,
    Warenkorb = 2,
    ProductDetails = 3,
    Login= 4,
    Meldung=5
}



function App() {
    
    const [products, setproducts] = useState(productData);
    const [warenkorb, setWarenkorb] = useState([{PIndex : 0,
        name: "",
        category: "",
        image:"",
        price: 0.0,
        anzahlImWarenkorb:0}]);
    
    const [detailP, setdetailP] = useState(productData[0]);
    const [gesamtSumme, setGesamtSumme] = useState(0);

    const inWarenkorb = (p : product) => {

        let existP = warenkorb.find((item) => {
            return (item == p);
        })
        let warenkorbNew:product[]=[];


        if (existP == undefined) {
            warenkorbNew = [...warenkorb,p];
        }
        else {
            existP.anzahlImWarenkorb++;
            warenkorbNew = [...warenkorb];
        }
        let summe = 0;
        // @ts-ignore
        warenkorbNew.forEach(item => {
            console.log(summe);
            summe += item.price * item.anzahlImWarenkorb;
        })
        setGesamtSumme(summe);
        // @ts-ignore
        
        setWarenkorb(warenkorbNew);
        
    }

    const minusWarenkorb = (p : product) => {

        let existP = warenkorb.find((item) => {
            return (item == p);
        })
        let warenkorbNew={};
        if (existP == undefined) {
            warenkorbNew = [...warenkorb,p];
        }
        else {
            existP.anzahlImWarenkorb--;
            if (existP.anzahlImWarenkorb == 0) {
             warenkorbNew   = warenkorb.filter((item) => {
                    return (item != p);
                })
            }
            else {
                warenkorbNew = [...warenkorb];
            }
        }
        let summe = 0;
        // @ts-ignore
        warenkorbNew.forEach(item => {
            console.log(summe);
            summe += item.price * item.anzahlImWarenkorb;
        })
        setGesamtSumme(summe);
        // @ts-ignore
        setWarenkorb(warenkorbNew);

    }
    const [selectedView, setSelectedView] = useState(AppViews.ProductOverview);

    const clickProducts = () => {
        setSelectedView(AppViews.ProductOverview);
    }

    const clickWarenkorb = () => {
        if (userOK) {
            setSelectedView(AppViews.Warenkorb);
        }
        else {
            setSelectedView(AppViews.Meldung);
        }
    }

    const clickLogin = () => {
        setSelectedView(AppViews.Login);
    }
    const toDetails = (p:product) => {
        setdetailP(p);
        setSelectedView(AppViews.ProductDetails);
    }

    const [users, setusers] = useState(userData);
    const [userOK, setUserOK] = useState(true);

    const onCheck = ( (u:user) => {
        console.log(u);
       let user  = users.find((ele) => {
           return (ele.username == u.username) && (ele.userpwd == u.userpwd)
       })
        if (user != undefined) {
        setUserOK(true);
       window.alert("einloggen OK sie dürfen den Warenkorb nutzen");
       }
        else {
           window.alert("Username und Password passen nicht");
       }
       
    })



    const renderSelectedView = (): ReactNode => {
        switch (selectedView) {
            case AppViews.ProductOverview:
                return (
                    <ShowProducts products={products} inWarenkorb={inWarenkorb} toDetails={toDetails}/>
                    
                )
            case AppViews.Warenkorb:
                return (
                    <Waren warenkorb={warenkorb} inWarenkorb={inWarenkorb} minusWarenkorb={minusWarenkorb} gesamtSumme={gesamtSumme} />
                )
            case AppViews.ProductDetails:
                return (
                    <DetailsView detailedProduct={detailP} toShowProducts={clickProducts} />
                )
            case AppViews.Login:
                return (
                    <LogInForm toProducts={clickProducts} onCheck={onCheck}/>
                )
            case AppViews.Meldung:
                return (
                   <Meldung toProducts={clickProducts} />
                )
                

        }
    }

        return (
        <div className="App">

            <Header clickProducts={clickProducts} clickWarenkorb={clickWarenkorb} clickLogin={clickLogin} />
            <div className="app-content">
                {renderSelectedView()}
            </div>
        </div>
    );
}

export default App;