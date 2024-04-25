const express = require("express");
const ShortUniqueId = require("short-unique-id");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const comments = [];

app.get("/comments/:postId", (req, res) => {
  res.json({ comments });
});

app.post("/comments/:postId", async (req, res) => {
  const { postId } = req.params;
  const { comment } = req.body;

  const uid = new ShortUniqueId({ length: 10 });
  const id = uid.rnd();

  comments.push({ id, comment, postId });

  await axios.post("http://localhost:6000/events", {
    type: "commentsCreated",
    data: { id, comment, postId },
  });
  res.json({ comments });
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.json(req.body.type);
});

app.listen(5001, () => {
  console.log("Comments service is running on port 5001...");
});
