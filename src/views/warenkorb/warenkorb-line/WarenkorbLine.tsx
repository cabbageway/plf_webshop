import React from 'react';
import {IProduct} from "../../../common/models/IProduct";

interface WarenSingleProps {
  product: IProduct,
  inWarenkorb: (p: IProduct) => void
  minusWarenkorb: (p: IProduct) => void
}

const WarenkorbLine = ({product, inWarenkorb, minusWarenkorb}: WarenSingleProps) => {
  const {image, name, category, anzahlImWarenkorb, price} = product;
  return (
      <tr>
        <td>
          <img height="150px" src={image} alt=""/></td>
        <td>{name}</td>

        <td>{category}</td>
        <td>{anzahlImWarenkorb}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-primary" onClick={() => {
            inWarenkorb(product);
          }}
          >+
          </button>
        </td>
        <td>
          <button className="btn btn-primary" onClick={() => {
            minusWarenkorb(product);
          }}
          >-
          </button>
        </td>
      </tr>
  );
};

export default WarenkorbLine;