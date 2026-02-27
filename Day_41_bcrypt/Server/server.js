import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connDb from './dbConfig/db.js'
import route from './Routes/formRoutes.js'


dotenv.config()
connDb()

const passwordApp=express()

passwordApp.use(cors())

passwordApp.use(express.json())

passwordApp.use("/api/hashed",route)

const PORT=process.env.PORT || 3000

passwordApp.listen(PORT,()=>{
  console.log(`Server Connected Successfully ${PORT}`)

})