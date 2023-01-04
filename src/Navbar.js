import React from 'react'
import { Link } from 'react-router-dom'
// store sy data get karna
import { useSelector } from 'react-redux'

const Navbar = () => {
  // konsy obj ko select karna hai jab bhi data change hoga uski automatically change value mil jaye gi req karny ki zaroorat ni  khudi miljayega
   const items = useSelector((state)=> state.cart //pury app ka state ko subscribe karna chah rahy
   // jaisy hi cart change hogi tou items mn ni value ayegi
)
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
    <span className='logo'>Redux Store</span>  
    <div>
        <Link className="navLink" to="/">
            Home
        </Link>
        <Link className="navLink" to="/cart">
           cart
        </Link>
        <span className='cartCount'>
            Cart Items : {items.length}
        </span>
    </div>
    </div>
  )
}

export default Navbar
