import React from 'react';
import "./Header.css";
import {BookmarkAdded, BookmarkBorder, Delete, Star, StarOutline} from "@mui/icons-material";

interface HeaderProps {
    clickProducts : () => void;
    clickWarenkorb : () => void;
    clickLogin : () => void;

}

const Header = ({clickProducts, clickWarenkorb, clickLogin}:HeaderProps) => {

  
    return (
        <div className="header">
            <StarOutline/>
            <button  className="btn btn-secondary" onClick={clickProducts}>Produktliste</button>
            <button className="btn btn-secondary" onClick={clickWarenkorb}>Warenkorb</button>


        </div>
    );
};

export default Header;