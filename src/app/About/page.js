import Image from 'next/image'
import React from 'react'
import about from '../../assets/Images/About/about.jpg'
import motorcycle from '../../assets/Images/motorcycle.png'
import waiter from '../../assets/Images/waiter.png'
import Footer from '@/Components/Footer'
function page() {
  return (
 <>
    <div>
     
     <section id="about" className="about">
     <div className="container aos-init aos-animate" data-aos="fade-up">

       <div className="section-header">
         <h1 className='text-center text-darkblue tommy fw-bold'>About Us</h1>
         <p className='IndieFont fw-bold text-center'>Learn More <span>About Us</span></p>
       </div>

       <div className="row gy-4">
         <div className="col-lg-7 position-relative about-img aos-init aos-animate BookaTable"  data-aos="fade-up" data-aos-delay="150">
           <div className="call-us position-absolute">
             <h4  className='text-darkblue text-center fw-bold'>Book a Table</h4>
             <p className='tommy fw-bold'>+1 5589 55488 55</p>
           </div>
         </div>
         <div className="col-lg-5 d-flex align-items-end aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
           <div className="content ps-0 ps-lg-5">
             <p className="fst-italic">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
               magna aliqua.
             </p>
             <ul>
               <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
               <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
               <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
             </ul>
             <p>
               Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
             </p>

             <div className="position-relative mt-4">
               <Image src={about} className="img-fluid" alt="" />
               <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
             </div>
           </div>
         </div>
       </div>

     </div>

     
   </section>
   </div>


   

   <div className='chooseDiliveryMainDiv d-flex justify-content-center align-items-center bg-darkBlue mt-4 '>
    <div className=' w-30 p-4 text-light d-flex justify-content-center align-items-center flex-column'>
  
    <h1 className='fw-bolder'>ORDER YOUR GREEK FAVOURITES NOW</h1>
<div className='d-flex mt-4'>
  ِ<div className='d-flex flex-column me-5'>
<Image src={motorcycle} alt='motorcycle'  width={100} />
    <button className='btn btn-light text-accent-orange  mt-2'>Dilivery</button>
  </div>


  ِ<div className='d-flex flex-column e-5'>
<Image src={waiter} alt='waiter' width={100} />
    <button className='btn btn-light text-accent-orange mt-2'>Pick Up</button>
  </div>
  ِ<div></div>
</div>
    </div>
   </div>









<div className='container-fluid footerbg m-0'>
<Footer />

</div>
 </>
  )
}

export default page
