const userSchema = require("../Model/userDatabase")
const getAllUsers = async (req,res)=>{
    try {
        console.log('shahwem');
        const allUsers = await userSchema.find()
        console.log(allUsers);
        res.status(200).json(allUsers)  
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error",error_message: error.message})
    }
}

const getUserDetails = async (req,res)=>{
    try {
         const userId = req.params.userId
         const userDetails = await userSchema.findById(userId)

         if (!userDetails){
            return res.status(404).json({error:"User not found"})
         }
         res.status(200).json(userDetails)
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})
    }
}

const deleteUser = async (req,res)=>{
    try {
        const userId = req.params.userId;
        const deleteuser =  await userSchema.findByIdAndDelete(userId)
        if(!deleteuser){
            return res.status(404).json({error:"User not found"})
        }
        res.status(200).json({message:"User deleted succussfully"})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server error"})
    }
}

module.exports = {getAllUsers ,getUserDetails,deleteUser}