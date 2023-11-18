"use client"
import React from 'react'


import Image from 'next/image'
import Souvlakia_01 from '../../../assets/Images/foodImages/Souvlakia_01.jpg'
import motorcycle from '../../../assets/Images/motorcycle.png'
import waiter from '../../../assets/Images/waiter.png'
import Footer from '@/Components/Footer'
import { useParams } from 'next/navigation'
function MenuDetails() {
let {details}=useParams()

    const cardsData = [
        {
            name: 'SOUVLAKIA',
            child: [
                { name: 'Chicken Souvlak', price: '$14.50' },
                { name: 'Falafel Wrap', price: '$15.50' },
                { name: 'Lamb / Mix Souvlaki', price: '$11.90' },
                { name: 'Shish Tawook', price: '$19.90' },

            ]
        },

        {
            name: 'ROLLS',
            child: [
                { name: 'Egg & Bacon Roll', price: '$9.90' },
                { name: 'Chicken Delight Roll', price: '$10.90' },
                { name: 'Roast Chicken & Gravy Roll', price: '$10.90' },
                { name: 'Steak & Onion Roll', price: '$11.90' },

            ]
        },
        {
            name: 'DESSERTS',
            child: [
                { name: 'Chocolate Mousse', price: '$9.50' },
                { name: 'Sticky Date Pudding', price: '$9.50' },
                { name: 'Chocolate Almond Torta', price: '$8.90' },
                { name: 'Dreamy Tiramisu', price: '$10.50' },

            ]
        },
        {
            name: 'SALADS  S/M/L',
            child: [
                { name: 'Lamb S', price: '$13.90' },
                { name: 'Lamb M', price: '$16.90' },
                { name: 'Lamb L', price: '$18.50' },
                { name: 'Chicken/Mix/Veggie/Falafe S', price: '$12.90' },
                { name: 'Chicken/Mix/Veggie/Falafe M', price: '$15.50' },
                { name: 'Chicken/Mix/Veggie/Falafe L', price: '$17.50' },
                { name: 'Cheese Burger Hsp S', price: '$13.90' },
                { name: 'Cheese Burger Hsp M', price: '$15.90' },
                { name: 'Cheese Burger Hsp L', price: '$18.50' },
                { name: 'Schnitz Hsp S', price: '$13.90' },
                { name: 'Schnitz Hsp M', price: '$15.90' },
                { name: 'Schnitz Hsp L', price: '$18.50' },


            ]
        },
        {
            name: 'SALADS  S/M/L',
            child: [
                { name: 'Greek S', price: '$6' },
                { name: 'Greek M', price: '$8' },
                { name: 'Greek L', price: '$10' },
                { name: 'Coleslaw S', price: '$6' },
                { name: 'Coleslaw M', price: '$8' },
                { name: 'Coleslaw L', price: '$10' },
                { name: 'Tabouli S', price: '$6' },
                { name: 'Tabouli M', price: '$8' },
                { name: 'Tabouli L', price: '$10' },
                { name: 'Roast mix veggies S', price: '$6' },
                { name: 'Roast mix veggies M', price: '$8' },
                { name: 'Roast mix veggies L', price: '$10' },
                { name: 'Scalloped potatoes S', price: '$6' },
                { name: 'Scalloped potatoes ؐM', price: '$8' },
                { name: 'Scalloped potatoes L', price: '$10' },

            ]
        },

        {
            name: 'BURGERS',
            child: [
                { name: 'AussieBurger', price: '$16.90' },
                { name: 'Chicken Delight Burger', price: '$15.50' },
                { name: 'Don Burger', price: '$18.00' },
                { name: 'Hawaiian Burger', price: '$16.50' },
                { name: 'HSP Burger', price: '$15.90' },
                { name: 'Parma Burger', price: '$14.00' },
                { name: 'Plain & Simple', price: '$16.50' },

                { name: 'Schnitz Burger', price: '$15.50' },
                { name: 'Steak Sandwich lot', price: '$16.90' },
                { name: 'The Golden Hen', price: '$16.50' },

                { name: 'Si Senor Burger', price: '$10.50' },
                { name: 'Tasty Cheese Burger', price: '$10.50' },
                { name: 'Veggie Burger', price: '$13.90' },

            ]
        },
        {
            name: 'Chips',
            child: [
                { name: 'Small', price: '$5.50' },
                { name: 'Medium', price: '$8.50' },
                { name: 'Large', price: '$10.50' },
                { name: 'Family', price: '$17.50' },


            ]
        },
        {
            name: 'CHICKENS (Free range)',
            child: [
                { name: 'Half Chicken', price: '$9.95' },
                { name: 'Quarter Chicken', price: '$6.95' },
                { name: 'Whole Chicken', price: '$17.50' },


            ]
        },
        {
            name: 'CHICKENS (Free range)',
            child: [
                { name: '1/4 Chicken & Chips', price: '$10.50' },
                { name: '1/4 Chicken & Salad', price: '$10.95' },
                { name: '1/4 Chicken + Chips + Salad', price: '$14.95' },
                { name: '1/2 Chicken & Chips', price: '$14.50' },
                { name: '1/2 Chicken & Salad', price: '$15.95' },
                { name: '1/2 Chicken + Chips + Salad', price: '$19.95' },
                { name: 'Family Meal Deal', price: '$35.90' },
                { name: 'Family Mega Deal', price: '$65.90' },


            ]
        },
        {
            name: 'Appetizers',
            child: [
                { name: "Cheesy Croquette", price: "$3.50" },
                { name: "2* Croquettes", price: "$5.00" },
                { name: "Chicken Nugget", price: "$1.50" },
                { name: "6* Chicken Nuggets", price: "$5.00" },
                { name: "12* Chicken Nuggets", price: "$10.00" },
                { name: "Potato Cake (v)", price: "$1.50" },
                { name: "3* Potato Cakes (v)", price: "$3.00" },
                { name: "Roast Potato (v)", price: "$1.50" },
                { name: "Roast Pumpkin (v)", price: "$1.50" },
                { name: "Sweet Chilli Tender", price: "$2.00" },
                { name: "Tasty Wing", "price": '$2.00' }


            ]
        },
        {
            name: 'Loaded Fries',
            child: [
                { name: "Small", price: "$7.90" },
                { name: "Large", price: "$11.90" },
                { name: "Monster", price: "$17.50" },



            ]
        },


    ]

    let categoryDetails
const selectedCategory = details; // Assuming `a.details` contains the selected category name
 categoryDetails = cardsData.find((category) => category.name === selectedCategory);

    return (
        <div>
            <div className='p-5 mt-2 mb-2 headingBg'>
                <h1 className='fw-bolder text-center text-darkblue'>OUR MENU</h1>
            </div>



            <div className='container p-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <Image src={Souvlakia_01} alt='10' style={{ borderRadius: ' 5px 5px 5px 5px' }} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='fw-bold mb-3'>
                            SOUVLAKIA</h2>

                        <p>Experience the taste of Greece with our tender and flavorful Souvlakia! Made with marinated meat, fresh veggies, and aromatic herbs. Served with warm pita bread and your choice of sauce, they’re a satisfying and delicious meal for any time of day.</p>


                        <div>
                            <div className=" d-flex justify-content-between  mb-3">
                                <span className="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span className="elementor-price-list-separator align-self-center"></span>
                                <span className=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>


                            <div className=" d-flex justify-content-between  mb-3">
                                <span className="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span className="elementor-price-list-separator align-self-center"></span>
                                <span className=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>




                            <div className=" d-flex justify-content-between  mb-3">
                                <span className="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span className="elementor-price-list-separator align-self-center"></span>
                                <span className=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>



                            <div className=" d-flex justify-content-between  mb-3">
                                <span className="tommy color-orange fw-bold" style={{ maxWidth: '80%', fontSize: '18px' }}>
                                    Make it a Combo						</span>
                                <span className="elementor-price-list-separator align-self-center"></span>
                                <span className=" tommy fw-bold color-orange">+ $5.90</span>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


            <div className='bg-cateringCata mb-4'>
                <div className='container p-4'>
                    <h3 className='text-center fw-bold'>OPTIONS</h3>

                    <div className='row mt-5 justify-content-center'>
{categoryDetails?.child.map((index , li)=>{
    return ( <>
       <div key={li} className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li className="elementor-price-list-item mb-4">
                                    <div className="elementor-price-list-text">
                                        <div className="elementor-price-list-header">
                                            <span className="elementor-price-list-title">
                                             {index?.name}				</span>
                                            <span className="elementor-price-list-separator Details align-self-center"></span>
                                            <span className="elementor-price-list-price">  {index?.price}</span>
                                        </div>
                                        <p className="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
    </>)
})}
                     
                        {/* <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li className="elementor-price-list-item mb-4">
                                    <div className="elementor-price-list-text">
                                        <div className="elementor-price-list-header">
                                            <span className="elementor-price-list-title">
                                                Chicken						</span>
                                            <span className="elementor-price-list-separator Details align-self-center"></span>
                                            <span className="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p className="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li className="elementor-price-list-item mb-4">
                                    <div className="elementor-price-list-text">
                                        <div className="elementor-price-list-header">
                                            <span className="elementor-price-list-title">
                                                Chicken						</span>
                                            <span className="elementor-price-list-separator Details align-self-center "></span>
                                            <span className="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p className="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <div className='d-flex  d-flex justify-content-center'>

                                <li className="elementor-price-list-item mb-4">
                                    <div className="elementor-price-list-text">
                                        <div className="elementor-price-list-header">
                                            <span className="elementor-price-list-title">
                                                Chicken						</span>
                                            <span className="elementor-price-list-separator Details align-self-center" ></span>
                                            <span className="elementor-price-list-price">$9.90</span>
                                        </div>
                                        <p className="elementor-price-list-description">
                                            Tzatziki | Tomato | Onion | Chips						</p>
                                    </div>
                                </li>

                            </div>
                        </div> */}

                    </div>
                </div>
            </div>





            <div className='chooseDiliveryMainDiv d-flex justify-content-center align-items-center bg-darkBlue '>
                <div className=' w-30 p-4 text-light'>

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

            <div className='container-fluid footerbg m-0'>
                <Footer />

            </div>

        </div>
    )
}

export default MenuDetails
