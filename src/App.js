import React, { Component } from 'react';
import { Header } from './components/Header'
import { Article } from './components/Article'
import { TableOfContents } from './components/TableOfContents'
import { Footer } from './components/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="l-blog__wrapper">
          <Article />
          <div className="l-blog__sub p-blogSidebar">
            <div className="p-blogSidebar__outer" style={{ position: 'relative', top: '0px' }}>
              <TableOfContents/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
