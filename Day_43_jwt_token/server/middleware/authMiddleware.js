import jwt from "jsonwebtoken";

const authMiddleware = (req,res,next)=>{

  const token = req.headers.authorization;

  if(!token){
    return res.json({msg:"Token Missing"});
  }

  try{

    const verifyToken = jwt.verify(token,process.env.JWT_SECRET);

    req.user = verifyToken;

    next();

  }catch(err){
    res.json({msg:"Invalid Token"});
  }
};

export default authMiddleware;
