import mongoose,{Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const UserSchema=new Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        
    },
    address: { 
        type: String,
        required:true, 
    },
    phone: { 
        type: String,
        required:true, 
    },
    refreshtoken:{
        type:String,
        
    },
    
},{
    timestamps:true
})
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password= await bcrypt.hash(this.password, 10)
    next();
})
UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}
//jwt
UserSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        fullname:this.fullname,
        email:this.email,
        address:this.address,
        phone:this.phone

       
       
    },
    process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

UserSchema.methods.generateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}
export const User=new mongoose.model("User",UserSchema)