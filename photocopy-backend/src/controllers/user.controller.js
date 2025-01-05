import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    console.log(req.body);
  const {fullname,email,password,address,phone}=req.body;
  
//check for empty
  if(
    [fullname,email,password,address,phone].some((field)=>field?.trim()==="")
  ){
    throw new ApiError(400,"All fields are required")
  }

  //check for existing user
  const existingUser=await User.findOne({email});
    if(existingUser){
        console.log(existingUser)
        throw new ApiError(409,"User already exists")
    }

   const user= await User.create({
        fullname,
        email,
        password,
        address,
        phone
    })

    console.log('User created:', user);

    const createdUser=await User.findById(user._id).select("-password")
    if(!createdUser){
        throw new ApiError(500,"User not created")
    }
    //response
    return res.status(201).json(
        new ApiResponse(201,"User created successfully",createdUser
        ))
});

export { registerUser, };