import React, { useState, useEffect } from 'react';

function Productos() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const apiUrl = 'https://fakestoreapi.com/products';

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full max-w-md border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div id="product-list" className="mt-10">
        {filteredProducts.map(product => (
          <div key={product.id} className="border border-gray-300 rounded-lg p-4 mb-4">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold">${product.price}</p>
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-cover mt-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
