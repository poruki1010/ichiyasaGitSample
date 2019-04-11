# Gti学習メモ
## Gitコマンド

### 共通
- ローカルリポジトリの状態を確認する。コミット前の変更があるか、add前の変更があるか、新規追加有無など
 - git status

### ステージング操作
- ワークツリーの内容をステージングに反映する
 - git add [ディレクトリ名/ファイル名] 
- ワークツリーとステージングの差異を確認する。
 - git diff [ディレクトリ名/ファイル名]
- git addの取り消し。 
 - git reset [ディレクトリ名/ファイル名]

### ローカルリポジトリ操作
- ローカルリポジトリを作る
 - git init
- ステージングとローカルリポジトリの差異を確認する。
 - git diff --cached
- ステージング内容をローカルリポジトリに反映
 - git commit
 - git commit -m "[メッセージ]"&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;…コミットメッセージが１行で良い場合
- コミットログ
 - git log 
- コミットメッセージ修正(直近のcommitに対して)
 - git commit --amend
 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;…-mオプション使用可能
- コミットメッセージ修正(もっと前のcommitに対して)
 1. git rebase -i A~[訂正したいコミットが、戦闘から何個目か] 
   - 上記コマンド実行後、コミット一覧的なものが開く。訂正したいコメントについて、pick -> edit に変更
 1. git commit --amendでコメント修正 
 1. git rebase --continue 


## Git以外の情報
### ターミナルコマンド
- 標準出力内容や、指定したファイル内容をクリップボードにコピー
 - pbcopy [< "ファイル名" ]
  - ファイル名なしだと、その後入力した内容がコピーされる（入力終了はcontrol+d）