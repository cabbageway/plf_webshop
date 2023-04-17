import React from 'react';
import { product } from '../../common/models/product';
import './ProductSingle.css';

interface ProductSingleProps {
    product:product,
    PIndex: number,
    image: string,
    name:  string,
    categorie:string,
    price: number,
}
const ProductSingle = ({product, PIndex, image, name, categorie, price}:ProductSingleProps) => {
    return (
        <div>
          
                <td>{PIndex}</td>
                <td>
                    <img width="100%" src={image} alt=""/></td>
                <td>{name}</td>

                <td>{categorie}</td>
                <td>{price}</td>
                

        </div>
    );
};

export default ProductSingle;