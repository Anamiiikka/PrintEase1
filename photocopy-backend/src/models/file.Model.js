import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: String, required: true }, // Change from Buffer to String
}, { timestamps: true });


const File = mongoose.model('File', fileSchema);

export { File };
