 import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import { render } from '@testing-library/react';

export default class App extends Component {
  a = "this is new one";
    render(){
        return (
          <div>
          <Navbar></Navbar>
          <News></News>
          </div>
        )
      }
}
