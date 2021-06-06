import React from 'react';
import style from './Header.module.css'
import logo from './../../Assets/Img/logo.svg'

const Header = () => {
    return (
        <div>
            <img src={logo} className={style.logo} />
            <div className={style.login}>

            </div>
        </div>
    );
};

export default Header;