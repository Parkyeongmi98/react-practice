ex05: SASS/SCSS Module 번들링 하기

1. 설치 패키지
[ex05] $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. CSS Loader 설정(webpack.config.js)
  module: {
    rules: [{
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
  
3. 스크럽팅(package.json)
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }

4. 실행
[ex05] $ npm start