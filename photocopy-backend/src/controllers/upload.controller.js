import multer from 'multer';
import { File } from '../models/file.Model.js';

// Multer configuration to store files temporarily in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// File upload function
const uploadFiles = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files uploaded');
  }

  try {
    // Iterate through each file and save it to MongoDB
    const savedFiles = await Promise.all(
      req.files.map(async (file) => {
        const newFile = new File({
          filename: file.originalname,
          contentType: file.mimetype,
          data: file.buffer, // Store binary data in MongoDB
        });

        await newFile.save(); // Save each file to database
        return newFile;
      })
    );

    res.status(200).send({
      files: savedFiles.map((file) => ({
        fileId: file._id,
        filename: file.filename,
      })),
    });

    // Simulate sending the file to the seller (can be implemented as per business logic)
    await sendFilesToSeller(savedFiles);

    // After processing the files, delete them from MongoDB
    await deleteFiles(savedFiles);

  } catch (error) {
    console.error('Error uploading files:', error);
    res.status(500).send('Error uploading files');
  }
};

// Simulate sending the files to the seller (this is a placeholder)
const sendFilesToSeller = async (files) => {
  files.forEach((file) => {
    console.log(`Sending file with ID: ${file._id} to the seller for printout...`);
    // Logic to send the file to the seller (e.g., email, notification, etc.)
  });
};

// Delete the files from MongoDB after printout completion and
//const deleteFiles = async (files) => {
//  try {
//    await Promise.all(
//      files.map((file) => File.findByIdAndDelete(file._id))
//    );
//    console.log(`Deleted ${files.length} files from MongoDB.`);
//  } catch (error) {
//    console.error('Error deleting files from MongoDB:', error);
//  }
//};

// Endpoint to upload files
const uploadFilesRoute = (req, res) => {
  // Use multer's array method to handle multiple files
  upload.array('files', 10)(req, res, (err) => {
    if (err) {
      return res.status(500).send('Error uploading file');
    }
    uploadFiles(req, res);
  });
};

export { uploadFilesRoute };
