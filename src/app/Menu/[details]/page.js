"use client"
import React from 'react'


import Image from 'next/image'
import Souvlakia_01 from '../../../assets/Images/foodImages/Souvlakia_01.jpg'
import motorcycle from '../../../assets/Images/motorcycle.png'
import solovakia from '../../../assets/Images/mainPage/solovakia.png'
import rolls from '../../../assets/Images/mainPage/rolls.jpg'
import salads from '../../../assets/Images/mainPage/salads.jpg'
import chips from '../../../assets/Images/mainPage/chips.jpg'
import CHICKENSPACKS from '../../../assets/Images/mainPage/CHICKENSPACKS.jpg'
import apitizers from '../../../assets/Images/mainPage/apitizers.png'
import chicken from '../../../assets/Images/mainPage/chicken.jpg'
import burger from '../../../assets/Images/mainPage/burger.png'
import Deserts from '../../../assets/Images/mainPage/Deserts.jpg'
import falafelrecipe from '../../../assets/Images/mainPage/falafel-recipe.png'

import waiter from '../../../assets/Images/waiter.png'
import Footer from '@/Components/Footer'
import { useParams } from 'next/navigation'
function MenuDetails() {
let {details}=useParams()

    const cardsData = [
        {
            name: 'SOUVLAKIA',
            image:solovakia,
            description:"Savor the authentic taste of Greece with our tantalizing Souvlakia! Crafted with tender, marinated meat, fresh and crisp veggies, and wrapped in warm pita bread, each bite is an ode to Mediterranean flavors. Indulge in this classic delight, perfectly seasoned and served with a choice of delectable sauces. It's a culinary journey to the heart of Greece, offering a mouthwatering experience in every bite.",
            child: [
                { name: 'Chicken Souvlak', price: '$14.50' },
                { name: 'Falafel Wrap', price: '$15.50' },
                { name: 'Lamb / Mix Souvlaki', price: '$11.90' },
                { name: 'Shish Tawook', price: '$19.90' },

            ]
        },

        {
            name: 'ROLLS',
            image:rolls,
            description:'Discover our delectable Rolls selection crafted with premium ingredients and flavors to satisfy your cravings. From the rich essence of the Egg & Bacon Roll to the savory goodness of the Steak & Onion Roll, each bite promises a delightful burst of taste. Treat yourself to these scrumptious handheld delights today!',
            child: [
                { name: 'Egg & Bacon Roll', price: '$9.90' },
                { name: 'Chicken Delight Roll', price: '$10.90' },
                { name: 'Roast Chicken & Gravy Roll', price: '$10.90' },
                { name: 'Steak & Onion Roll', price: '$11.90' },

            ]
        },
        {
            name: 'DESSERTS',
            image:Deserts,
            description:'Indulge in our divine Desserts, an irresistible array of sweet sensations. Delight your taste buds with our heavenly offerings, from traditional Baklava with layers of honey-soaked pastry to our rich and creamy Greek Yogurt Parfait. Each dessert is a blissful finale to your meal, offering a symphony of flavors that will leave you craving for more',
            child: [
                { name: 'Chocolate Mousse', price: '$9.50' },
                { name: 'Sticky Date Pudding', price: '$9.50' },
                { name: 'Chocolate Almond Torta', price: '$8.90' },
                { name: 'Dreamy Tiramisu', price: '$10.50' },

            ]
        },
        {
            name: 'HSP S/M/L',
            image:falafelrecipe,
            description:"Savor our delectable Halal Snack Pack selections, where succulent meats meet a fusion of flavors. Indulge in the tender Lamb or choose from Chicken, Mix, Veggie, or Falafel options, all served in various sizes to suit your appetite. Delight in our Cheese Burger HSP, featuring juicy patties, or relish the Schnitz HSP for a crispy, savory experience. Each size is crafted to perfection, ensuring a fulfilling and satisfying meal that's bursting with taste.",
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
        image:salads,
        description:"Discover our fresh and vibrant Salad options available in various sizes. Indulge in the delightful Greek Salad, a medley of crisp vegetables and tangy feta, or relish the creamy Coleslaw for a classic accompaniment to your meal. Enjoy the zesty Tabouli packed with nutritious ingredients or opt for the Roast Mixed Veggies, offering a flavorful blend of roasted goodness. Don't miss our Scalloped Potatoes for a comforting and savory addition to your dining experience. Each size offers a generous portion of wholesome salads to complement your dish perfectly.",
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
            image:burger,
            description:"Our burger selection offers a diverse range to satisfy every craving. Dive into the Aussie Burger, a savory delight featuring premium ingredients. Indulge in the flavorful Chicken Delight Burger or savor the exotic taste of the Don Burger. Enjoy the tropical fusion of the Hawaiian Burger or relish the simplicity of the Plain & Simple option. Try our Steak Sandwich, a hearty meal packed with deliciousness. For those seeking a vegetarian delight, our Veggie Burger is a must-try. Explore our varied burger options, each crafted with unique flavors to tantalize your taste buds.",
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
            image:chips,    
            description:"Indulge in our crispy and flavorful fries, a perfect side to complement your meal. Available in various sizes – from the snack-friendly 'Small' to the generously portioned 'Family' – our golden fries promise a delightful crunch with every bite. Treat yourself to the perfect accompaniment for your cravings.",
            child: [
                { name: 'Small', price: '$5.50' },
                { name: 'Medium', price: '$8.50' },
                { name: 'Large', price: '$10.50' },
                { name: 'Family', price: '$17.50' },


            ]
        },
        {
            name: 'CHICKENS (Free range)',
            image:chicken,
            description:"Savor our tender and succulent chicken offerings, available in different portions to suit your appetite. Whether you prefer the hearty 'Whole Chicken,' the satisfying 'Half Chicken,' or the smaller 'Quarter Chicken,' our flavorful and perfectly cooked chicken options promise a delightful culinary experience. Taste the juicy tenderness in every bite.",
            child: [
                { name: 'Half Chicken', price: '$9.95' },
                { name: 'Quarter Chicken', price: '$6.95' },
                { name: 'Whole Chicken', price: '$17.50' },


            ]
        },
        {
            name: 'CHICKENS PACKS',
            image:CHICKENSPACKS,
            description:"Indulge in our delectable chicken packs, offering various combinations to satisfy your cravings. Whether it's the classic '1/4 Chicken & Chips' or the refreshing '1/4 Chicken & Salad, ' we cater to diverse preferences. Try our wholesome 'Family Meal Deal' or the extensive 'Family Mega Deal', perfect for sharing and creating cherished moments with loved ones. Discover the perfect chicken pack to suit your taste and appetite.",
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
            image:apitizers,
            description:"Savor our appetizing range of starters! Enjoy the crispy delight of our 'Cheesy Croquette' or try the savory 'Chicken Nuggets' available in sets of 6 or 12. Indulge in our vegetarian options such as 'Potato Cake' or relish the flavorful 'Roast Potato.' Dive into our delicious 'Sweet Chilli Tender' or the tantalizing 'Tasty Wing' for a burst of flavors that set the perfect tone for your meal.",
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
            image:chips,
            description:"Experience a flavor explosion with our Loaded Fries! Available in sizes to suit your craving – opt for 'Small' for a delightful snack, 'Large' to satisfy your hunger, or go for the 'Monster' size for an indulgent feast. Topped with tantalizing ingredients, it's a taste sensation you won't want to miss.",
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
                        <Image src={categoryDetails?.image} alt='10'  style={{ borderRadius: ' 5px 5px 5px 5px'  ,maxHeight:'25rem' , maxWidth:'100%' }} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 className='fw-bold mb-3'>
                            {categoryDetails?.name}</h2>

                        <p>{categoryDetails?.description}</p>


                        {/* <div>
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
                        </div> */}



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
