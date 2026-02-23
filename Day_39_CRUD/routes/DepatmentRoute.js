import express from 'express'
import { deletebyid, getdbdata, getdbdatabyid, insertdata, updatedatabyid } from '../Controller/departmentController.js'

const route=express.Router()

route.post("/departmentroute",insertdata)
route.get("/getdata",getdbdata)
route.get("/getdatabyid/:userid",getdbdatabyid)
route.put("/updatedatabyid/:userid",updatedatabyid)
route.delete("/deletebyid/:userid",deletebyid)




export default route

//http://localhost:5000/api/createdp/departmentroute
//http://localhost:5000/api/createdp/getdata
//http://localhost:5000/api/createdp/getdatabyid/:userid
//http://localhost:5000/api/createdp/updatedatabyid/:userid
//http://localhost:5000/api/createdp/deletebyid/:userid