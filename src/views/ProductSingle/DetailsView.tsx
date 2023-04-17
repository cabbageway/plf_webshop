import React from 'react';
import { product } from '../../common/models/product';



interface DetailsViewProps {
    detailedProduct : product,
    toShowProducts : () => void
}
const DetailsView = ({detailedProduct, toShowProducts} :DetailsViewProps) => {
    return (
        <div>
            <div>
                <h1>{detailedProduct.name}</h1>
                <img src={detailedProduct.image}  alt=""/>
                <button className="btn btn-secondary" onClick={toShowProducts}>Übersicht</button>
            </div>
        </div>
    );
};

export default DetailsView;