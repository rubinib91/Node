
import express from 'express'
import { addData, getData } from "../controller/formController.js"


const route=express.Router()

route.post("/createdata",addData)
route.get("/getdata",getData)


export default route


// http://localhost:/api/forms/createdata