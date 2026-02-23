import express from 'express'
import { userController } from '../Controllers/userController.js'




    const route=express.Router()


    route.post("/create",userController)


export default route

// http://localhost:5000/api/getdata/create
// http://localhost:5000/api/getdata/savedb