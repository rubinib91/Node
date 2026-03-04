import express from 'express'
import { addData,getData,editData,updateData,deleteData } from '../controller/crudController.js'

const route = express.Router()

route.post("/insert", addData)          
route.get("/get", getData)              
route.get("/edit/:userid", editData)    
route.put("/update/:userid", updateData) 
route.delete("/:userid", deleteData) 

export default route
