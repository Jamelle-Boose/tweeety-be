const express = require("express")
const router = express.Router()

router.use("/", require("./filteredstream"))

module.exports = router
