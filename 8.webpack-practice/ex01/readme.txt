ex01: JS 모듈만 번들링하기

1. 설치 패키지
[ex01] $ npm i -D webpack webpack-cli express

2. 스크럽팅(package.json)
  "scripts": {
    "start": "node dev-server",
    "build": "npx webpack ./src/index.js -o ./public"
  }

3. 빌드
[ex01] $ npm run build

4. 실행
[ex01] $ npm start