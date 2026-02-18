import express from 'express'
import { getData, getDataByHeader, getdatabynumber, getDataBYQuery } from '../controller/userCOntroller.js'

const requestRoute= express.Router()

    requestRoute.post("/createdata",getData)
        requestRoute.get("/getdatabynumber/:id",getdatabynumber)
        requestRoute.get("/getdatabyquery",getDataBYQuery)
                requestRoute.get("/getdatabyheaders",getDataByHeader)


    export default requestRoute
    // http://localhost:5000/api/request/createdata
        // http://localhost:5000/api/request/getdatabynumber/1000
                // http://localhost:5000/api/request/getdatabyquery
                                // http://localhost:5000/api/request/getdatabyheaders