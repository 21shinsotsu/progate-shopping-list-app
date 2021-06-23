# 買い物リストアプリ
買い物リストの追加、編集、削除ができるwebアプリ。   
データベースにMySQLを使用。

### アプリの起動準備
#### 1. MySQLのインストール
`mysql --version`　で確認。`command not found : mysql`なら以下を実施。  
※ M1 Macでは以下のバージョンのmysqlがインストールできなかった（ただの報告）
```
$ brew install mysql@5.7
$ mysql --version
```

#### 2. パスの設定
```
$ echo 'export PATH="/usr/local/opt/mysql@5.7/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
$ mysql --version
```

#### 3. パスワードの設定
```
$ brew services start mysql@5.7
$ mysql_secure_installation
   # VALIDATE PASSWORD PLUGIN は　Enterで抜ける
   # New password を入力
   # その他はEnterで抜ける
```

#### 4. MySQLにログイン
```
$ brew services start mysql@5.7
$ mysql --user=root --password
```

#### 5. データベースとテーブルの作成
```
# mysql内で
CREATE DATABASE list_app;
SHOW databases;
USE list_app;
SHOW tables;
CREATE TABLE items (id INT AUTO_INCREMENT, name TEXT, PRIMARY KEY (id));
SHOW tables;
```

### アプリの起動
mysqlとの接続情報を`app.js`の以下の部分に記載
```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       # mysqlのユーザー名
  password: 'root',   # mysqlのパスワード
  database: 'list_app'
});
```
ターミナルで
```
$ npm install
$ node app.js
```
`localhost:3000` にアクセス

### MySQLの終了
```
mysql> exit;
$ brew services stop mysql@5.7 
```

## 完成品
localhost:3000/
![/](doc/top.ejs.png)
localhost:3000/index
![/index](doc/index.ejs.png)
localhost:3000/new
![/new](doc/new.ejs.png)
localhost:3000/edit
![/edit](doc/edit.ejs.png)