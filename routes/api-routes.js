const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/test2", (req, res) => {
  console.log("api has been hit");
  res.send("<h1>hello from designer world</h1>");
});

module.exports = router;
