// src/StarRating.js

// The StarRating component takes the rating and renders stars
const StarRating = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 !== 0 ? 1 : 0; // Check if there's a half star
  const emptyStars = maxStars - fullStars - halfStars; // Remaining empty stars

  const renderStars = () => {
    const stars = [];
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full">
          ★
        </span>
      );
    }
    // Add half star if needed
    if (halfStars) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
