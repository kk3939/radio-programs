# 全体仕様

## page
- index
  - サービス紹介
  - ログインページへ移動するボタン
- login
  - ログインするためのページ
  - buttonを中央に配置して、firebaseのログインポップアップが発動する
- user/[userId]
  - userのプロフィール画面、サーバーサイドレンダリングで表示される
  - 自分の聞いているラジオ番組一覧を表示する
  - ログインユーザーが自分のプロフィールを見ている時は編集IconとログアウトIconが表示される。
    - ログアウトIconをクリックするとログアウトして、編集Iconをクリックすると編集画面になる。
    - saveと元に戻るiconが編集中だと表示される。

## data構造
### firebase
- user
  - id(uuid)
  - name
  - photoUrl
  - radios[]
    - index
    - name

### state
- user
  - id(uuid)
  - name
  - photoUrl
  - radios[]
    - index
    - name
  - isEdit

## tech
### main
- Next(React)
- Typescript

### manage state
- redux

### style
- chakraUI

### Baas
- firebase

## tests
- unit test(jest)
  - component
  - function
  - firestore rule
- VR test(storybook)
- E2E test(cypress)
