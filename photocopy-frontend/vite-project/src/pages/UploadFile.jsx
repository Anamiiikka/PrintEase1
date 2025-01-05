import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import photoIcon from '../assets/photo.jpg'; // Adjust the path based on your folder structure


const App = () => {
  const navigate = useNavigate();
  const handleHomeLogin = () => {
    navigate("/");
  };
  const handleBuyerDashboard = () => {
    navigate("/buyer-dashboard");
  };
  
  const [files, setFiles] = useState([]);
  const [totalFileSize, setTotalFileSize] = useState(0); // Track total file size
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fileType: "",
  });

  const fileInputRef = useRef(null);
  const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB in bytes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const allowedFileType = formData.fileType;

    let newFiles = [];
    let newSize = totalFileSize;

    selectedFiles.forEach((file) => {
      if (!allowedFileType || file.type.includes(allowedFileType)) {
        if (newSize + file.size <= MAX_FILE_SIZE) {
          newFiles.push(file);
          newSize += file.size;
        } else {
          alert(`Adding ${file.name} exceeds the total file size limit of 25 MB.`);
        }
      } else {
        alert(`${file.name} does not match the selected file type: ${allowedFileType}`);
      }
    });

    setFiles([...files, ...newFiles]);
    setTotalFileSize(newSize);
  };

  const handleDeleteFile = (index) => {
    const fileToRemove = files[index];
    const updatedFiles = files.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setTotalFileSize(totalFileSize - fileToRemove.size);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Uploaded Files:", files);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", fileType: "" });
    setFiles([]);
    setTotalFileSize(0);
  };

  const handleUploadBoxClick = () => {
    if (!formData.fileType) {
      alert("Please select a file type before uploading.");
      return;
    }
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#d5dee7] via-[#ffafbd] to-[#c9ffbf] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center mb-6">
            <img src="picture.jpg" alt="icon" className="w-10 h-10 mr-4" />
            <h1 className="text-xl font-bold text-gray-700">Send us your Files!</h1>
          </div>

          {/* File Type Selection */}
          <div className="mb-4">
            <label htmlFor="fileType" className="block text-gray-700 font-medium mb-2">
              Select File Type
            </label>
            <select
              id="fileType"
              name="fileType"
              value={formData.fileType}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              required
            >
              <option value="">-- Select File Type --</option>
              <option value="image">Images (JPG, PNG)</option>
              <option value="pdf">PDF Files</option>
              <option value="word">Word Files (DOCX)</option>
            </select>
          </div>

          {/* File Upload Section */}
          <div>
            <label htmlFor="file-upload" className="block text-left text-gray-700 font-medium mb-2">
              Upload your files here
            </label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
              onClick={handleUploadBoxClick}
            >
              <input
                type="file"
                id="file-upload"
                ref={fileInputRef}
                className="hidden"
                multiple
                onChange={handleFileChange}
              />
              <p className="text-gray-500">Upload photos or files</p>
              <p className="text-gray-400">Drag and drop files here</p>
            </div>
          </div>

          {/* File List */}
          {files.length > 0 && (
            <div className="mt-4">
              <p className="text-gray-700 font-medium">Total File Size: {(totalFileSize / 1024 / 1024).toFixed(2)} MB</p>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg p-3 mt-2"
                >
                  <span className="text-gray-700 text-sm">
                    {file.name} ({(file.size / 1024).toFixed(2)} KB)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteFile(index)}
                    className="text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </form>

        {/* Features Section */}
        <div className="mt-8">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <span className="text-3xl">🛡️</span>
              <h3 className="font-bold text-gray-700 mt-2">Safe & Secure</h3>
              <p className="text-gray-500">Data will be auto-deleted after delivery</p>
            </div>
            <div className="text-center">
              <span className="text-3xl">⚡</span>
              <h3 className="font-bold text-gray-700 mt-2">Fast Delivery</h3>
              <p className="text-gray-500">Get printout in minutes</p>
            </div>
            <div className="text-center">
              <span className="text-3xl">💰</span>
              <h3 className="font-bold text-gray-700 mt-2">Lowest Prices</h3>
              <p className="text-gray-500">Printout starting at ₹10</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-4">Frequently Asked Questions</h2>
          <details className="mb-2">
            <summary className="font-bold">1. What file formats can I print?</summary>
            <p className="ml-4 text-gray-600">JPG, JPEG, PNG, PDF, DOCX and many more.</p>
          </details>
          <details className="mb-2">
            <summary className="font-bold">2. What printing options can I choose from?</summary>
            <p className="ml-4 text-gray-600">Black & White, Colour, Portrait, Landscape, Paper size A4 only.</p>
          </details>
          <details className="mb-2">
            <summary className="font-bold">3. How do I upload my documents?</summary>
            <p className="ml-4 text-gray-600">Upload through Blinkit app or web interface. Files are auto-deleted post delivery.</p>
          </details>
          <details className="mb-2">
            <summary className="font-bold">4. How secure is my data?</summary>
            <p className="ml-4 text-gray-600">Your data is safely stored and auto-deleted post delivery.</p>
          </details>
        </div>

        {/* Footer Section */}
        <footer className="mt-8 flex justify-around text-blue-600">
          <button onClick={handleHomeLogin}>🏠 Home</button>
          <button onClick={handleBuyerDashboard}>🛒 Order Again</button>
          <button>📂 Categories</button>
          <button>🖨️ Print</button>
        </footer>
      </div>
    </div>
  );
};

export default UploadFile;
