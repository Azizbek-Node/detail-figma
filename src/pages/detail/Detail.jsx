import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/useFetch';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/product/get/${id}`); 

  useEffect(() => {
    if (error) {
      toast.error('Failed to load product details.');
    }
  }, [error]);

  const formatProductData = (product) => {
    return {
      ...product,
      price: product.price ? parseFloat(product.price) || 0 : 0,
      categoryId: product.categoryId ? parseInt(product.categoryId) || 0 : 0,
      stock: product.stock ? parseInt(product.stock) || 0 : 0,
      average_rating: product.average_rating ? parseFloat(product.average_rating) || 0 : 0,
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  const product = formatProductData(data);

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={product.image || '/placeholder.png'}
            alt={product.name || 'Product Image'}
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            {product.name || 'Unnamed Product'}
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            {product.description || 'No description available'}
          </p>

          <div className="text-lg font-medium text-green-500 mb-4">
            ${product.price.toFixed(2)}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
