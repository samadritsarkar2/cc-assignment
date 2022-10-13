const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = process.env.NAME || "Hello";
  const number = process.env.NUMBER || "World";
  res.send(`${name} ${number}`);
});

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
