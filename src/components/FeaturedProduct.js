import React, { useState, useEffect } from 'react';
import './FeaturedProduct.css';

const initialProducts = [
  { name: 'Tree 1', description: 'A beautiful tree.', price: '$20', imgSrc: '/assets/Hero image 1.png' },
  { name: 'Tray Soil', description: 'High-quality soil.', price: '$5', imgSrc: '/assets/image 5.png' },
  { name: 'Soil 2', description: 'Rich nutrient soil.', price: '$7', imgSrc: '/assets/image 11.png' },
  { name: 'Spade', description: 'Durable spade.', price: '$10', imgSrc: '/assets/image 12.png' },
  { name: 'Plant 1', description: 'Indoor plant.', price: '$15', imgSrc: '/assets/image 1.png' },
  { name: 'Plant 2', description: 'Outdoor plant.', price: '$18', imgSrc: '/assets/image 3.png' },
  { name: 'Plant 3', description: 'Succulent plant.', price: '$12', imgSrc: '/assets/image 6.png' },
  { name: 'Plant 4', description: 'Flowering plant.', price: '$22', imgSrc: '/assets/image 8.png' },
  { name: 'Plant 5', description: 'Herbal plant.', price: '$25', imgSrc: '/assets/image 7.png' },
  { name: 'Plant 6', description: 'Tropical plant.', price: '$30', imgSrc: '/assets/image 6.png' },
  { name: 'Plant 7', description: 'Cactus.', price: '$8', imgSrc: '/assets/image 4.png' },
  { name: 'Plant 8', description: 'Fern.', price: '$14', imgSrc: '/assets/image 3.png' },
  { name: 'Plant 9', description: 'Orchid.', price: '$35', imgSrc: '/assets/image 2.png' },
  { name: 'Plant 10', description: 'Bonsai.', price: '$40', imgSrc: '/assets/plant10.jpg' },
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
