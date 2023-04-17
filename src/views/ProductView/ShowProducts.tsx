import React from 'react';
import { product } from '../../common/models/product';
import ProductSingle from '../ProductSingle/ProductSingle';
import './ShowProducts.css';

interface ShowProductsProps {
    products : product[],
    inWarenkorb : (p: product) => void;
    toDetails : (p:product) => void
}
function ShowProducts({products, inWarenkorb, toDetails}:ShowProductsProps) {
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
                        <tr key={product.PIndex} onClick={() => {
                            toDetails(product);
                        }}>
                        <ProductSingle  product={product} PIndex={product.PIndex} image={product.image}
                                        name = {product.name} categorie={product.category} price={product.price}
                                        key={product.PIndex} />
                            <td><button className="btn btn-secondary" onClick={() => {
                                inWarenkorb(product);
                            }}
                                >in den Warenkorb</button></td>
                        </tr>
                )
                })}
            </tbody>
        </table>
    </div>
    );
}

export default ShowProducts;