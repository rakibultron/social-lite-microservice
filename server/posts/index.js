const express = require("express");
const ShortUniqueId = require("short-unique-id");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const posts = [];

app.get("/posts", (req, res) => {
  res.json({ posts });
});

app.post("/posts", async (req, res) => {
  try {
    const { title } = req.body;

    const uid = new ShortUniqueId({ length: 10 });
    const id = uid.rnd();
    console.log({ id });

    posts.push({ id, title });

    await axios.post(
      "http://localhost:6000/events",

      {
        type: "postCreated",
        data: { id, title },
      }
    );

    res.json({ posts });
  } catch (error) {
    console.log({ error });
    res.json({ error });
  }
});

app.post("/events", (req, res) => {
  console.log(req.body);
  res.json(req.body.type);
});

app.listen(5000, () => {
  console.log("Posts service is running on port 5000...");
});
