import React, { useEffect, useState } from "react";
import "./productListing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartItem } from "../../types";

interface ProductListingProps {
  fetchProducts: () => void;
  products: any[];
  loading: boolean;
  error: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  decrementQuantity: (itemId: string) => void;
  cartItems: CartItem[];
  selectedColor: string;
}

const ProductListing: React.FC<ProductListingProps> = ({
  fetchProducts,
  products,
  loading,
  error,
  addToCart,
  removeFromCart,
  decrementQuantity,
  cartItems,
  selectedColor,
}) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleQuantityChange = (
    e: React.MouseEvent<HTMLButtonElement>,
    productId: string
  ) => {
    const product = {
      ...products.find((product) => product.id === productId),
    };
    if (product) {
      if (e.currentTarget.id === "decrement") {
        decrementQuantity(product.id);
      } else if (e.currentTarget.id === "increment") {
        addToCart(product);
      }
    }
  };

  const handleDelete = (productId: string) => {
    removeFromCart(productId);
  };

  const isItemEqualsZero = (productId: string) => {
    const itemInCart = cartItems.find((item) => item.id === productId);
    return itemInCart ? (itemInCart.quantity === 0 ? true : false) : true;
  };

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div>
      {products
        .filter(
          (product) =>
            selectedColor === "All" || product.colour === selectedColor
        )
        .map((product, index) => (
          <div className="product-card" key={index} data-testid="product-card">
            <div className="image-container">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">Price: ${product.price}</p>
            </div>

            <div className="quantity-container">
              <div className="quantity-row-1">
                <button
                  onClick={(e) => handleQuantityChange(e, product.id)}
                  id="decrement"
                  data-testid="decrement-1"
                  className="quantity-button"
                  disabled={isItemEqualsZero(product.id)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                {cartItems.find((item) => item.id === product.id)
                  ? cartItems.find((item) => item.id === product.id)?.quantity
                  : `0`}
                <button
                  onClick={(e) => handleQuantityChange(e, product.id)}
                  id="increment"
                  data-testid="add-to-cart-1"
                  className="quantity-button"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <div className="quantity-row-2">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete-button"
                  data-testid="remove-1"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductListing;
