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

    return (
        <div className={style.container}>
            <div className={style.Bgi}></div>
           <div className={style.block}>
               <DialogItem name={dialogsData[0].name} id = {dialogsData[0].id}/>
                <Dialog message={messagesData[0].message}/>
           </div>
        </div>
    );
};

export default Dialogs;
