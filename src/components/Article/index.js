import React, { Component } from 'react'
import styles from './styles.css'

export class Article extends Component {
  render() {
    return (
      <div className="l-blog__main p-article">
        <h1 className="p-article__title"> プロジェクトの最初に、Project Canvas（プロジェクトキャンバス）を作ろう </h1>
        <div className="p-article__info">
          <span className="p-article__date"> 2017.11.26 </span>
          <span className="p-article__category"></span>
        </div>
        <div className="p-article__content">
          <p>
            <img src="/coverImage-419cd37d.jpg" alt="cover image" />
             Photo by Patrick Perkins on Unsplash
          </p>

          <h1 id="プロダクト開発のキックオフで必ずすることは、プロジェクトゴールのすり合わせ">プロダクト開発のキックオフで必ずすることは、プロジェクトゴールのすり合わせ</h1>
          <p>
            UIデザイン案件のオリエンやキックオフに参加する時、実際にそのプロジェクトに入るかどうか関係なく、必ず最初の打ち合わせでそのプロジェクトのゴールをクライアントとすり合わせるようにしています。当たり前ですが…その当たり前が大事…！
          </p>
          <p>
            <strong>「今回は●月のローンチに向けてまずこのプロダクトのコンセプトである＊＊がユーザーさんに伝わり、且つ刺さることをゴールに、on-boardingプロセス完了と最初のAHA体験に到達してもらうことをゴールに進めたいと思います。認識違いありますでしょうか…？」</strong>
          </p>
          <p>
            的な😇（全部それっぽく書いた例です）
          </p>
          <p>
            ここでのポイントは、プロダクト開発に参加していくいちデザイナとして、
            <strong>「この機能のUIデザイン作ります」といった単純なタスクを定義するんじゃ全く足りなくて、そもそものプロジェクトゴールまで踏み込んでチームで認識合わせしたいという点</strong>
            なんですよね。
          </p>
          <p>
            それをいつもどうやってやってるのかのHOWについてまとめます💪
          </p>
          <p>
            これをやると
          </p>
          <ul>
            <li>デザイナやエンジニアに仕事を依頼する時、ゴールが明確なので優先度がつけやすくなる</li>
            <li>そもそも論から作り手の役割を持った人と一緒に議論できる</li>
          </ul>
          <p>とか、そういう良いことがあるなーと思っています。</p>

          <h1 id="リーンキャンバス+αの「プロジェクトキャンバス」を使う">リーンキャンバス+αの「プロジェクトキャンバス」を使う</h1>
          <p>
            <a href="/projectCanvas_01-a46eb09b.png">
              <img src="/projectCanvas_01-a46eb09b.png" alt="プロジェクトキャンバス" />
            </a>
            ※クリックすると拡大するよ
          </p>
          <p>
            リーンキャンバスってご存知の方も多いと思いますが、私の場合これに「プロジェクトゴール」というのをくっつけ、「プロジェクトキャンバス」と呼んで使っています。 これは前職で
            <a href="https://about.me/mikihirocks">藤井さん（現・ザッパラス）</a>
            がやっていたことを真似しています。🙏
          </p>
          <p>とはいえ、最初に埋めるのはリーンキャンバスの内容なので、それを先に見ていきましょう🙋</p>
          <h3 id="リーンキャンバスの項目">リーンキャンバスの項目</h3>
          <p>
            プロダクトやチームによって埋めやすい場所が変わると思うので、
            <strong>埋めやすい場所から埋めていく</strong>
             のがミソです。
            <strong>逆に、埋めにくかったり確かでないことを書かねばならないところはそのプロジェクトで早々に検証したいところですよね。</strong>
            (←これ大事)
          </p>
          <ul>
            <li>ターゲットユーザー（2. 顧客セグメント）</li>
            <li>ターゲットユーザーの課題（1. Problems）</li>
            <li>ソリューション</li>
          </ul>
          <p>
            Keynoteで作ることもありますが、Slackに貼っつけておきたいので大体スプレッドシートで作ります。
            <a href="#">フォーマットはこちら</a>
          </p>
          <h3 id="プロダクト開発は検証を進めていくこと – どこが今一番の「不確かなこと」なのか？">プロダクト開発は検証を進めていくこと – どこが今一番の「不確かなこと」なのか？</h3>
          <p>
            リーンキャンバスを活用した仮説検証の考え方はUmadaさんのこちらのスライドがとっても分かりやすいです。前職でも何度も共有しました。
          </p>
          <p>
            <iframe src="//www.slideshare.net/slideshow/embed_code/key/iAwaDAum23nWi7" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style={{border: '1px solid #CCC', borderWidth: '1px', marginBottom: '5px', maxWidth: '100%'}} allowfullscreen> </iframe>
          </p>
          <div style={{marginBottom: '5px'}}> <strong> <a href="//www.slideshare.net/takaumada/good-hypothesis-for-lean-startup" title="リーンスタートアップにおける良い仮説、悪い仮説" target="_blank">リーンスタートアップにおける良い仮説、悪い仮説</a> </strong> from <strong><a href="https://www.slideshare.net/takaumada" target="_blank">Takaaki Umada</a></strong> </div>
          <p></p>
          <p>
            私は、
            <strong>ここで検証したいと思ったところか、大本のKGIをプロジェクトゴールに入れます。</strong>
          </p>
          <p>
            本来なら具体的なシートをお見せして例を出したいんですが、ブログで公開しちゃえる例がない…こういったお題で話す機会があったら呼んでください。。🙏
          </p>

        </div>
        <ul className="p-articleSocial">
          <li className="twitter">Twitter</li>
          <li className="facebook">Facebook</li>
        </ul>
      </div>
    )
  }
}
