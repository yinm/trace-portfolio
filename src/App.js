import React, { Component } from 'react';
import { Header } from './components/Header/index'
import { Image } from './components/Image/index'
import { Content } from './components/Content/index'
import { Footer } from './components/Footer/index'
import './normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Header/>
        <main className="main-content">
          <Image className="content-image"/>
          <Content className="content-text"/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
