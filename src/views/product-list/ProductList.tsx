import React from 'react';
import { IProduct } from '../../common/models/IProduct';
import './ProductList.css';
import ProductLine from "./product-line/ProductLine";

interface ShowProductsProps {
    products : IProduct[],
    inWarenkorb : (p: IProduct) => void;
    toDetails : (p:IProduct) => void
}
function ProductList({products, inWarenkorb, toDetails}:ShowProductsProps) {
    return (
        <div>
            <h1>Liste der Produkte</h1>

        <table>
            <thead>
            <tr>
                <th scope="col">Index</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Preis</th>
                <th scope="col">Add</th>

            </tr>
            </thead>
            <tbody>
            {

                products.map((product) => {
                    return (

                        <ProductLine  product={product} key={product.PIndex}
                          inWarenkorb={inWarenkorb} toDetails={toDetails}/>

                )
                })}
            </tbody>
        </table>
    </div>
    );
}

export default ProductList;