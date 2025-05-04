// src/app.ts
import express from 'express'
import roomRouter from './modules/management/room/room.route'
import userRouter from './modules/management/user/user.route'
import buildingRouter from './modules/master/building/building.route'
import bookingStatusRouter from './modules/master/bookingstatus/bookingstatus.route'
import departmentRouter from './modules/master/department/department.route'
import empStatusRouter from './modules/master/empstatus/empstatus.route'
import positionRouter from './modules/master/position/position.route'
import roomStatusRouter from './modules/master/roomstatus/roomstatus.route'

const app = express()

app.use(express.json())

app.use('/api/rooms', roomRouter)
app.use('/api/users', userRouter)

app.use('/api/buildings', buildingRouter)
app.use('/api/booking-status', bookingStatusRouter)
app.use('/api/departments', departmentRouter)
app.use('/api/emp-status', empStatusRouter)
app.use('/api/positions', positionRouter)
app.use('/api/room-status', roomStatusRouter)

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

export default app
