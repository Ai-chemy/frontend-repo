const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/aichemy/*", {
      target: "https://d22hvcpp22yvs6.cloudfront.net",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:8000/",
      changeOrigin: true,
    })
  );
};
