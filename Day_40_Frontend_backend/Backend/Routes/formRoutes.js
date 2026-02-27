import express from 'express'
import { addData } from '../Controllers/formControllers.js'

const route = express.Router()

route.post("/addformdata", addData)

export default route