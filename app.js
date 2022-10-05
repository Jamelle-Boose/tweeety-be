require("dotenv").config()
const express = require("express")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")

const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

const BASE_URL = process.env.BASE_URL

const app = express()

app.use(helmet())
app.use(cors({ origin: BASE_URL }))
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use("/", indexRouter)
app.use("/users", usersRouter)

module.exports = app
