import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={style.container}>
            <DialogItem/>
        </div>
    );
};

export default Dialogs;
