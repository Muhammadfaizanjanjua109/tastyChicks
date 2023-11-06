"use client"
import Image from 'next/image'
import Footer from '@/Components/Footer'
import React, { useEffect, useState } from 'react'
import ValueRange from '../assets/Images/mainPage/Value-Range.jpg'

import motorcycle from '../assets/Images/motorcycle.png'
import waiter from '../assets/Images/waiter.png'
import authentic from '../assets/Images/authentic.svg'
import hamburgerorange from '../assets/Images/hamburger-orange.svg'
import confettiorange from '../assets/Images/confetti-orange.svg'
import clocheorange from '../assets/Images/cloche-orange.svg'
import blackbgMeatImage from '../assets/Images/mainPage/blackbgMeatImage.jpg'
import SouvlakiPopUp from '../assets/Images/mainPage/SouvlakiPopUp.jpg'

import Link from 'next/link'
export default function Home() {
  const [modal, setModal] = useState(true)
  const [modalopenModalButton, setopenModalButton] = useState(true)
  const data = [{
    name: 'SOUVLAKIA',
    details: 'Our juicy souvlakia are marinated in traditional Greek herbs and spices and cooked to perfection over charcoal on our rotisserie.'
  },

  {
    name: 'CLUB SANDWICHES',
    details: 'Our hearty club sandwiches are made with pita and fresh ingredients such as our home-made tzatziki, tomato and more.'
  },


  {
    name: 'CHARGRILLED SKEWERS',
    details: 'Our succulent skewers are made with tender cuts of meat and grilled over an open flame to seal in the juicy flavors and aromas.'
  },
  {
    name: 'SHARE PACKS',
    details: 'Our generous share packs are perfect for sharing with friends and family, and come with an assortment of our most popular dishes.'
  }
  ]


  useEffect(() => {
    // Trigger the modal to show when the component mounts
    const openModalButton = document.getElementById('openModalButton');
    if (openModalButton) {
      setopenModalButton(openModalButton)
      openModalButton.click();
    }
  }, []);
  return (
    <>
      <div>


        <div className="modal modal-dialog-centered" id="staticBackdropLive" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLiveLabel" aria-modal="true" role="dialog" >
          <div className="modal-dialog   modal-lg bg-primary text-light">
            <div className="modal-content  bg-dark text-light">

              <div className="modal-body p-0">

<div style={{right:'10px'}} className='position-absolute cursorPointer' data-bs-dismiss="modal" aria-label="Close">x</div>
                <div className='row m-0'>

                  <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
                    <Image src={SouvlakiPopUp} alt='SouvlakiPopUp' className='w-100 h-100' />
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column'>
                    <h5 className='text-light'>SIGN UP NOW TO OUR</h5>
                    <h1 className='text-accent-orange fw-bolder tommy'>LOYALTY</h1>
                    <h1 className='text-accent-orange  fw-bolder tommy'>PROGRAM</h1>
                    <h5 className='text-light'>AND RECIEVE A $10 VOUCHER!</h5>


                    <p className='text-light'>
                      $10 Voucher when you sign up

                    </p>
                    <p className='text-light'>
                      Get 10% back on everything you spend

                    </p>
                    <p className='text-light'>
                      Exclusive member-only discounts
                    </p>

                    <button className='btn btn-primary'>Join Now</button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


        <button
          id="openModalButton"
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdropLive"
        >
          Open Modal
        </button>


        <div className='position-relative w-100' style={{ minHeight: 'calc(100vh - 10rem)' }}>

          <div className='bg-OfMain'>
            a
          </div>

          <div className='d-flex justify-content-center position-absolute maincontainer  p-4 w-100'>

            <div className='row m-0'>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='CateringTop mb-4 fontsize19 ' style={{ margin: 'auto' }}>
                  <div className='d-flex justify-content-center align-items-center'>
                    <p className='IndieFont m-0 fw-bold'>Let us bring the taste of Greece to your next event</p>

                  </div>
                </div>

                <h1 className='fw-bold tommy text-center text-light'>DISCOVER THE AUTHENTIC FLAVORS OF GREECE</h1>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>

              </div>
            </div>


          </div>
        </div>




        <div className='p-5  mt-3'>
          <h1 className='fw-bold text-center'>OUR DELICIOUS RANGE</h1>
          <h3 className='text-center mainDelicious IndieFont fw-bold' >Dive into the Authentic Flavours of our Greek Food</h3>
        </div>



        <div className='container'>
          <div className='row m-0'>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 bg-lightBlue d-flex'>
              <div className='d-flex justify-content-center align-items-center flex-column'>    <h5 className='text-center fw-bold tommy'>$10 VALUE RANGE!</h5>
                <p className='text-center'>Indulge in our all new value range, featuring succulent chicken paired with your choice of crispy chips, refreshing salad, or wholesome rice, crafted to offer a healthy dining experience.</p>
                <p className='text-center'><a className='text-darkblue '>Learn More</a></p></div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
              <Image src={ValueRange} alt='ValueRange' className='w-100 h-100' />
            </div>
          </div>
        </div>
        <div className='d-flex  container mt-5 mb-3 '>
          <div className="card-group">


            {data.map((index, li) => (
              <div key={li} className="card me-4">
                <Image src={ValueRange} className="card-img-top w-100 h-100" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-bold tommy">{index.name}</h5>
                  <p className="card-text tommy">{index.details}</p>
                  <p className="card-text text-darkblue text-center underline">Learn More</p>
                </div>
              </div>
            ))}


          </div>
        </div>
        <div className='mt-4 d-flex justify-content-center align-items-center mb-4'>


          <Link href='/Menu'> <button className='btn btn-primary ' >BROWSE FULL MENU</button> </Link>

        </div>





        <div className='container mb-4'>
          <div className='row m-0 '>

            <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
              <Image src={ValueRange} alt='ValueRange' height={'auto'} className='image ValueRangemian w-100 h-100' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-3 bg-darkBlue d-flex maindiv ValueRangemian'>
              <div className='d-flex justify-content-center align-items-center flex-column'>

                <h3 className='IndieFont fw-bolder color-skyblue'>Limited Time Offer!</h3>
                <h1 className=' fw-bold text-light'>$9.90* SOUVLAKIA ARE BACK!</h1>
                <button className='btn bg-accent-orange text-light'>View All Souvlakia</button>

              </div>
            </div>

          </div>
        </div>


        <div className='bg-cateringService'>
          <div className='row m-0'>
            <div className='col-lg-6 col-md-6 col-sm-12 p-5 '>
              <div className=' d-flex justify-content-center align-items-center flex-column mt-5'>

                <h2 className='text-light fw-bolder'>CATERING SERVICES</h2>
                <p className='IndieFont text-accent-orange fw-bold'>Let us bring the taste of Greece to your next event</p>

                <p className='tommy text-light'>Our catering services are designed to provide you with an authentic Greek culinary experience. From souvlakia to Greek salads, our menu features a variety of dishes that are sure to impress your guests.</p>


                <div className='row m-0'>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Image src={authentic} alt='authentic' width={50} />
                    <p className='text-light'>Authentic Greek food made with fresh, high-quality ingredients</p>

                  </div>

                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Image src={authentic} alt='authentic' width={50} />
                    <p className='text-light'>Authentic Greek food made with fresh, high-quality ingredients</p>

                  </div>


                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Image src={hamburgerorange} alt='hamburgerorange' width={50} />
                    <p className='text-light'>Authentic Greek food made with fresh, high-quality ingredients</p>

                  </div>


                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <Image src={confettiorange} alt='confettiorange' width={50} />
                    <p className='text-light'>Authentic Greek food made with fresh, high-quality ingredients</p>

                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 p-5 border-radius'>

              <Image src={blackbgMeatImage} height={550} alt=' asd' className='borderRadiusImage w-100 h-100' />
            </div>
          </div>
        </div>




        <div className='chooseDiliveryMainDiv d-flex justify-content-center align-items-center bg-darkBlue '>
          <div className=' w-30 p-4 text-light d-flex justify-content-center align-items-center flex-column'>

            <h1 className='fw-bolder'>ORDER YOUR GREEK FAVOURITES NOW</h1>
            <div className='d-flex mt-4'>
              ِ<div className='d-flex flex-column me-5 diliverybikes'>
                <Image src={motorcycle} alt='motorcycle' width={100} />
                <button className='btn btn-light text-accent-orange  mt-2'>Dilivery</button>
              </div>


              ِ<div className='d-flex flex-column e-5 diliverybikes'>
                <Image src={waiter} alt='waiter' width={100} />
                <button className='btn btn-light text-accent-orange mt-2'>Pick Up</button>
              </div>
              ِ<div></div>
            </div>
          </div>
        </div>






        <div className="container mt-5 mb-5">
    
        <div className='p-5  mt-3'>
          <h1 className='fw-bold text-center'>Reviews By Our Customers</h1>
          <h3 className='text-center mainDelicious IndieFont fw-bold' >Dive into the Authentic Flavours of our Greek Food</h3>
        </div>
    <div className="row g-2">
        <div className="col-md-4">
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80" />
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Bruce Hardy</h5>
                    <span>Tasty Chicks Never Disappoints</span>
                    <p>I recently dined at Tasty Chicks, and I must say it was a delightful experience. The ambiance was cozy, and the staff was attentive and friendly. The menu offered a variety of options, from mouthwatering chicken dishes to vegetarian choices. I ordered their signature crispy fried chicken, and it was cooked to perfection, crispy on the outside and tender on the inside. The portions were generous, and the food tasted delicious. I also appreciated their quick service, and the prices were reasonable. The only reason I'm not giving it five stars is that I wish they had more dessert options on the menu. Overall, a great place for a casual dining experience.</p>
                    
                </div>
                
                <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    
                </div>
                
            </div>
        </div>
        
        <div className="col-md-4">
            
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" width="80" />
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Mark Smith</h5>
                    <span>Family-Friendly Gem</span>
                    <p>Tasty Chicks is a gem for families looking for a delightful dining experience. The atmosphere is warm and inviting, making it an ideal spot for family outings. The kid's menu has a good selection, and the little ones love the chicken tenders. As a parent, I appreciate the cleanliness and child-friendly facilities. The staff is courteous and quick to serve, which is a big plus when dining with kids. The food is consistently good, and I've never been disappointed with my orders. Tasty Chicks is a great place to enjoy quality time with your family while savoring some tasty chicken dishes.</p>
                    
                </div>
                
                <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    
                </div>
                
            </div>
            
        </div>
        
        <div className="col-md-4">
            
            <div className="card p-3 text-center px-4">
                
                <div className="user-image">
                    
            <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" width="80" />
                    
                </div>
                
                <div className="user-content">
                    
                    <h5 className="mb-0">Veera  Duncan</h5>
                    <span>Delightful Dining Experience</span>
                    <p>I recently dined at Tasty Chicks, and I must say it was a delightful experience. The ambiance was cozy, and the staff was attentive and friendly. The menu offered a variety of options, from mouthwatering chicken dishes to vegetarian choices. I ordered their signature crispy fried chicken, and it was cooked to perfection, crispy on the outside and tender on the inside. The portions were generous, and the food tasted delicious. I also appreciated their quick service, and the prices were reasonable. The only reason I'm not giving it five stars is that I wish they had more dessert options on the menu. Overall, a great place for a casual dining experience.</p>
                    
                </div>
                
                <div className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    
                </div>
                
            </div>
            
        </div>
        
        
    </div>
    
</div>


        <div className='container-fluid footerbg m-0'>
          <Footer />

        </div>
      </div>
    </>
  )
}
