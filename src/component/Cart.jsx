import React, { useState } from 'react'
import './cart.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/app/cartSlice'

const Cart = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.cart.count)
  const[prodCount,setProdcount]=useState(0)
  const handleProductInc=(data)=>{
    if(prodCount>0){
      setProdcount(prodCount-1)
    }
    dispatch(addToCart(data))
    console.log(data)
  }
  const handleProductDec=()=>{
    dispatch()
  }
  const handleRemoveProduct=(id)=>{
      dispatch()
  }
  return (
    <>
      <Container>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='cart-box'>
              <div className='mt-5 text-center'>
                <h2>Cart Products</h2><hr />
              </div>              
              {data.length > 0?
                data.map((prod,ind)=>
                  <div className='cart-wrapper' key={ind}>
                <div className='cart-img'>
                  <img src={prod.image} alt="" />
                </div>
                <div className='cart-details'>
                  <div>
                    <h3>{prod.description}</h3>
                    <h4>₹{prod.price}</h4>
                  </div>
                  <div className='cart-product-action' >
                    <button className='cart-button' onClick={()=>handleProductDec(prod)}>-</button>
                    <input className='' type="text" value={prodCount} disabled />                                {/*  need to change */}
                    <button className='cart-button' onClick={()=>handleProductInc(prod)}>+</button>
                    <button className='cart-button' onClick={()=>handleRemoveProduct(prod.id)}>Remove</button>
                  </div>
                </div>
              </div>
                ):
              <div className='empty-cart'> 
                <i className='bi bi-cart'></i>
                <h2 >Your cart is empty</h2>
              </div>
              }
              <hr />
              <div className='d-md-flex justify-content-between'>
               <div>
                <span className='fw-bold fs-4'>Total Products: 333</span>
                </div>
                <div >
                <span className='fw-bold fs-4'>Total Price: 1000</span>
                <button className='ms-5'>CheckOut</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart
