const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT||5005;
app.get('/', (req, res) => {
  res.send('Hello World!123')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})