const axios = require("axios");

async function createZoomMeeting(req, res, next) {
  try {
    const token = req.body.token;
    const result = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic: "Zoom calendar home test",
        type: 2,
        start_time: "2023-03-18T17:00:00",
        duration: 30,
        timezone: "Europe/Paris",
        password: "efounders!",
        agenda: "Let's talk about full stack development",
        settings: {
          host_video: true,
          participant_video: true,
          cn_meeting: false,
          in_meeting: true,
          join_before_host: false,
          mute_upon_entry: false,
          watermark: false,
          use_pmi: false,
          approval_type: 2,
          audio: "both",
          auto_recording: "local",
          enforce_login: false,
          registrants_email_notification: false,
          waiting_room: true,
          allow_multiple_devices: true,
        },
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "User-Agent": "Zoom-api-Jwt-Request",
          "content-type": "application/json",
        },
      }
    );
    res.status(200, "Success").send(result.data);
  } catch (error) {
    console.log({ message: error.message, data: error.response.data });
    next();
  }
}

module.exports = {
  createZoomMeeting,
};
