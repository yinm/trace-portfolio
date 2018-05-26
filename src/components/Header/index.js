import React, {Component} from 'react'
import styles from './styles.css'

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="title">
          <p className="App-subtitle">UI DESIGNER</p>
          <h1 className="App-title"><a href="#">SUMIRE HIBIYA</a></h1>
        </div>

        <nav className="nav">
          <ul className="nav-table">
            <li className="nav-cell"><a href="#">TOP</a></li>
            <li className="nav-cell"><a href="#">BLOG</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
