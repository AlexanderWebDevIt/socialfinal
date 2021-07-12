import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {
    let dialogsData = [
        {id:2, name:"Dima"},
        {id:3, name:"Sasha"},
        {id:4, name:"Ira"},
        {id:5, name:"Petr"},
    ]
    let messagesData = [
        {message: "loremjfnj okfjvbfj sjvjfvn", id: 2},
        {message: "loremjfnj okfjvbfj sjvjfvn", id: 3},
        {message: "loremjfnj okfjvbfj sjvjfvn", id: 4},
        {message: "loremjfnj okfjvbfj sjvjfvn", id: 5},
    ]
    let dialogElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = messagesData.map(m => <Dialog message={m.message}/>)
    return (
        <div className={style.container}>
            <div className={style.Bgi}></div>
           <div className={style.block}>
               {dialogElement}
           </div>
            <div className={style.block}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;
