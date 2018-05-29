import React, { Component } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Article } from './components/Article'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Article/>
        <Footer/>
      </div>
    )
  }
}

export default App;
