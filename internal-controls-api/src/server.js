import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import testRoutes from './routes/testRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('🎣 AquaGen Internal Controls API is running');
});


app.use('/api/test', testRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
