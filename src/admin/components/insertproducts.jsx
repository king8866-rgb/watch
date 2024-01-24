import React, { useState } from 'react';

const ProductInsert = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    // Other product details...
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - e.g., send data to an API, database, etc.
    console.log('Product data:', productData);
    // Reset form after submission if needed
    setProductData({
      name: '',
      description: '',
      price: 0,
      imageUrl: '',
      // Other product details...
    });
  };

  return (
    <div className="admin-product-insert">
      <h2>Insert New Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={productData.name} onChange={handleInputChange} placeholder="Product Name" />
        {/* Other input fields for description, price, imageUrl, etc. */}
        <button type="submit">Insert Product</button>
      </form>
    </div>
  );
};

export default ProductInsert;
