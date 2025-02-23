import multer from 'multer';
import { File } from '../models/file.Model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

// Multer configuration to store files temporarily in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadedFiles=asyncHandler(async(req,res)=>{
    const files=req.files?.filename[0]?.path;
    console.log(files)
    if(!files){
        throw new ApiError(400,"No file uploaded")
    }
    const fileData = await uploadOnCloudinary(files);
    if(!fileData){
        throw new ApiError(500,"Error in uploading file")
    }
    const file = new File({
        filename: fileData.original_filename,
        contentType: fileData.format,
        data: fileData.url,
    });
    await file.save();
    return new ApiResponse(200, { file: fileData });


})
export { upload, uploadedFiles };