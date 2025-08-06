const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send({ message: "Hello API!" });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});
