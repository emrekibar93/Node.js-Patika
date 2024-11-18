const http = require('http');


const server = http.createServer((req,res)=>{

    const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>INDEX SAYFASINA HOS GELDINIZ</h1>");
  } else if (url === "/hakkinda") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>HAKKIMDA SAYFASINA HOS GELDINIZ</h1>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ILETISIM SAYFASINA HOS GELDINIZ</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();

});

server.listen(3000,()=>{

    console.log('Sunucu 5000 portunda');

});