import React from 'react';
import {Link} from "react-router-dom";
import camera from "../../images/camera-movie-regular-24.png"
import Search from "../Search/Search";


const Header = () => {

    return (
        <div className="header__color">
            <header className="container">
                <div className="header-wrapper">
                    <Link to="/">
                        <img src={camera} alt="" className="mt-3"/>
                    </Link>
                    <p className="head-desc mt-6 ml-20">Cinema - 312</p>
                    <div className="mt-6">
                        <Search />
                    </div>
                    {/*<Link to="/" className="menu-header mt-6">Home</Link>*/}
                </div>
            </header>
        </div>
    );
};

export default Header;