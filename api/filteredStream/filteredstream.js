const express = require("express")
const { Client } = require("twitter-api-sdk")
const app = express()

app.get("/", async (req, res) => {
  try {
    const client = new Client(process.env.BEARER_TOKEN)
    const tweets = client.tweets.searchStream()

    for await (const tweet of tweets) console.log(tweet?.data)
  } catch (e) {
    console.error(e)
  }
})

module.exports = app
