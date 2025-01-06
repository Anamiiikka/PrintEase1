import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  data: { type: Buffer, required: true }, // Store the binary data here
}, { timestamps: true });

const File = mongoose.model('File', fileSchema);

export { File };
