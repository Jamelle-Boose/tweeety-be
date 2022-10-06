const express = require("express")
const app = express()

/* GET users listing. */
app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" })
})

module.exports = app
