import {product} from "./product";
import { user } from "./user";

export const productData: product[] = [
    {
        PIndex : 1,
        name: "Iphone 12",
        category: "Electonic",
        image:"https://files.refurbed.com/ii/iphone-12-1607327724.jpg?t=resize&h=600&w=800",
        price: 950.00,
        anzahlImWarenkorb:1
    },
    {
        PIndex : 2,
        name: "Flat TV",
        category: "Elektro",
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92411809/fee_786_587_png",
        price: 499.00,
        anzahlImWarenkorb: 1
    }
];

export const userData: user[] = [{
    username: "Chris",
    userpwd: "1234"
},
    {
        username: "Gernot",
        userpwd: "5678"
    }
]