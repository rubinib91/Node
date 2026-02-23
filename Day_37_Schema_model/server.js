import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import getRoute from './routes/getRoute.js'
import connectdb from './controllers/config/db.js'


dotenv.config()

connectdb()

const app=express()

app.use(cors())

app.use(express.json())

app.use("/api/create",getRoute)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{

    console.log(`Server Connected Successfully http://localhost:${PORT}`)
})

//http://localhost:5000/api/create