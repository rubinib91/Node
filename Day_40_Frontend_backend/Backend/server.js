import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/formRoutes.js'
import connDb from './dbConfig/db.js'

dotenv.config()
connDb()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/form", route)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server Connected Successfully ${PORT}`))