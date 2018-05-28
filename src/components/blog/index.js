import React, { Component } from 'react'

export class Blog extends Component {
  render() {
    return (
      <div className="p-blogList">
        <div className="l-blogList__wrapper">
          <h1 className="c-heading__page p-blogList__title">BLOG</h1>
          <div className="p-blogList__articles">
            <section className="p-blogList__block">
              <div className="p-blogList__articleContent l-blogList__main">
                <div className="p-blogList__articleMeta">
                  <span className="p-blogList__articleDate">2017.11.26</span>
                  <span className="p-blogList__articleCategory"></span>
                </div>
                <h2 className="p-blogList__articleTitle">
                  <a href="#">プロジェクトの最初に、Project Canvas（プロジェクトキャンバス）を作ろう</a>
                </h2>
              </div>
            </section>
            <section className="p-blogList__block">
              <div className="p-blogList__articleContent l-blogList__main">
                <div className="p-blogList__articleMeta">
                  <span className="p-blogList__articleDate"> 2017.09.03 </span>
                  <span className="p-blogList__articleCategory"></span>
                </div>
                <h2 className="p-blogList__articleTitle">
                  <a href="#">ソーシャルレンディング専門メディアを運営する株式会社クラウドポートにjoinしました！</a>
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
}
