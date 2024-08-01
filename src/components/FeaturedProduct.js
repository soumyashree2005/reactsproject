import React, { useState, useEffect } from 'react';
import './FeaturedProduct.css';

const initialProducts = [
  { name: 'Tree 1', description: 'A beautiful tree.', price: '$20', imgSrc: 'path_to_tree1_image' },
  { name: 'Tray Soil', description: 'High-quality soil.', price: '$5', imgSrc: 'path_to_tray_soil_image' },
  { name: 'Soil 2', description: 'Rich nutrient soil.', price: '$7', imgSrc: 'path_to_soil2_image' },
  { name: 'Spade', description: 'Durable spade.', price: '$10', imgSrc: 'path_to_spade_image' },
  { name: 'Plant 1', description: 'Indoor plant.', price: '$15', imgSrc: 'path_to_plant1_image' },
  { name: 'Plant 2', description: 'Outdoor plant.', price: '$18', imgSrc: 'path_to_plant2_image' },
  // Add more products as needed
];

function FeaturedProduct() {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    // Example: fetch data from an API and update state
    // setProducts(fetchedProducts);
  }, []);

  return (
    <div className="featured-product">
      <h2>Featured Products</h2>
      <div className="product-gallery">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.imgSrc} alt={product.name} />
            <div className="product-name">{product.name}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProduct;
