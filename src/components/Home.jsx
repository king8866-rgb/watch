import React from 'react';
import Slideshow from './Slideshow.jsx';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Sample Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 2500,
      imageUrl: require('../assets/3.jpeg'),
      // Other product details like sizes, colors, etc.
    },
    {
      id: 2,
      name: 'Sample Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 3999,
      imageUrl: require('../assets/2.jpeg'),
      // Other product details like sizes, colors, etc.
    },

    {
      id: 3,
      name: 'Sample Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 3999,
      imageUrl: require('../assets/3.jpeg'),
      // Other product details like sizes, colors, etc.
    },

    {
      id: 4,
      name: 'Sample Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 2999,
      imageUrl: require('../assets/2.jpeg'),
      // Other product details like sizes, colors, etc.
    },
    {
      id: 5,
      name: 'Sample Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 3999,
      imageUrl: require('../assets/3.jpeg'),
      // Other product details like sizes, colors, etc.
    },

    {
      id: 6,
      name: 'Sample Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 3999,
      imageUrl: require('../assets/2.jpeg'),
      // Other product details like sizes, colors, etc.
    },

    
    // Add more products as needed
  ];

  return ( 
  <div>
  <Slideshow/>
    <div className="product-page">
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-container" key={product.id}>
            <a href={`/product/${product.id}`}>
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </a>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: Rs {product.price}</p>
              {/* Add other product details here */}
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product;