
import express from 'express'
import { addData, getData } from '../Controllers/formControllers.js'



const route=express.Router()

route.post("/add",addData)
route.get("/get",getData)

export default route
// http://localhost:5000/api/hashed/add