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
            <img src="" className="" alt="logo" />
            <span className="material-icons">Star</span>
            <button  className="btn btn-secondary" onClick={clickProducts}>Produktliste</button>
            <button className="btn btn-secondary" onClick={clickWarenkorb}>Warenkorb</button>
            <button className="btn btn-secondary" onClick={clickLogin}>Login</button>


        </div>
    );
};

export default Header;