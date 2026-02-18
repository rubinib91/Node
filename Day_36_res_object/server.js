import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import responseRoute from './Routes/responseRoute.js'

dotenv.config()

const app=express()

app.use(cors())

app.use(express.json())
app.use("/api/request",responseRoute)
const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`)
})

//http://localhost:5000/api/request

