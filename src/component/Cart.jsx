import React, { useEffect, useState } from 'react'
import './cart.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToCart, removeToCart, removeSingleCart } from '../redux/app/cartSlice'
import toast from 'react-hot-toast'

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantity, setTotalQuantity] = useState(0)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.cart.count)


  //increase product quantity by one
  const handleProductInc = (data) => {
    dispatch(addToCart(data))
  }

  //decrease product quantity by one
  const handleProductDec = (data) => {
    dispatch(removeSingleCart(data))
  }

  //remove product from cart
  const handleRemoveProduct = (id) => {
    dispatch(removeToCart(id))
    toast.success('removed from cart')
  }

  const total_Price = () => {
    let totalPrice = 0;
    data.map((ele, ind) => {
      totalPrice = ele.price * ele.quantity + totalPrice;
    })
    setTotalPrice(totalPrice)
  }

  const total_quantity = () => {
    let totalQuantity = 0;
    data.map((ele, ind) => {
      totalQuantity = ele.quantity + totalQuantity;
    })
    setTotalQuantity(totalQuantity)
  }
  useEffect(() => {
    total_quantity()
  }, [total_quantity])

  useEffect(() => {
    total_Price()
  }, [total_Price])
  return (
    <>
      <Container>
        <div className='row justify-content-center'>
          <div className='col-md-10'>
            <div className='cart-box'>
              <div className='mt-5 text-center'>
                <h2>Cart Products</h2><hr />
              </div>
              {data.length > 0 ?
                data.map((prod, ind) =>
                  <div className='cart-wrapper' key={ind}>
                    <div className='cart-img'>
                      <img src={prod.image} alt="" />
                    </div>
                    <div className='cart-details'>
                        <h3>{prod.title}</h3>
                        <h4>₹{prod.price}</h4>
                      <div className='cart-product-action' >
                        <button className='cart-button' onClick={prod.quantity <= 1 ? () => handleRemoveProduct(prod.id) : () => handleProductDec(prod)}>-</button>
                        <input type="text" value={prod.quantity} disabled />                                {/*  need to change */}
                        <button className='cart-button' onClick={() => handleProductInc(prod)}>+</button>
                        <button className='cart-button' onClick={() => handleRemoveProduct(prod.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ) :
                <div className='empty-cart'>
                  <i className='bi bi-cart'></i>
                  <h2 >Your cart is empty</h2>
                </div>
              }
              <hr />
              {
                data.length > 0 ?
                  <div className='d-md-flex justify-content-between'>
                    <div>
                      <span className='fw-bold fs-4'>Total quantity: {totalQuantity}</span>
                    </div>
                    <div >
                      <span className='fw-bold fs-4'>Total Price: {Math.floor(totalPrice)}</span>
                      <button className='ms-5' onClick={()=>{toast.success('this feature is not available')}}>CheckOut</button>
                    </div>
                  </div> : ''
              }

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart