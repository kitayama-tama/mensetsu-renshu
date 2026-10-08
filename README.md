# スマホで模擬面接｜就活の木

全国の大学生向けの面接練習ツールです。

AIアプリ（ChatGPT・Gemini・Claude）の音声モードを面接官にして、24時間いつでも声で面接練習ができるツールです。
サイト内でAIは動かさず、学生が普段使っているAIアプリに「セッティング文言」を渡す方式のため、費用はかかりません。

## ファイル構成

- index.html … ツール本体
- manifest.json … ホーム画面に追加したときの名前・色・アイコン
- sw.js … オフライン表示と更新のためのサービスワーカー
- icon-192.png / icon-512.png / icon-maskable-512.png / apple-touch-icon.png / favicon-32.png / icon.svg … アイコン一式（フォルダに入れず、index.htmlと同じ階層に置きます）

## 公開手順（GitHub Pages）

1. GitHubで新しいリポジトリを作る（例：mensetsu-renshu、Public）
2. このフォルダの中身をすべてアップロードする
3. Settings → Pages → Branch を main / (root) にして Save
4. 数分後に https://kitayama-tama.github.io/mensetsu-renshu/ で公開される

## 更新するとき

index.html を直したら、sw.js の先頭の VERSION を 'v2' → 'v3' のように上げてからアップロードしてください。

## 学生への案内

- iPhone：Safariで開く → 共有ボタン → 「ホーム画面に追加」
- Android：Chromeで開く → 右上のメニュー → 「ホーム画面に追加」（または「アプリをインストール」）

入力内容はその端末のブラウザにだけ保存され、外部には送信されません。
