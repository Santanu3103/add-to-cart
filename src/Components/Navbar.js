import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
        <nav className="navbar bg-body-tertiary ">
        <div className="container-fluid">
         <h3>Shoppint Cart</h3>       
        <div className="link" >        
         <Link className="px-2 text-decoration-none link" to="/">Home Page</Link>
         <Link className="px-2 text-decoration-none link" to="/cart">Cart Page</Link>
        </div>
       </div>
      </nav>
  )
}

export default Navbar
