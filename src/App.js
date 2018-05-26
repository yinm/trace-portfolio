import React, { Component } from 'react';
import { Header } from './components/Header/index'
import { Image } from './components/Image/index'
import { Content } from './components/Content/index'
import './normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <Image className="content-image"/>
          <Content className="content-text"/>
        </main>
      </div>
    );
  }
}

export default App;
