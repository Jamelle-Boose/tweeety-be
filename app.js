require("dotenv").config()

const express = require("express")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

const app = express()

app.use(helmet())
app.use(cors({ origin: process.env.ORIGIN }))
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/api", require("./api"))

app.get("/", (_, res) => res.sendStatus(200))

module.exports = app
