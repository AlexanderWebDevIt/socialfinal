import React from 'react';
import style from './DialigItems.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.container}>
            <div className={style.dialogs}>
                <NavLink to={path} >{props.name}</NavLink>
            </div>
        </div>
    );
};

export default DialogItem;