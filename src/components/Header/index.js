import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header className="p-header">
        <div className="p-headerMain">
          <p className="p-headerMain__description">UI DESIGNER</p>
          <h1 className="p-headerMain__logo">
            <a href="/">SUMIRE HIBIYA</a>
          </h1>
        </div>
        <nav className="p-headerMenu">
          <ul className="p-headerMenu__wrapper">
            <li className="p-headerMenu__item">
              <a href="/">TOP</a>
            </li>
            <li className="p-headerMenu__item">
              <a href="#">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}