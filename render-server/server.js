import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
