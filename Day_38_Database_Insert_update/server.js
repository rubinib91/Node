import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routeDatas from './Routes/routeDatas.js'
import connectDb from './config/db.js'


dotenv.config()
connectDb()

const mydb=express()

mydb.use(cors())

mydb.use(express.json())

mydb.use("/api/getdata",routeDatas)

const PORT= process.env.PORT || 3000

mydb.listen(PORT,()=>{

    console.log(`Server Connected Successfully http://localhost:${PORT}`)
})

// http://localhost:5000/api/getdata