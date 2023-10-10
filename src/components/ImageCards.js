import React, { useEffect, useState } from "react";

const ImageCards = () => {
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=" + page + "&limit=8"
      );
      const data = await response.json();
      setImageList((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    loadImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
      {imageList.map((image, index) => (
        <div key={index} className="flex flex-col">
          <div className="relative flex-grow overflow-hidden">
            <img
              src={image.download_url}
              alt="img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2 text-center bg-white">
            <p className="text-lg font-semibold">{image.author}</p>
          </div>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default ImageCards;
