import React, { Component } from 'react'
import styles from './styles.css'

export class Main extends Component {
  render() {
    return (
      <div className="p-index">
        <div className="p-index__thumbnail">
          <img src="../../../public/ph_profile-3c923ce4.jpg" alt="Ph profile" />
        </div>
        <div className="p-index__mainContent">
          <section>
            <p> デジタルなプロダクト作り全般に関わるUIデザイナーです。 </p>
            <p>
               ビジネス上のゴールとユーザーの課題解決のどちらも同時に達成すること、課題を構造的に把握した上で適切な解決策を提示すること、長期的に関わりGrowthにコミットすること、をモットーに活動しています。
            </p>
            <p>SaaS、管理画面、業務システム領域に関するプロダクトデザインを得意としています。</p>
            <ul>
              <li>
                <a href="#" target="_blank">資産運用ブログ</a>
              </li>
              <li>
                <a href="#" target="_blank">Twitter</a>
              </li>
              <li>
                <a href="#" target="_blank">Instagram</a>
              </li>
              <li>
                <a href="#" target="_blank">SpeakerDeck</a>
              </li>
              <li>
                <a href="#" target="_blank">GitHub</a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="c-heading__sub"> EXPERIENCE </h2>
            <dl>
              <dt> 2017.6 - Present </dt>
              <dd> フリーランスUIデザイナー </dd>
            </dl>
            <dl>
              <dt> 2017.6 - Present </dt>
              <dd> 株式会社クラウドポート プロダクトマネジャー/UIデザイナー </dd>
            </dl>
            <dl>
              <dt> 2015.1 - 2017.6 </dt>
              <dd> 株式会社グッドパッチ UIデザイナー/プロジェクトマネージャー </dd>
            </dl>
            <dl>
              <dt> 2013.10 - 2014.12 </dt>
              <dd> ナイル株式会社 Webデザイナー/ディレクター </dd>
            </dl>
            <dl>
              <dt> 2013 </dt>
              <dd> 株式会社ペロリ Webデザイナー兼雑用 </dd>
            </dl>
            <dl>
              <dt>2013</dt>
              <dd> btrax, Inc. Administrative Assistant </dd>
            </dl>
          </section>
          <section>
            <h2 className="c-heading__sub"> EDUCATION </h2>
            <p>Bechelor of Commerce, Waseda University</p>
          </section>
          <section>
            <h2 className="c-heading__sub"> CERTIFICATION </h2>
            <p>3級ファイナンシャル・プランニング技能士</p>
          </section>
        </div>
      </div>
    )
  }
}