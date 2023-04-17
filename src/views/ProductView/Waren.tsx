import React from 'react';
import { product } from '../../common/models/product';
import WarenSingle from '../ProductSingle/WarenSingle';

interface WarenProps {
    warenkorb : product[];
    gesamtSumme: number;
    inWarenkorb : (p:product) => void;
    minusWarenkorb : (p:product) => void;
}

const Waren = ({warenkorb, inWarenkorb, minusWarenkorb, gesamtSumme}:WarenProps) => {
    return (
        <div>
            <h1>Warenkorb</h1>

    <table>
        <thead>
        <tr>

            <th >Image</th>
            <th >Name</th>
            <th >Kategorie</th>
            <th >gewünschte Anzahl</th>
            <th >Preis</th>
            <th >+</th>
            <th >-</th>

        </tr>
        </thead>
        <tbody>
        <div>
        {

            warenkorb.map((product,index) => {

                if (product.PIndex != 0) {
                return   (



                    <WarenSingle product={product} PIndex={product.PIndex} image={product.image}
                                 name={product.name} categorie={product.category} price={product.price}
                                 anzahlImWarenkorb={product.anzahlImWarenkorb} inWarenkorb={inWarenkorb}
                                 minusWarenkorb={minusWarenkorb} key={product.PIndex}/>


                )
            }})
        }
            <tr>------------------------------</tr>
        <tr>Sie haben um {gesamtSumme} Euro eingekauft</tr>
        </div>
        </tbody>
    </table>

        </div>
    );

};

export default Waren;