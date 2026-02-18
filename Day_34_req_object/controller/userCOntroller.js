export const getData=(req)=>{

    console.log(req.body)

}
export const getdatabynumber=(req)=>{
    console.log(req.params)
}
export const getDataBYQuery=(req)=>{
    console.log(req.query)
}
export const getDataByHeader=(req)=>{
    console.log(req.headers.jwttoken)
}