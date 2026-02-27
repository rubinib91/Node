import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connDb from './Dbconfig/db.js'
import route from './routeController/route.js'

dotenv.config()
connDb()

const app=express()

app.use(cors())

app.use(express.json())
app.use("/api/forms",route)

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully ${PORT}`);
    
})

// http://localhost:/api/forms