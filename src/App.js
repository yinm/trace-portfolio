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
        <main className="l-article__main">
          <Article/>
          <div style={{
            backgroundColor: '#999',
            width: '300px',
          }}>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
