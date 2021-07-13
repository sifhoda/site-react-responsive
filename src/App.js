import React , {useState } from 'react';
import './App.css';
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  const [menuItems , setMenuItems ] = useState();
  
  return (
      <div className="app">
        <Header />
      </div>

  );
}

export default App;


