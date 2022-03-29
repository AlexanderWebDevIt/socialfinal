import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.state.messagesData.map(m => <Dialog message={m.message}  />)
    let updateDialogs = (e) => {
        let dialog = e.target.value
        props.onChengDialogs(dialog )
    }
    let createDialog = () => { props.addDialog() }
    return (
        <div className={style.container}>
            <div className={style.Bgi}></div>
            <div className={style.wrapper}>
                <textarea
                    value={props.state.textDialog}
                    onChange={updateDialogs}
                    className={style.dialogText}
                />
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
