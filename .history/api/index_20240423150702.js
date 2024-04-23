import express  from 'express'
import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://admin:admin123@cluster0.f4estch.mongodb.net/Mernblog?retryWrites=true&w=majority&appName=Cluster0')


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Examplhe app listening on port ${port}`)
})