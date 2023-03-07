ex06: Image Module 번들링 하기

1. 설치 패키지
[ex06] $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. Image Loader 설정(webpack.config.js)
  module: {
    rules: [{
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
        test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,  -> image 설정 추가
        type: 'asset/resource'
      }]
  }
  
3. 스크립팅(package.json)
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
  }

4. 실행
[ex06] $ npm start