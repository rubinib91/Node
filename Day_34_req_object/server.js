import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import requestRoute from './routes/requestRoutes.js'

dotenv.config()

const app=express()

app.use(cors())

app.use(express.json())
app.use("/api/request",requestRoute)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Conncected Successfuly http://localhost:${PORT}`)
})

// http://localhost:/api/request