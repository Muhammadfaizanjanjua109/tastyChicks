import React from 'react'
import logo from '../assets/Images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <div className="container  text-light">
    <footer className="row row-cols-1  row-cols-sm-2 row-cols-md-5 py-5 border-bottom  ">
      <div className="col mb-3">
        <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">

<Image src={logo} alt='image' width={70} />
        </a>
        <p className="text-light">© 2022</p>
      </div>
  
   
  
      <div className="col mb-3">
        <h5>Our Food</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="/Menu" className="nav-link p-0 text-light">Menu</Link></li>
          <li className="nav-item mb-2"><Link href="/Catering" className="nav-link p-0 text-light">Catering</Link></li>
        </ul>
      </div>
  
     
    
      <div className="col mb-3">
        <h5>Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="/About" className="nav-link p-0 text-light">About Us</Link></li>
          <li className="nav-item mb-2"><Link href="/Franchise" className="nav-link p-0 text-light">Franchise</Link></li>
        </ul>
      </div>

      <div className="col mb-3">
      <h5>We are Social</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link href="https://www.facebook.com/ColorsCreations441?mibextid=LQQJ4d" className="nav-link p-0 text-light"><i className="fa-brands fa-facebook-f text-primary"></i> Facebook</Link></li>
          {/* <li className="nav-item mb-2"><Link href="/Menu" className="nav-link p-0 text-light">Youtube</Link></li> */}
          <li className="nav-item mb-2"><Link href="https://instagram.com/chicks_on_charcoal?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr" className="nav-link p-0 text-light"><i className="fa-brands fa-instagram text-danger"></i> Instagram</Link></li>
          <li className="nav-item mb-2"><Link href="https://www.tiktok.com/@tastychicksoncharcoal?_t=8h3IlP9ZsGo&_r=1" className="nav-link p-0 text-light"><i className="fa-brands fa-tiktok text-light"></i> tiktok</Link></li>
        </ul>
      </div>
    </footer>
    <div className='p-3'>
        <p className='text-center'>All Right are Reserved By : Tasty Chicks</p>
    </div>
  </div>
  )
}

export default Footer
