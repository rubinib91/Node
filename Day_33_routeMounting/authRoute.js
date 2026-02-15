import express from 'express'
import { Createuser } from './Controllers/userControllers.js'


// API link for XXX Methods- http://localhost:5000/api/route/myroute/user

const route=express.Router()


route.post("/myroute/user",Createuser)

export default route