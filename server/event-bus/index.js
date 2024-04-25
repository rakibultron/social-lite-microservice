const express = require("express");
const ShortUniqueId = require("short-unique-id");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/events", async (req, res) => {
  try {
    console.log(req.body);
    const event = req.body;
    //   Posts
    await axios.post("http://localhost:5000/events", event);
    //   Comments
    await axios.post("http://localhost:5001/events", event);
    //   Query
    await axios.post("http://localhost:6001/events", event);

    res.json("Event triggerd");
  } catch (error) {
    console.log({ error });
  }
});

app.listen(6000, () => {
  console.log("Event-bus service is running on port 6000...");
});
