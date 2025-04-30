// src/app.ts
import express from 'express'
import roomRouter from './modules/management/room/room.route'

const app = express()

app.use(express.json())

app.use('/api/rooms', roomRouter)

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

export default app
