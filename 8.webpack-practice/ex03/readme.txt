ex03: webpack 개발서버

1. 설치 패키지
[ex03] $ npm i -D webpack webpack-cli webpack-dev-server

2. 번들링 환경  devServer 설정(webpack.config.js)
  devServer: {
      host: '0.0.0.0',
      port: 9090,
      liveReload: true,
      compress: true,
      hot: false
  }
  
3. 스크럽팅(package.json)
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }

4. 실행
[ex03] $ npm start