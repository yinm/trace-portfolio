import React, {Component} from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <p>UI DESIGNER</p>
        <h1><a href="#">SUMIRE HIBIYA</a></h1>

        <nav>
          <ul>
            <li><a href="#">TOP</a></li>
            <li><a href="#">BLOG</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
