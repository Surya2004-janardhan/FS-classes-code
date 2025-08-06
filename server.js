const express = require("express");

const axios = require("axios");

const app = express();
// app == server
const port = 5000;

app.use(express.json());

// server -- POST GET PUT DELETE
// req.body = userdata;
app.post("/verify-user", async (req, res) => {
  console.log(req.body);
  const data = req.body;

  console.log(data);

  //   const { name, password } = userdata;

  res.status(200).json({ message: "valid user", userdata: data.userdata });
});

app.listen(port, () => {
  console.log("server running on port 5000");
});

// commit test