import { File } from '../models/file.Model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { upload } from '../middleware/multer.middleware.js';

const uploadedFiles = asyncHandler(async (req, res) => {
    console.log(req.files);
    if (!req.files || req.files.length === 0) {
        throw new ApiError(400, "No file uploaded");
    }

    const uploadedFileData = [];

    for (const file of req.files) {
        const filePath = file.path; // Get file path from multer
        console.log(filePath
        );  // Print file path
        const fileData = await uploadOnCloudinary(filePath); // Upload file to Cloudinary

        if (!fileData) {
            throw new ApiError(500, "Error in uploading file");
        }

        const newFile = new File({
            filename: file.originalname,
            contentType: file.mimetype,
            data: fileData.url, // Store Cloudinary URL instead of binary data
        });

        await newFile.save();
        uploadedFileData.push(newFile);
    }

    res.status(200).json(new ApiResponse(200, { files: uploadedFileData }));
});

export { upload, uploadedFiles };
