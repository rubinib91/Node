import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connDb from './dbConfig/db.js'
import route from './route/middlewareRoute.js'
dotenv.config()

connDb()
const app=express()

app.use(cors())

app.use(express.json())

app.use("/api/middleware",route)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connected SUccessfully http://localhost:${PORT}`)
})