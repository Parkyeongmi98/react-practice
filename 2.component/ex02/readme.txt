ex02: Component Styling

1) Inline Styling

2) Normal CSS
   -- css-loader option: {modules: false} -> webpack.config.js
   -- $ npm run debug src=02 css-modules=false

3) CSS Module I
   -- css-loader option: {modules: true}
   -- $ npm run debug src=03 css-modules=true

4) CSS Module II
   -- css-loader option: {modules: true}
   -- $ npm run debug src=04 css-modules=true

5) SASS & SCSS
   -- css-loader option: {modules: true}
   -- $ npm run debug src=05 css-modules=true

6) CSS in JS: Styled Component*, Less & Styleable
   -- $ npm i styled-components
   -- css-loader option: {modules: true}
   -- $ npm run debug src=06 css-modules=true

7) React Modal
   -- $npm i react-modal

8) Modal: Material UI

====================================================================================================================================================================================
1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
    2) react library
       $ npm i react react-dom prop-types styled-components

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅(package.json)
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04) css-modules=(true|false)
