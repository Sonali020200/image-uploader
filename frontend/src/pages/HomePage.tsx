import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container text-center mx-auto p-4">
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
      <div className="flex justify-center items-center min-h-screen">
  <h1 className="text-4xl font-bold text-center">Welcome to Image Uploader!</h1>
</div>
      
    </div>
  );
}

export default HomePage;
