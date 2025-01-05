import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Seller } from "../models/seller.Model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'

//generateaccesandrefreshtoken
const generateaccesandrefreshtoken=async( sellerId)=>{
    try{
        const user=await User.findById(sellerId)
       const accessToken= user.generateAccessToken()
       const refreshToken= user.generateRefreshToken()

       //save refresh token in db
       user.refreshtoken=refreshToken;
       await user.save({validatebeforeSave:false})
         return {accessToken,refreshToken}

    }catch(error){
        throw new ApiError(500,"Something went wrong")
    }
}

const registerSeller = asyncHandler(async (req, res) => {
    console.log(req.body);
  const {fullname,email,password,phone,address}=req.body;
  
//check for empty
  if(
    [fullname,email, businessname,location,password,phone].some((field)=>field?.trim()==="")
  ){
    throw new ApiError(400,"All fields are required")
  }

  //check for existing user
  const existingSeller=await User.findOne({email});
    if(existingSellerr){
        console.log(existingSeller)
        throw new ApiError(409,"Seller already exists")
    }

   const seller= await Seller.create({
        fullname,
        email,
        businessname,
        location,
        password,
        phone,
        
    })

    console.log('Seller created:', seller);

    const createdSeller=await Seller.findById(seller._id).select("-password -refreshToken");
    if(!createdSeller){
        throw new ApiError(500,"Seller not created")
    }
    //response
    return res.status(201).json(
        new ApiResponse(201,"Seller created successfully",createdSeller
        ))
});

//login user
const loginSeller=asyncHandler(async(req,res)=>{
    //req.body --data
    //email,username
    //find user
    //check password
    //access token and refresh token
   //send cookies
    const {email,password}=req.body;
    if(!email && !password){
        throw new ApiError(400,"Email and Password are required")
    }
    const seller=await Seller.findOne({email});
    if(!seller){
        throw new ApiError(404,"Seller not found")
    }
    if(!(await seller.isPasswordCorrect(password))){
        throw new ApiError(401,"Invalid email or password")
    }
   const {accessToken,refreshToken}= await generateaccesandrefreshtoken(seller._id)

   const loggedInSeller=await Seller.findById(seller._id).select("-password -refreshToken")

   const options={
         httpOnly:true,
         secure:true
   }
   return res
   .status(200)
   .cookie("accessToken",accessToken,options)
   .cookie("refreshToken",refreshToken)
   .json(
    new ApiResponse(
        200,{
            seller:loggedInSeller,accessToken,refreshToken
        },
       " User loggen In"
    )
   )
})

//logout 
const logoutSeller=asyncHandler(async(req,res)=>{
    await Seller.findByIdAndUpdate(req.seller._id,
        {
            $set:{
                refreshToken:undefined,
            }
        },
        {
            new:true
        }
    )

    const options={
        httpOnly:true,
        secure:true
  }
  return res.status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(
    new ApiResponse(200,{},"seller logged out")
  )
})

const refreshAccessToken=asyncHandler(async(req,res)=>{
    const incomingRefreshToken=req.cookies.
    refreshToken || req.body.refreshToken

    if(incomingRefreshToken){
        throw new ApiError(401,"unauthorized access")
    }
    try {
    const decodedToken=jwt.verify(
        incomingRefreshToken,
        process.env.REFRESH_TOKEN_SECRET
        )
   const seller= await Seller.findById(decodedToken._id)
   if(!seller){
         throw new ApiError(401,"Invalid refresh token")
   }
   if(incomingRefreshToken!==seller?.refreshToken){
      throw new ApiError(401,"Refresh token is expired or used")
   }

   const options={
    httpOnly:true,
    secure:true
   }

  const {accessToken,newRefreshToken}= await generateaccesandrefreshtoken(seller._id)

  return res.status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",newRefreshToken)
    .json(
        new ApiResponse(
            200,{
                accessToken,refreshToken:newRefreshToken
            },
         " Access token refreshed"
        )
     )
    
   } catch (error) {
    throw new ApiError(401,error?.message|| "invalid refresh token")
   }
})

export { registerSeller,loginSeller,logoutSeller,refreshAccessToken };