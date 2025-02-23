import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Store files in public/temp
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep original filename
    }
});

export const upload = multer({ storage });
