# TRAVIS HP / 公開用まとめ

TRAVISのメインLP＋詳細手順2ページ構成です。

## 本番ドメイン

```text
https://travisboat.jp/
```

GitHub Pages用の `CNAME` ファイルは追加済みです。

```text
travisboat.jp
```

## 公開するファイル

GitHub Pagesで公開する場合は、`site` フォルダの中身をリポジトリ直下へアップロードしてください。

- `CNAME`：独自ドメイン設定
- `index.html`：メインLP
- `register.html`：テレボート登録の詳しい図解ページ
- `vote.html`：入金・レース選択・舟券購入・結果確認の詳しい図解ページ
- `style.css`：全体デザイン
- `script.js`：画像スライダー、拡大表示
- `favicon.svg`
- `*.png` / `*.jpg` / `*.jpeg`：使用画像
- `*.ttf`：手書き風フォント
- `README.md`

## GitHub Pages設定

GitHubのリポジトリで以下を設定してください。

```text
Settings
↓
Pages
↓
Custom domain
↓
travisboat.jp
```

反映後、`Enforce HTTPS` をONにしてください。

## お名前.com DNS設定

ルートドメイン `travisboat.jp` を使う場合は、Aレコードを4つ設定します。

```text
ホスト名：@
TYPE：A
VALUE：185.199.108.153
```

```text
ホスト名：@
TYPE：A
VALUE：185.199.109.153
```

```text
ホスト名：@
TYPE：A
VALUE：185.199.110.153
```

```text
ホスト名：@
TYPE：A
VALUE：185.199.111.153
```

`www.travisboat.jp` も使う場合は、CNAMEも追加します。

```text
ホスト名：www
TYPE：CNAME
VALUE：t-ra-vis.github.io
```

## 公開後に使うページURL

```text
メインLP
https://travisboat.jp/

登録の概要
https://travisboat.jp/register.html

投票を知る
https://travisboat.jp/vote.html

勝ち筋を見る
https://travisboat.jp/#winning

やり方を見る
https://travisboat.jp/#how
```

## LINEリッチメニューに入れるなら

```text
登録の概要 → https://travisboat.jp/register.html
投票を知る → https://travisboat.jp/vote.html
勝ち筋を見る → https://travisboat.jp/#winning
俺に聞く / 勝ちに行く → https://lin.ee/YRAiTYb
```

## 注意

- `site` フォルダごとではなく、`site` の中身をアップロードしてください。
- `index.html` と `CNAME` がリポジトリ直下に必要です。
- 画像が表示されない場合は、画像ファイルが `index.html` と同じ階層にあるか確認してください。
- DNS反映には数分〜24時間ほどかかる場合があります。
