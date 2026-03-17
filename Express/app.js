
//External Modules
const express = require("express");
//Local Modules
const requestHandler = require("./user");
const app = express();

app.use((req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p>Welcome to Tarpan's Website</p>")
});
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
