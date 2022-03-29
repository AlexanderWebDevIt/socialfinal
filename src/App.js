import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route,Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = () => {
  return (
      <div className="wrapper">
        <div className="Header" >
            <Header/>
        </div>
        <div className="Navbar" >
            <Navbar/>
        </div>
        <div className="Container" >
            <Routes>
                <Route path='/profile' element={ <Profile/>}/>
                <Route path='/dialogs' element={ <DialogsContainer/>}/>
            </Routes>
        </div>
      </div>
  );
}
export default App;
