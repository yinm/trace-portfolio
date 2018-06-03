import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
      <div className="p-blogSidebar__block--links p-sidebarProfile">
        <p className="c-heading__sub">PROFILE</p>
        <div className="p-sidebarProfile__img"></div>
        <p className="p-sidebarProfile__title">SUMIRE HIBIYA</p>
        <p className="p-sidebarProfile__subTitle">UI DESIGNER</p>
        <p className="p-sidebarProfile__text">
          デジタルなプロダクト作り全般に関わるUIデザイナー。クラウドポートのUIデザイナー兼プロダクトマネージャーをやりつつ、フリーランスでも仕事をしています。
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </p>
      </div>
    )
  }
}
