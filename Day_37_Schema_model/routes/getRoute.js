import express from 'express'
import {adddata, getdata} from '../controllers/pathController.js'

const route=express.Router()

route.post("/getdata",adddata)
route.get("/displaydata",getdata)


export default route

//http://localhost:5000/api/create/getdata
//http://localhost:5000/api/create/displaydata