const http = require("http");
const fs = require("fs");
const path = require("path");

const requestListener = (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let home = fs.readFileSync(path.join(__dirname, "index.html"), "utf-8");
    home = home.replaceAll("{%pagename%}", "Home");
    res.write(home);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let about = fs.readFileSync(path.join(__dirname, "about.html"), "utf-8");
    about = about.replaceAll("{%pagename%}", "About");
    res.write(about);
    res.end();
  } else {
    res.writeHead(404);
    res.write("Error: 404");
    res.end();
  }
};

const port = 8000;
const hostname = "127.0.0.1";
const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}/`);
});
