import React from 'react';
import {IProduct} from '../../common/models/IProduct';
import WarenkorbLine from "./warenkorb-line/WarenkorbLine";

interface WarenProps {
  warenkorb: IProduct[];
  inWarenkorb: (p: IProduct) => void;
  minusWarenkorb: (p: IProduct) => void;
}

const Warenkorb = ({warenkorb, inWarenkorb, minusWarenkorb}: WarenProps) => {

  let gesamtSumme:number = 0;
  warenkorb.forEach((w) => gesamtSumme+=w.price*w.anzahlImWarenkorb);

  return (
      <div>
        <h1>Warenkorb</h1>

        <table>
          <thead>
          <tr>

            <th>Image</th>
            <th>Name</th>
            <th>Kategorie</th>
            <th>gewünschte Anzahl</th>
            <th>Preis</th>
            <th>+</th>
            <th>-</th>

          </tr>
          </thead>
          <tbody>
            {

              warenkorb.map((product, index) => {

                if (product.PIndex != 0) {
                  return (


                      <WarenkorbLine product={product} inWarenkorb={inWarenkorb}
                                   minusWarenkorb={minusWarenkorb} key={product.PIndex}/>


                  )
                }
              })
            }
            <tr><td colSpan={7}>------------------------------</td></tr>
            <tr><td colSpan={7}>Sie haben um {gesamtSumme} Euro eingekauft</td></tr>
          </tbody>
        </table>

      </div>
  );

};

export default Warenkorb;