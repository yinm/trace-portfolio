import React, { Component } from 'react'
import styles from './styles.css'

export class Content extends Component {
  render() {
    return (
      <div className="content-text">
        <section className="main-description">
          <p>
            デジタルなプロダクト作り全般に関わるUIデザイナーです。
          </p>
          <p>
            ビジネス上のゴールとユーザーの課題解決のどちらも同時に達成すること、課題を構造的に把握した上で適切な解決策を提示すること、長期的に関わりGrowthにコミットすること、をモットーに活動しています。
          </p>
          <p>
            SaaS、管理画面、業務システム領域に関するプロダクトデザインを得意としています。
          </p>

          <ul className="social-list">
            <li><a href="#">資産運用ブログ</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">SpeakerDeck</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">EXPERIENCE</h2>
          <dl>
            <dt className="timeline">2017.6 - Present</dt>
            <dd className="belong-description">フリーランスUIデザイナー</dd>
          </dl>
          <dl>
            <dt className="timeline">2017.6 - Present</dt>
            <dd className="belong-description">株式会社クラウドポート プロダクトマネジャー/UIデザイナー</dd>
          </dl>
          <dl>
            <dt className="timeline">2015.1 - 2017.6</dt>
            <dd className="belong-description">株式会社グッドパッチ UIデザイナー/プロジェクトマネージャー</dd>
          </dl>
          <dl>
            <dt className="timeline">2013.10 - 2014.12</dt>
            <dd className="belong-description">ナイル株式会社 Webデザイナー/ディレクター</dd>
          </dl>
          <dl>
            <dt className="timeline">2013</dt>
            <dd className="belong-description">株式会社ペロリ Webデザイナー兼雑用</dd>
          </dl>
          <dl>
            <dt className="timeline">2013</dt>
            <dd className="belong-description">btrax, Inc. Administrative Assistant</dd>
          </dl>
        </section>

        <section>
          <h2 className="section-title">EDUCATION</h2>
          <p>Bechelor of Commerce, Waseda University</p>
        </section>

        <section>
          <h2 className="section-title">CERTIFICATION</h2>
          <p>3級ファイナンシャル・プランニング技能士</p>
        </section>

      </div>
    )
  }
}