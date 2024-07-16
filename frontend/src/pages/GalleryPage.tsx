import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  const [images, setImages] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        setImages(response.data);
      } catch (error) {
        setError('Error fetching images');
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <nav className='bg-gray-700 p-4'>
        <ul className="flex justify-center space-x-4">
        <li>
            <Link to="/" className="text-gray-100 hover:underline  hover:text-red-400">Home</Link>
          </li>
          <li>
            <Link to="/image-uploader" className="text-gray-100 hover:underline  hover:text-red-400">Image Uploader</Link>
          </li>
          <li>
            <Link to="/gallery" className="text-gray-100 hover:underline hover:text-red-400">Gallery</Link>
          </li>
        </ul>
      </nav>
     
      <h1 className="text-2xl text-center mt-10 font-bold mb-4">Gallery</h1>
      {error && <p>{error}</p>}
      {images.map((image: any, index: number) => (
        <img style={{width: "200px", height: "200px"}} key={index} src={`http://localhost:5000${image.filePath}`} alt={image.fileName} />
      ))}
    </div>
  );
};

export default GalleryPage;
