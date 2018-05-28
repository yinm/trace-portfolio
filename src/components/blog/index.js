import React, { Component } from 'react'
import styles from './styles.css'

export class Blog extends Component {
  render() {
    return(
      <div className="b-wrapper">
        <h2 className="b-title">BLOG</h2>
        <div className="b-post__wrapper">
          <p className="b-post__date">2017.11.26</p>
          <h3><a href="#" className="b-post__title">プロジェクトの最初に、Project Canvas（プロジェクトキャンバス）を作ろう</a></h3>
        </div>
        <div className="b-post__wrapper">
          <p className="b-post__date">2017.09.03</p>
          <h3><a href="#" className="b-post__title">ソーシャルレンディング専門メディアを運営する株式会社クラウドポートにjoinしました！</a></h3>
        </div>
      </div>
    )
  }
}
