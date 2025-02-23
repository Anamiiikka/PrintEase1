import multer from 'multer';
import fs from 'fs';
import path from 'path';

// Define upload directory path
const uploadDir = path.join(process.cwd(), 'public/temp');

// Ensure the directory exists before using it
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Export multer instance
export const upload = multer({ storage });
