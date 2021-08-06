
import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./Components/Dialogs/Dialogs";



const App = (props) => {


  return (
      <div className="wrapper">
        <div className="Header" >
            <Header/>
        </div>
        <div className="Navbar" >
            <Navbar/>
        </div>
        <div className="Container" >
            <Route path='/profile/:userId?' render={ () => <Profile state={props.state.postData} addPost={props.addPost} />}/>
            <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />}/>
        </div>
      </div>
  );
}

export default App;
