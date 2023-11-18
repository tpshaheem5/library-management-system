require("dotenv").config()
const jwt =  require("jsonwebtoken")

const adminLogin = async (req,res)=>{
    try {
        const {username,password}=req.body
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            const token =  jwt.sign(username,process.env.SECRET_KEY)
            res.status(200).json({token})
        }else{
            res.status(401).json({error:'invalid username or password'})
        }
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
}
module.exports = adminLogin;