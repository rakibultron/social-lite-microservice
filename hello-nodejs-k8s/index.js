const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("hello nodejs!");
});
app.listen(5000, () => {
  console.log("Posts service is running on port 5000...");
});
