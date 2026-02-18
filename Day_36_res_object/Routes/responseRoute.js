import express from 'express'
import { responseControl } from '../Controllers/responseController.js'

const route=express.Router()

route.post("/create",responseControl)

export default route

//http://localhost:/api/request/create
