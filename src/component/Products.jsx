import './products.css';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { addToCart } from '../redux/app/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { fetchProducts } from '../redux/app/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  
  const { products, loading, error } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <div className='row justify-content-center'>
        <h2 className='text-center p-4'>Products</h2>
        <hr />
        {products.map((product) => (
          <div className='product-wrapper col-10' key={product.id}>
            <div className='product-img'>
              <img src={product.image} alt={product.title} />
            </div>
            <div className='product-details'>
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>{product.rating.rate}★ {product.rating.count} ratings</p>
              </div>
              <div>
                <h3>₹ {product.price}</h3>
                <button onClick={() => handleClick(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
