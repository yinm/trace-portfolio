import React, { Component } from 'react'

export class TableOfContents extends Component {
  render() {
    return (
      <div className="p-blogSideBar__block p-blogToc">
        <p className="c-heading__sub">
          TABLE OF CONTENTS
        </p>
        <ul className="p-blogToc__wrapper">
          <li>
            <a href="プロダクト開発のキックオフで必ずすることは、プロジェクトゴールのすり合わせ">プロダクト開発のキックオフで必ずすることは、プロジェクトゴールのすり合わせ</a>
          </li>
          <li>
            <a href="リーンキャンバス+αの「プロジェクトキャンバス」を使う">リーンキャンバス+αの「プロジェクトキャンバス」を使う</a>
            <ul>
              <li>
                <a href="リーンキャンバスの項目">リーンキャンバスの項目</a>
              </li>
              <li>
                <a href="プロダクト開発は検証を進めていくこと – どこが今一番の「不確かなこと」なのか？">プロダクト開発は検証を進めていくこと – どこが今一番の「不確かなこと」なのか？</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
