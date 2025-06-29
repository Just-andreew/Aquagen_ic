import express from 'express'
import pgClient from '../config/pgClient.js'
import mongoClient from '../config/mongoClient.js'

const router = express.Router()

// Test PostgreSQL: create + read a user
router.get('/postgres', async (req, res) => {
  try {
    const newUser = await pgClient.user.create({
      data: {
        email: 'testuser@example.com',
        name: 'Test User',
        role: 'technician',
      },
    })

    const users = await pgClient.user.findMany()
    res.json({ created: newUser, allUsers: users })
  } catch (error) {
    console.error('Postgres error:', error)
    res.status(500).json({ error: error.message })
  }
})

// Test MongoDB: create + read a log
router.get('/mongo', async (req, res) => {
  try {
    const newLog = await mongoClient.log.create({
      data: {
        message: 'Test log entry',
        level: 'info',
      },
    })

    const logs = await mongoClient.log.findMany()
    res.json({ created: newLog, allLogs: logs })
  } catch (error) {
    console.error('Mongo error:', error)
    res.status(500).json({ error: error.message })
  }
})

export default router
