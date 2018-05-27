import React, { Component } from 'react';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Blog } from './components/blog/index'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Blog/>
        <Footer/>
      </div>
    )
  }
}

export default App;
