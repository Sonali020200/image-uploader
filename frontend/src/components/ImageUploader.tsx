import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('File uploaded successfully', response.data);
        toast.success('Image uploaded successfully!'); // Show success toast
      } catch (error) {
        console.error('Error uploading file', error);
        toast.error('Error uploading image'); // Show error toast
      }
    }
  };

  return (
    <div className="container flex flex-col mt-10 items-center justify-center">
  
  <input type="file" onChange={handleImageChange} className="mb-4" />
  <button onClick={handleUpload} className="bg-blue-500 text-white py-2 px-4 rounded">
    Upload Image
  </button>
  <ToastContainer /> {/* Include the ToastContainer component */}
</div>

  );
}

export default ImageUploader;
