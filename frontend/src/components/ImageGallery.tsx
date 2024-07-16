import { useEffect, useState } from 'react';

function ImageGallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('http://localhost:5000/images');
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {images.map((image, index) => (
    <div key={index} className="flex justify-center items-center">
      <img 
        src={`http://localhost:5000/${image}`} 
        alt="Uploaded" 
        className="w-full h-auto object-cover rounded-lg gap-4" 
      />
    </div>
  ))}
</div>

  );
}

export default ImageGallery;
