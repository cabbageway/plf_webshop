import React from 'react';
import './ProductLine.css';
import {IProduct} from "../../../common/models/IProduct";


interface ProductSingleProps {
  product: IProduct,
  inWarenkorb: (p: IProduct) => void;
  toDetails: (p: IProduct) => void

}

const ProductLine = ({product, inWarenkorb, toDetails}: ProductSingleProps) => {
  const {PIndex, name, category, image, price} = product;
  return (
      <tr>
        <td>{PIndex}</td>
        <td>
          <img height="200px" src={image} alt="" onClick={() => toDetails(product)}/></td>
        <td>{name}</td>

        <td>{category}</td>
        <td>{price}</td>

        <td>
          <button className="btn btn-secondary" onClick={() => {
            inWarenkorb(product);
          }}
          >in den Warenkorb
          </button>
        </td>
      </tr>
  );
};

export default ProductLine;