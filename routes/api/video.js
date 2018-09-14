const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const videos = [
    {
      videoId: "Ke90Tje7VS0",
      opts: {
        width: "560",
        height: "315",
        playerVars: {
          autoplay: 0
        }
      }
    },
    {
      videoId: "93p3LxR9xfM",
      opts: {
        width: "560",
        height: "315",
        playerVars: {
          autoplay: 0
        }
      }
    }
  ];
  res.json(videos);
});
module.exports = router;
