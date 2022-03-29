import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.container} >
            <ul className={style.wrapper}>
                <div className={style.item}><NavLink to="/profile" >Profile</NavLink></div>
                <div className={style.item}><NavLink to="/dialogs" >Dialogs</NavLink></div>
                <div className={style.item}><NavLink to="/users" >Users</NavLink></div>
                <div className={style.item}><NavLink to="/news" >News</NavLink></div>
                <div className={style.item}><NavLink to="/setting" >Setting</NavLink></div>
            </ul>
        </div>
    );
};
export default Navbar;