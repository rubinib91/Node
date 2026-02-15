import express from 'express'
import dotenv from 'dotenv'
import authroutes from './authRoute.js'
import cors from 'cors'

const app=express()

dotenv.config()
const PORT_NUMBER=process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use("/api/route",authroutes)

app.listen(PORT_NUMBER,()=>{
    console.log(`Server conncected successfuly http://localhost:${PORT_NUMBER}`)
})
// API link for XXX Methods- http://localhost:5000/api/route