ex05: Component - LifeCycle

01. Class Component
   01) LifeCycle I : Mount
      - 1. constructor
      - 2. getDerivedStateFromProps
      - 3. render ***
      - 4. componentDidMount ***

   02) LifeCycle II : update
      - 1. getDerivedStateFromProps
      - 2. shouldComponentUpdate *
      - 3. render ***
      - 4. getSnapshotBeforeUpdate
      - 5. componentDidUpdate ***

   03) LifeCycle III : Unmount
      - componentWillUnmount ***
   
02. Functional Component : Alternative(대체) - useEffect
   - getDerivedStateFromProps 대체
   - After Rendering(componentDidMount, componentDidUpdate) 대체
   - 바뀐 상태에 의존적으로 코드 실행 가능
   - componentWillUnmount 대체

====================================================================================================================================================================================
1. 설치
    1) 개발툴
       $ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
       ** case-sensitive-paths-webpack-plugin : window환경은 import해오는 파일이름 대소문자 구분을 안해서 오류가 생길 수 있음! 설치해줘야 구분 **
    2) react library
       $ npm i react react-dom prop-types styled-components react-addons-update

2. webpack.config.js 설정
3. babel.config.json 설정
4. npm 스크립팅(package.json)
5. 테스트 서버 실행
   $ npm run debug src=(01|02|03|04)
