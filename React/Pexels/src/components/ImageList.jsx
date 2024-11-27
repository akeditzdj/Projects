import { useState, useEffect } from "react";

const ImageList = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Function to fetch images from the Pixabay API
  const fetchImages = (query) => {
    setLoading(true);
    const API_KEY = "47277500-33e37add2921b4c195cda531e";
    const perPage = 100;
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&page=${page}&per_page=${perPage}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.totalHits > 0) {
          setImages(data.hits);
          setTotalPages(Math.ceil(data.totalHits / perPage));
        } else {
          setImages([]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching images:", error);
      });
  };

  // useEffect to fetch images when the search term or page changes
  useEffect(() => {
    if (searchTerm) {
      fetchImages(searchTerm);
    }
  }, [searchTerm, page]); // Run the effect when searchTerm or page changes

  // Handle next page button click
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  // Handle previous page button click
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="container  shadow">
      <div className="image-header mt-4 px-3 d-md-flex justify-content-between align-items-center">
        <div>
          <h6 className="text-center text-md-start">
            Over 5.1 million+ high quality stock images, videos and music shared
            by our talented community.
          </h6>
        </div>
        <div className="bg-light p-2 rounded rounded-5 text-center">
          <button className="btn btn-lightrounded rounded-5 bg-white">
            Editor's Choice
          </button>
          <button className="btn rounded rounded-5">Latest</button>
          <button className="btn rounded rounded-5">Trending</button>
        </div>
      </div>
      <div className="image-results mt-4">
        {loading ? (
          <div class="spinner-border m-5" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : images.length > 0 ? (
          <div className="row img-container mb-5">
            {images.map((image) => (
              <div key={image.id}>
                <img
                  src={image.largeImageURL}
                  alt={image.tags || "Image"}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        ) : (
          <p>
            No images found for{" "}
            <span className="text-danger">"{searchTerm}"</span>
          </p>
        )}
      </div>

      {/* Pagination controls */}
      <div className="pagination-controls d-flex justify-content-center my-4">
        <button
          className="btn btn-primary"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="mx-3">
          Page {page} of {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageList;
