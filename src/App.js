import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ConvertCont from './Containers/convertContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <ConvertCont/>
      </div>
    );
  }
}

export default App;
