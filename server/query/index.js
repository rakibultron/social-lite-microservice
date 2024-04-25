const express = require("express");
const ShortUniqueId = require("short-unique-id");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = [];

app.get("/posts", async (req, res) => {
  res.json({ posts });
});
app.post("/events", async (req, res) => {
  try {
    console.log(req.body);
    const { postId } = req.body.data;
    const event = req.body;
    if (event.type == "postCreated") {
      event.data.comments = [];
      posts.push(event.data);
    }
    if (event.type == "commentsCreated") {
      //   posts.map((item) => {
      //     console.log({ item });
      //   });
      for (var post of posts) {
        console.log({ post });
        if (post.id == postId) {
          post.comments.push(req.body.data);
        }
      }
    }

    res.json(event);
  } catch (error) {
    console.log({ error });
  }
});

app.listen(6001, () => {
  console.log("Query service is running on port 6001...");
});
