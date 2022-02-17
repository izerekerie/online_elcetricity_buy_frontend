import React from 'react'
import  Home from './pages/Homepage'
import './index.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes,Redirect} from 'react-router-dom';
import BuyToken from './pages/BuyToken.js';

function App() {


  return (
        
        <BrowserRouter>
     
              
                <Routes>
                    <Route exact path="/buytoken"  element={<BuyToken />}/>
                    <Route exact path="/"  element={<Home />}/>
                </Routes>
           
           
        </BrowserRouter>
   
    )
}

export default App
