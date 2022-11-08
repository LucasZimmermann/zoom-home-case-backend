const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const axios = require("axios");

// Express
app.use(cors());

// React Web
app.use("/test", async (req, res) => {
  console.log('hellooo')
  res.status(200).end();
});

server.listen(3000, () => console.log("Server is running on port 3000"));
