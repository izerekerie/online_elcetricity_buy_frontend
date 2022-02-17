import React from 'react'
import  Home from './pages/Homepage'
import './index.css';
import {BrowserRouter, BrowserRouter as Router, Route, Routes,Redirect} from 'react-router-dom';
function App() {


  return (
        
        <BrowserRouter>
     
              
                <Routes>
                   
                    <Route exact path="/"  element={<Home />}/>
                </Routes>
           
           
        </BrowserRouter>
   
    )
}

export default App
