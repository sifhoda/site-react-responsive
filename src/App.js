import React , {useState , useContext} from 'react';
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Register from './components/Register';
import Confirm from './components/Confirm';
import PageExemple from './components/PageExemple';

import { UserContext } from './UserContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';

function App() {

  const [User, setUser] = useState({
    isLoggedIn : false,
    sessionDetails : {}
  })


  const [menuItems , setMenuItems ] = useState();

  useEffect(() => {

    // to ensure the user stay connected even when we refresh the page
      if(localStorage.getItem("UserSession")){
        setUser({
          isLoggedIn : true,
          sessionDetails : localStorage.getItem("UserSession")
        })
      }
      console.log(User);
  },[])
  
  return (
      <>
        <Router>
          <UserContext.Provider value={{ User, setUser }}>
            <Header />
            <Route exact path="/login" component={Login} />
            <Route exact path="/mot-de-la-presidente" component={PageExemple} />
            <Route exact path="/confirm/:token" component={Confirm} />
            <Route exact path="/register" component={Register} />
          </UserContext.Provider>
        </Router>
      </>

  );
}

export default App;


