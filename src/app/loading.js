import React from 'react'
import image from '../assets/Images/XOsX.gif'
import Image from 'next/image'
function loading() {
  return (
    <div>
      <div className='w-100 d-flex justify-content-center align-items-center container-fluid'>
        
        <Image src={image}   alt='loading...'/>
      </div>
    </div>
  )
}

export default loading
