import React, { Component } from 'react';
import { Header } from './components/Header/index'
import { Image } from './components/Image/index'
import './normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Image/>
      </div>
    );
  }
}

export default App;
