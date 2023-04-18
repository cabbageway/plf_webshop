import React from 'react';
import { IProduct } from '../../common/models/IProduct';



interface DetailsViewProps {
    detailedProduct : IProduct,
    toShowProducts : () => void
}
const DetailsView = ({detailedProduct, toShowProducts} :DetailsViewProps) => {
    return (
        <div>
            <div>
                <h1> Detailansicht {detailedProduct.name}</h1>
                <img src={detailedProduct.image}  alt=""/>
                <button className="btn btn-secondary" onClick={toShowProducts}>Übersicht</button>
            </div>
        </div>
    );
};

export default DetailsView;