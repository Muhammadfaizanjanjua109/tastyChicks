import Image from 'next/image'
import React from 'react'
import logo from '../assets/Images/logo.png'
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
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-2 m-2" style={{color:'#2e297f'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Food
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item p-2 m-2" href="/Menu">Menu</a></li>
            <li><a className="dropdown-item p-2 m-2" href="/Catering">Catering</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link p-2 m-2" href="#" style={{color:'#2e297f'}}>Find Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-2 m-2" style={{color:'#2e297f'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           WORK WITH US
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item p-2 m-2" href="#">Franchising</a></li>
            <li><a className="dropdown-item p-2 m-2" href="#">Careers</a></li>
            <li><a className="dropdown-item p-2 m-2" href="#">About Us</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-2 m-2" style={{color:'#2e297f'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Community
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item p-2 m-2" href="#">Blog</a></li>
         
          </ul>
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
