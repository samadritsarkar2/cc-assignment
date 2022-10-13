const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "Hello";
  const number = process.env.NUMBER || "World";
  res.send(`${name} ${number}`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
