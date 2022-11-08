const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

const auth = require("./middlewares/auth");
const zoomController = require("./controllers/zoom.js");

const PORT = 8080

app.use(cors());

app.use("/health_check", async (req, res) => {
  res.status(200).end("ok");
});

const zoomRouter = express.Router();
zoomRouter.post(
  "/create_meeting",
  express.json(),
  auth.addToken,
  zoomController.createZoomMeeting
);
app.use("/zoom", zoomRouter);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
