const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Dashboard = require("../../models/Dashboard");
const User = require("../../models/User");

// router.get("/", (req, res) =>
//   res.json({
//     msg: "Dashboard Works"
//   })
// );

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Dashboard.findOne({ user: req.user.id })
      .then(dashboard => {
        if (!dashboard) {
          errors.noDashboard = "There is no dashboard for this user";
          return res.status(404).json(errors);
        }
        res.json(dashboard);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
