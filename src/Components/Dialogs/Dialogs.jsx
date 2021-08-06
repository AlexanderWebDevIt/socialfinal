import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {

    let dialogElement = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.messagesData.map(m => <Dialog message={m.message}/>)
    let elementDialog = React.createRef();
    let updateDialogs = () => {
        let dialog = elementDialog.current.value
    }
    let createDialog = () => {

    }


    return (
        <div className={style.container}>
            <div className={style.Bgi}></div>
            <div className={style.wrapper}>
                <textarea onChange={updateDialogs} className={style.dialogText}/>
                <button onClick={createDialog} className={style.btn}>add</button>
            </div>
           <div className={style.block}>
               <div className={style.dialogs}>{dialogElement}</div>
               <div className={style.messages}> {messageElement}</div>
           </div>

        </div>
    );
};

export default Dialogs;
