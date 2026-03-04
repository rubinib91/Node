
import express from 'express'
import { addData, getData } from "../controller/formController.js"


const route=express.Router()

route.post("/createdata",addData)
route.get("/getdata",getData)
route.post("login",loginData)

export default route


// http://localhost:5000/api/forms/createdata