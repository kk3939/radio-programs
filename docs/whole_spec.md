# 全体仕様

## page
- index
  - サービス紹介
  - ログインページへ移動するボタン
- login
  - ログインするためのページ
- user/[userId]
  - userのプロフィール画面
  - 自分の聞いているラジオ番組一覧を表示する
- user/[userId]/edit
  - ログインユーザー（本人）のみ編集可能

## data構造
- user
  - uuid(ユーザー作成時に作成)
  - name
  - email(ユーザー作成時に作成)
  - password(ユーザー作成時に作成)
  - radios
    - `Array`
- radios
  - uuid
  - name
