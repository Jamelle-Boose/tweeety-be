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

module.exports = app
