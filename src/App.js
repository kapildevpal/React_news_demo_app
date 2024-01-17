 import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import News from './components/News';
// import { render } from '@testing-library/react';



export default class App extends Component {
  a = "this is new one";
    render(){
        return (
          <div>
         
         
         
            <Router>
      <Navbar title="Title" />
      <div className="container my-5">
        <Routes>
          <Route exact path="/business" element={<News key="business" pageSize={7} country = "in" category= "business" />} />
          <Route exact path="/general" element={<News key="general" pageSize={7} country = "in" category= "general" />} />

          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={7} country = "in" category= "entertainment" />} />
        </Routes>
      </div>
    </Router>
          </div>
        )
      }
}
