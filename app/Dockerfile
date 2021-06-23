FROM node:12

# アプリケーションディレクトリを作成する
WORKDIR /app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package.json package-lock.json /app/

RUN npm install

# アプリケーションのソースをバンドルする
COPY . .

# EXPOSE 8080
# CMD [ "node", "app.js" ]