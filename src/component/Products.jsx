import axios from 'axios'
import './products.css'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { addToCart } from '../redux/app/cartSlice';
import { useDispatch } from 'react-redux';
const Products = () => {
  const[products,setProducts]=useState([]);
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>setProducts(res.data))
  },[])
  console.log(products)
const handleClick=(data)=>{
 dispatch(addToCart(data))
}
  return (
   <>
   <Container>
   <div className='row justify-content-center'>
   <h2 className='text-center p-4'>Products</h2>
<hr />
    {products.map(prod=>
      <div className='product-wrapper col-10' key={prod.id}>
      <div className='product-img'>
      <img src={prod.image} alt="" />
      </div>
      <div className='product-details'>
        <div>
          <h3>{prod.title}</h3>
          <p>{prod.description}</p>  
          <p>{prod.rating.rate}★ {prod.rating.count}rating</p>
        </div>
        <div>
          <h3>₹ {prod.price}</h3>
          <button onClick={()=>handleClick(prod)}>Add to cart</button>
        </div>
      </div>
    </div>
    )}
    </div>
    </Container>
   </>
  )
}

export default Products
