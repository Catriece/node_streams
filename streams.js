const fs = require("fs");
const http = require("http");
const path = require("path");

http
  .createServer((req, res) => {
    const { url, method } = req;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      const readStream = fs.createReadStream(
        path.join(__dirname, "./public/index.html")
      );
      readStream.pipe(res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      const readStream = fs.createReadStream(
        path.join(__dirname, "./public/notFound.html")
      );
      readStream.pipe(res);
    }
  })
  .listen(3002, () => {
    console.log("Listening on port http://localhost:3002...");
  });
