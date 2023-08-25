const express = require('express');
const router = express.Router();
const MailRoute = require("./Routes/mail");
const axios = require("axios");



router.get("/", (req, res) => {
    res.send("Hello World");
});

router.post("/mail", MailRoute.sendMail);

router.use("*", (req, res) => {
    res.status(404).json({
      success: "false",
      message: "Page not found",
      error: {
        statusCode: 404,
        message: "It nah work bucko"
      },
    });
  });


module.exports = router;