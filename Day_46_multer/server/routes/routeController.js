import express from 'express'
import { getData,getImages, insertData,editData,updatedata,deletedata, imageAdding } from '../controller/crudController.js'

import upload from '../middleware/imageAdding.js'


const route = express.Router()

route.post("/insert",insertData)
route.get("/getdata",getData)
route.get("/editdata/:userid",editData)
route.put("/updatedata/:userid",updatedata)
route.delete("/deletedata/:userid",deletedata)
route.post("/uploaddata", upload.single("image"), imageAdding)
route.get("/getdataforimage",getImages)
export default route


// http://localhost:5000/api/crud/insert
// http://localhost:5000/api/crud/getdata
// http://localhost:5000/api/crud/editdata
// http://localhost:5000/api/crud/updatedata
// http://localhost:5000/api/crud/deletedata
// http://localhost:5000/api/crud/uploaddata
// http://localhost:5000/api/crud/getdataforimage