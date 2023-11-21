require("dotenv").config()
const jwt =  require("jsonwebtoken")

const adminLogin = async (req,res)=>{
    try {
        const {email,password}=req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token =  jwt.sign(email,process.env.SECRET_KEY)
            res.status(200).json({token})
        }else{
            res.status(401).json({error:'invalid username or password'})
        }
    } catch (error) {
        res.status(500).json({error:"Internal Server error",err:error.message})
    }
}
module.exports = adminLogin;