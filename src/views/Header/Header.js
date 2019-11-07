import React from 'react';

import './header.scss';
import {Link} from "react-router-dom";
import {SIGN_IN} from "../../routes/paths";

const Header = () => (
    <header className="app-header">
        <div className="logo">
            <h3><Link to='/'>Crud React App</Link></h3>
        </div>
        <div className="menu">
            <ul className="menu-list">
                <li><Link to={SIGN_IN}>Sign In</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;