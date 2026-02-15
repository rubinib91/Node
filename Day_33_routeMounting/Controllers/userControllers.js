export const Createuser=(req,res)=>{
   //console.log(req.body)
const {name,place}=req.body
console.log("name:",name)
console.log("place:",place)
}
export default Createuser