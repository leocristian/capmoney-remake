const express = require("express")

const app = express()
const investorRouter = require("./routes/investor")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(investorRouter)

module.exports = app