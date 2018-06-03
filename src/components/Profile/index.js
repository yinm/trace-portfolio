import React, { Component } from 'react'
import styles from './styles.css'

export class Profile extends Component {
  render() {
    return (
      <div className="p-blogSidebar__block--links p-sidebarProfile">
        <p className="c-heading__sub">PROFILE</p>
        <div className="p-sidebarProfile__img"></div>
        <p className="p-sidebarProfile__title">SUMIRE HIBIYA</p>
        <p className="p-sidebarProfile__subTitle">UI DESIGNER</p>
        <p className="p-sidebarProfile__text">
          デジタルなプロダクト作り全般に関わるUIデザイナー。クラウドポートのUIデザイナー兼プロダクトマネージャーをやりつつ、フリーランスでも仕事をしています。<br />
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank"> Instagram</a>
        </p>
      </div>
    )
  }
}
