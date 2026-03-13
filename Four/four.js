const { log } = require('console');
const http= require('http');
const server=http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);

  if(req.url==='/'){
      res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Welcome to home</title></head>');
  res.write('<body><h1>HOME</h1></body>');
  res.write('</html>');
  return res.end();
  }else if(req.url==='/products'){

    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Products</title></head>');
  res.write('<body><h1>PRODUCTS</h1></body>');
  res.write('</html>');
  return res.end();
  }      res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>BAHAR ho bhai</title></head>');
  res.write('<body><h1>LETS goooooooo</h1></body>');
  res.write('</html>');
  return res.end();

});

const PORT=3000;
server.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`)
})