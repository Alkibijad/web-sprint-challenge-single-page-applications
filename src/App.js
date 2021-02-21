//Libraries
import './App.css';
import {Route, Switch} from 'react-router-dom'
import React from "react";

// components
import  Navbar  from "./components/Navbar";
import Form from './components/Form'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path='/pizza'>
            <Form />
        </Route>
   
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
       
    </>
  );
};
export default App;