import React from 'react';

interface MeldungProps {
    toProducts: () => void
}
const Meldung = ({toProducts}:MeldungProps) => {
    return (
        <div>
           <h2>Sie müssen sich zuerst einloggen 
           wenn Sie den Warenkorb sehen wollen 
           </h2>
            <button className="btn btn-secondary" onClick={toProducts}>Übersicht</button> 
        </div>
    );
};

export default Meldung;