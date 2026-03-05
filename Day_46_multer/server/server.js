import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connDb from './dbConfig/db.js'
import route from './routes/routeController.js'

dotenv.config()

connDb()

const app = express()

app.use(cors())
app.use(express.json())


app.use("/uploads", express.static("uploads"))

app.use("/api/crud", route)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
   console.log(`Server Connected Successfully http://localhost:${PORT}`)
})
