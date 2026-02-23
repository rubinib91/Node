import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/DepatmentRoute.js'
import conndb from './dbConfig/dbData.js'
dotenv.config()

conndb()

const myDepartment=express()
myDepartment.use(cors())
myDepartment.use(express.json())

myDepartment.use("/api/createdp",route)

const PORT=process.env.PORT || 3000

myDepartment.listen(PORT,()=>{
    console.log(`Server Connected Successfully ${PORT}`)
})