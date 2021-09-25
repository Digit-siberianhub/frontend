import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import './Header.scss';


const Header = () => {
    return(
        <Link to='/' className="Header">
            <img src={logo} className="Header__logo" />
            <p className="Header__title">Siberian Hub.Сотрудники</p>
        </Link>
    );
}

export default Header;