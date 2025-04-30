// src/app.ts
import express from 'express'

const app = express()

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

export default app
