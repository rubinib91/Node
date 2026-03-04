import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connDb from './config/dbConfig.js'
import route from './routes/routeController.js'



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