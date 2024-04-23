const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Wojafrld!')
})

app.listen(port, () => {
  console.log(`Examplhe app listening on port ${port}`)
})