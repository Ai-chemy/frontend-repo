// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/*', { // 사용할 엔드포인트
      target: 'https://d22hvcpp22yvs6.cloudfront.net/aichemy/', // 요청할 서버 주소
      changeOrigin: true, // 호스트가 헤더 변경 가능 옵션
    })
  );
  app.use(
    createProxyMiddleware('/api', { // 사용할 엔드포인트
      target: 'https://localhost:8000/', // 요청할 서버 주소
      changeOrigin: true, // 호스트가 헤더 변경 가능 옵션
    })
  );
};

//https://d22hvcpp22yvs6.cloudfront.net/aichemy/f747af6c-2cfa-11ee-8bda-7c5079404033.png
