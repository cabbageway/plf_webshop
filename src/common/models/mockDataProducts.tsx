import {IProduct} from "./IProduct";
import flattv from "../../assets/flat-tv.jpg"
import iphone from "../../assets/iphone.jpg"
export const productData: IProduct[] = [
    {
        PIndex : 1,
        name: "Iphone 12",
        category: "Electonic",
        image:flattv,
        price: 950.00,
        anzahlImWarenkorb:1
    },
    {
        PIndex : 2,
        name: "Flat TV",
        category: "Elektro",
        image: iphone,
        price: 499.00,
        anzahlImWarenkorb: 1
    }
];
