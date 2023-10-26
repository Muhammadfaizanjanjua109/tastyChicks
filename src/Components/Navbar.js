import Image from 'next/image'
import React from 'react'
import logo from '../assets/Images/logo.png'
import Link from 'next/link'
function Navbar() {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg  bg-white">
  <div className="container ">
    <a className="navbar-brand" href="/"><Image width={80} src={logo} alt='logo' /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
    
        <li className="nav-item">
          <Link className="nav-link p-2 m-2" href="/" style={{color:'#2e297f'}}>Home</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link p-2 m-2" href="/Menu" style={{color:'#2e297f'}}>Menu</Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link p-2 m-2" href="/Catering" style={{color:'#2e297f'}}>Catering</Link>
        </li>


        <li className="nav-item">
          <Link className="nav-link p-2 m-2" href="/About" style={{color:'#2e297f'}}>About Us</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link p-2 m-2" href="/Franchise" style={{color:'#2e297f'}}>Franchise</Link>
        </li>


     
      </ul>
    </div>

<div className='d-flex justify-content-center'>
<button className='btn btn-primary me-2 bg-darkBlue' >Loyality Program</button>
    <button className='btn btn-secondary text-light'>Order Online</button>
 
</div>
 </div>
</nav>
    </div>
  )
}

export default Navbar
