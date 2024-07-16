import { Link } from 'react-router-dom';
import ImageUploader from '../components/ImageUploader';

function ImageUploaderPage() {
  return (
    <div className="container mx-auto p-4 ">
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
     
      <h1 className="text-2xl text-center mt-10 font-bold mb-4">Upload an Image</h1>
      <ImageUploader />
      </div>
   
  );
}

export default ImageUploaderPage;
