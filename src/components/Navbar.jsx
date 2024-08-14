import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  let arr = JSON.parse(localStorage.getItem('favItem')) || []
  console.log(arr)
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/wishlist"><CiHeart color='red' size={"30"}/><sup>{arr.length}</sup>  Wishlist</Link>
        </li>
      
      
      </ul>
 
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
