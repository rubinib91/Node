import express from 'express'
import { createData, logindata } from '../controller/middlewareController.js'
import { validateLogin, validateRegister } from '../middleware/validateUser.js'

const route = express.Router()

route.post("/create", validateRegister, createData)
route.post("/login", validateLogin, logindata)

export default route
