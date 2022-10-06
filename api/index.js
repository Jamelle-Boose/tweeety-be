const express = require("express")
const router = express.Router()

router.use("/users", require("./users"))
router.use("/filteredstream", require("./filteredStream"))

module.exports = router
