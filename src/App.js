
import './App.css';
import React from 'react'
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

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

        </div>
      </div>
  );
}

export default App;
