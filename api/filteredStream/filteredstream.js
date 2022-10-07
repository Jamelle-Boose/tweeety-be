const express = require("express")
const { Client } = require("twitter-api-sdk")
const app = express()

app.get("/", async (req, res) => {
  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  }

  try {
    res.writeHead(200, headers)

    const client = new Client(process.env.BEARER_TOKEN)
    const tweets = client.tweets.searchStream()
    for await (const tweet of tweets) {
      // TODO #1 Add a string identifying the type of event described
      res.write(`data: ${JSON.stringify(tweet)}\n\n`)
    }
  } catch (e) {
    console.error(e)
  }
})

app.get("/rules", async (req, res) => {
  try {
    const client = new Client(process.env.BEARER_TOKEN)
    const getStreamRules = await client.tweets.getRules()
    res.status(200).json(getStreamRules)
  } catch (e) {
    console.error(e)
  }
})

app.post("/rules", async (req, res) => {
  try {
    const rule = req.body
    const client = new Client(process.env.BEARER_TOKEN)
    const addOrDelete = await client.tweets.addOrDeleteRules(rule)
    res.status(200).json(addOrDelete)
  } catch (e) {
    console.error(e)
  }
})

module.exports = app
