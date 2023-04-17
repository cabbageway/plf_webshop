import React from 'react';
import { product } from '../../common/models/product';

interface WarenSingleProps {
    product:product,
    PIndex: number,
    image: string,
    name:  string,
    categorie:string,
    anzahlImWarenkorb: number
    price: number,
    inWarenkorb : (p:product) => void
    minusWarenkorb : (p:product) => void
}
const WarenSingle = ({product, PIndex, image, name, categorie, anzahlImWarenkorb, price, inWarenkorb, minusWarenkorb}:WarenSingleProps) => {
    return (
        <div>
            <tr>
            <td>
                <img width="100%" src={image} alt=""/></td>
            <td>{name}</td>

            <td>{categorie}</td>
            <td>{anzahlImWarenkorb}</td>
            <td>{price}</td>
            <td><button className="btn btn-primary" onClick={() => {
                inWarenkorb(product);
            }}
            >+</button></td><td>
            <button className="btn btn-primary" onClick={() => {
                minusWarenkorb(product);
            }}
            >-</button></td>
        </tr>
        </div>
    );
};

export default WarenSingle;