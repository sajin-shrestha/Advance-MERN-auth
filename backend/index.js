import express from 'express'
import { connectDB } from './database/connectDB.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(3000, () => {
  connectDB()
  console.log('Server is running on http://localhost:3000')
})
