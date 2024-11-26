import { useState, useEffect } from "react";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
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

  // useEffect to fetch images when the component mounts or searchTerm or page changes
  useEffect(() => {
    if (searchTerm) {
      fetchImages(searchTerm);
    }
  }, [searchTerm, page]);

  // Handle the search input change with debouncing
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(setTimeout(() => fetchImages(event.target.value), 500));
  };

  // Handle the form submission (searching)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setPage(1); // Reset to first page when a new search is made
    fetchImages(searchTerm);
  };

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
    <div className="container">
      <div className="img-header d-flex justify-content-between align-items-center mt-4 border-bottom">
        <div className="my-3">
          <h5>
            Over 5.1 million+ high-quality stock images, videos, and music
            shared by our talented community.
          </h5>
        </div>
        <div>
          <form onSubmit={handleSearchSubmit}>
            <input
              className="form-control"
              type="search"
              name="Search"
              placeholder="Search Images"
              value={searchTerm}
              onChange={handleSearchChange}
              disabled={loading} // Disable the input while loading
            />
          </form>
        </div>
      </div>

      <div className="image-results mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : images.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 img-container mb-5">
            {images.map((image) => (
              <div className="col" key={image.id}>
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
      <div className="pagination-controls d-flex justify-content-center mt-4">
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
