
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const UserModel = require("../models/user.model")
// const UserModel = require("../models/user.model")


const registerUser = async(req,res)=>{
    const {name, email, password} = req.body
    try {
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(err){
                console.log(err);
            }
            else{
                let ExistingUser = await UserModel.findOne({email:email})
                if(ExistingUser){
                    res.status(404).send("User already exist!")
                }
                else{
                    const newUser = new UserModel({
                        name, email, password:hash,
                    })
                    await newUser.save()
                    res.status(201).send("Registration Successfull!")
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async(req,res)=>{
    let {email, password} = req.body
    try {
        let User = await UserModel.find({email: email})
        if(User.length>0){
            bcrypt.compare(password, User[0].password, (err, result)=>{
                if(result){
                    let token = jwt.sign({userId: User[0]._id}, process.env.key)
                    res.status(201).send({msg: "Login Successful", token: token, User: User})
                }else{
                    res.status(404).send({msg: " Wrong Password"})
                }
            })
        }else{
            res.status(404).send({msg: " User does not exists, Try Registering!!"})
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    registerUser,
    loginUser
}