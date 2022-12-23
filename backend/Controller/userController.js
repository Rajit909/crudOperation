const User = require("../model/userModel")

exports.home = (req,res)=>{
    res.send("hiiiiiii")
};
exports.createUser =async (req,res) => {
    try{
        const {name , email } = req.body;
        if(!name || !email){
            throw new Error("Name and email are required")
        }
        const userExits = await User.findOne({email})
        if(userExits){
            throw new Error("Email Already Exits")
        }
        
        //inserting into the database
        const user = await User.create({name, email})
        res.status(201).json({
            success:true,
            message:"User created successfully",
            User
        })
    }catch (error) {
        console.log(error);
    }
};


exports.getUsers = async (req, res)=>{
    try{
        const users = await User.find()
        res.status(200).json({
            success:true,
            users
        });
    }catch (error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
        
    }
}

exports.editUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            success:true,
            message:"User Updated successfully"
        });
    }
    catch (error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message
        })
    }
}


exports.deleteUser = async (req, res)=>{
    try{
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"User deleted successfully"
        });
    }
    catch (error){
        console.log(error);
        res.status(401).json({
            success:false,
            message: error.message
        })
    }
}
