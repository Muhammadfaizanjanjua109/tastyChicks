import Image from 'next/image'
import React from 'react'
import franchise from '../../assets/Images/Franchise/Franchising.jpg'
import OurBusinessImage from '../../assets/Images/Franchise/Our-Business-Image.jpg'
import OurFood from '../../assets/Images/Franchise/ourFood.jpg'
import OurPeopleImage from '../../assets/Images/Franchise/OurPeopleImage.jpg'
import Artboard1 from '../../assets/Images/Franchise/Artboard1.png'
import Artboard2 from '../../assets/Images/Franchise/Artboard2.png'
import Artboard3 from '../../assets/Images/Franchise/Artboard3.png'
import Artboard4 from '../../assets/Images/Franchise/Artboard4.png'
import Artboard5 from '../../assets/Images/Franchise/Artboard5.png'
import FranchiseEnquiryImage1 from '../../assets/Images/Franchise/FranchiseEnquiryImage1.jpg'
import Footer from '@/Components/Footer'
function page() {
  const PILLARSForSuccess = [
    {
      img: Artboard1,
      para: 'A unique Greek Street Food concept'
    },
    {
      img: Artboard2,
      para: 'Strong margins and a fair return on investment'
    },
    {
      img: Artboard3,
      para: 'Backing from an experienced franchisor with years of food expertise'
    },
    {
      img: Artboard4,
      para: 'Support in establishing and running your own Souvlaki GR business'
    },
    {
      img: Artboard5,
      para: 'Expertise in business, marketing, training, and product development'
    },
  ]
  const WhyOwn = [
    {
      image: OurFood,
      Cardtitle: 'OUR FOOD',
      cardText: 'Our commitment to crafting clean and delicious Greek food using only the highest quality fresh produce has been unwavering since the beginning. At Souvlaki GR, our ultimate goal is to provide an unparalleled dining experience for every guest, every time.',
    },
    {
      image: OurPeopleImage,
      Cardtitle: 'OUR PEOPLE',
      cardText: 'At Souvlaki GR, passion unites our team, franchisees, and staff. Our shared love for delicious food and vibrant cultural celebrations creates an energizing atmosphere that spills over to our customers, resulting in exceptional experiences',
    },
    {
      image: OurBusinessImage,
      Cardtitle: 'OUR BUSINESS',
      cardText: 'We strive for excellence in every aspect of our business, from our menu to our systems, technology, and stores, and we are constantly looking to improve. This dedication to excellence is reflected in our comprehensive business package, designed to ensure the success of our franchisees.',
    }
  ]
  const theProcess = [
    {
      ind: '1.',
      val: 'ENQUIRE',
      par: 'Make an online enquiry and fill out the questionnaire.'
    },
    {
      ind: '2.',
      val: 'INITIAL DISCUSSION',
      par: 'Our franchise recruitment team will contact you by phone for an initial discussion.'
    },
    {
      ind: '3.',
      val: 'MEET THE TEAM',
      par: 'Online interview with our Founder & Operations Team'
    },
    {
      ind: '4.',
      val: 'APPLICATION',
      par: 'We will send you a Franchisee Application Form, NDA and Initial Refundable Deposit to be Made.'
    },
    {
      ind: '5.',
      val: 'RESTAURANT VISIT',
      par: 'Opportunity for you to spend a day in a restaurant with our Franchise Training Manager to learn our operation and culture.'
    },
    {
      ind: '6.',
      val: 'CONNECT',
      par: 'Meet with a Current Franchisee for an open conversation about our business and their experience.'
    },
    {
      ind: '7.',
      val: 'LEGAL',
      par: 'We will send you the legal documentation and site information.'
    },
    {
      ind: '8.',
      val: 'TRAINING',
      par: 'Training will start 4-6 weeks prior to your store opening to make sure you’re confident  in every aspect of operations before opening day!'
    },
  ]
  return (
    <div>

      <div className='container p-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column'>
            <div className=''>
              <p className='IndieFont text-accent-orange fw-bold'>Join the Souvlaki GR Family Today!</p>
              <h1 className='fw-bold tommy'>FRANCHISING OPPORTUNITIES</h1>
              <p className='tommy'>If you’re interested in bringing the authentic taste of Greece to your local community, consider partnering with Souvlaki GR to start your own successful franchise.</p>
              <button className='btn btn-primary bg-orange text-center'>ENQUIRE NOW</button>
            </div>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='p-3'>
              <Image className='w-100 h-100' style={{ borderRadius: ' 5px 5px 5px 5px' }} src={franchise} alt='franchise' />
            </div>
          </div>
        </div>
      </div>


      <div className='bg-cateringCata p-3 d-flex justify-content-center mb-5'>
        <div className='row container'>


          {WhyOwn.map((index, li) => {
            return (
              <>
                <div className='col-lg-4 p-2'>       <div className="card" key={li}>
                  <Image src={index?.image} alt='OurBusinessImage' className='card-img-top' />

                  <div className="card-body">
                    <h5 className="card-title">{index?.Cardtitle}</h5>
                    <p className="card-text">{index?.cardText}</p>
                  </div>
                </div></div>

              </>
            )
          })}
          <div className='d-flex justify-content-center align-items-center'>
            <button className='btn  btn-primary'>ENQUIRE NOW</button>
          </div>

        </div>
      </div>


      <div className='container mb-5 ' style={{ marginTop: '7%' }}>
        <div style={{ margin: 'auto' }} className='w-50 mt-4'>
          <h1 className=' text-center fw-bold text-center'>YOUR PILLARS FOR SUCCESS</h1>
          <p className='text-center'>Building a successful business requires a strong foundation that can adapt and grow with changing times. At Souvlaki GR, we’ve created a unique Greek Street Food concept that has proven to be a hit with customers.</p>

          <p className='QuicksandMedium text-center' style={{ fontWeight: '600' }}>Join the Souvlaki GR family as a franchisee and benefit from:</p>
        </div>
      </div>
      <div className='container mb-5'>
        <div className='d-flex justify-content-center '>

          {PILLARSForSuccess.map((index, k) => {
            return (
              <>
                <div className='me-3 d-flex justify-content-center align-items-center flex-column'>
                  <Image src={index?.img} alt='as' />
                  <p className='text-center'>{index?.para}</p>
                </div>
              </>
            )
          })}

        </div>
      </div>



      <div className='mt-5 bg-lightBlue'>
        <div className='d-flex justify-content-center flex-column align-items-center'>

          <h1 className='fw-bold text-center mt-5 mb-4'>The Process</h1>
          <div className='row justify-content-center container'>
            {theProcess.map((index, il) => {
              return (
                <>
                  <div key={il} style={{ border: '11px solid #e9f6ff ' }} className='bg-light  pe-4  col-lg-3 mt-5 '>      <h1 className='text-accent-orange text-center fw-bold'>{index?.ind}</h1>
                    <h4 className='text-center fw-bold'>{index?.val}</h4>
                    <p className='text-center'>{index?.par}

                    </p>
                  </div>
                </>
              )
            })}

          </div>


          <div className='d-flex mt-5 mb-4'>
            <button className='btn btn-primary'>
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </div>



      <div className='mt-5'>
        <h1 className='text-center fw-bold'>FREQUENTLY ASKED QUESTIONS</h1>

        <div className='mt-4 container'>
          <div className='row'>
            <div className='row '>
              <div className='col-lg-6 col-md-6 col-sm-12'>
              <Image src={FranchiseEnquiryImage1} className='w-100 h-100' alt='FranchiseEnquiryImage1' />

              </div>
              <div className='col-lg-6 col-md-6 col-sm-12  '>
             <div className='flex-column ps-4 pe-4 d-flex'>
             <div className='headingBg p-4'>
                  <h5 className='fw-bold'>What qualities do you look for in a Franchisee?</h5>
                  <p>We are looking for passionate and hard-working franchisees. A successful franchisee understands the importance of customer service and must be willing to be hands-on and most importantly, should be a great leader to their team.</p>
                </div>


                <div className='headingBg p-4 mt-4'>
                  <h5 className='fw-bold'>What qualities do you look for in a Franchisee?</h5>
                  <p>We are looking for passionate and hard-working franchisees. A successful franchisee understands the importance of customer service and must be willing to be hands-on and most importantly, should be a great leader to their team.</p>
                </div>


                <div className='headingBg p-4 mt-4'>
                  <h5 className='fw-bold'>What qualities do you look for in a Franchisee?</h5>
                  <p>We are looking for passionate and hard-working franchisees. A successful franchisee understands the importance of customer service and must be willing to be hands-on and most importantly, should be a great leader to their team.</p>
                </div>
             </div>
              </div>

            </div>
          </div>
        </div>


        <div className='mt-5'>
          <div className='container-fluid footerbg m-0'>
            <Footer />
          </div>
        </div>
      </div>
    </div>


  )
}

export default page
