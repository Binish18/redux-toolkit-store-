import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './store/cartSlice';


const Cart = () => {
  const dispatch = useDispatch()  // store humein change karna ho 
  const products = useSelector(state => state.cart);
  const handleRemove =(Id)=>{
    dispatch(remove(Id))
  }
  return (
    <div>
      <h3>Cart</h3>
     <div className='cartWrapper'>
     {products.map((product)=>(
      <div className='cartCard'>
        <img  src={product.image} alt='product'/>
        <h5>{product.title}</h5>
        <h5>{product.price}</h5>
<button className='btn' onClick={()=>handleRemove(product.id)}>remove</button>
      </div>
     )
      
     )}
     </div>
    </div>
  )
}

export default Cart
