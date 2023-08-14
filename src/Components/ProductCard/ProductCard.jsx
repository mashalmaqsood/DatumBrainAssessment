import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star full-star">
          &#9733;
        </span>
      );
    }

    if (halfStar) {
      stars.push(
        <span key="half" className="star half-star">
          &#9733;
        </span>
      );
    }

    return stars;
  };

  return (
    <div
      className="product-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={product.image} alt={product.title} className="product-image" />
      {isHovered && (
        <button
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      )}
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <div className="product-rating">
        {renderStars(product.rating.rate)} 
      </div>
    </div>
  );
};

export default ProductCard;
