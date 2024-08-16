import React from 'react'

const CarouselMini = () => {
    // here we will display the cards
  return (
    <div className="carousel carousel-center bg-neutral h-[12rem] space-x-4 w-full mb-1 pr-20">
      <div className="carousel-item w-[18rem] bg-red-50 relative overflow-hidden rounded-lg z-[2]">
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black z-[5] from-40% to-100% flex justify-start items-end p-4'>
          <p className='text-xl font-bold text-white'>Beautiful villa</p>
        </div>
          <img className=' absolute top-0 left-0 w-full h-full object-cover' src="https://assets.architecturaldigest.in/photos/62f35b23da916b58c46f9d81/16:9/w_1615,h_908,c_limit/Architect%20Sanjay%20Puri%20crafts%20a%20sculptural,%20energy%20efficient%20desert%20home%20in%20Rajasthan.jpg" alt="home" />
      </div>
      <div className="carousel-item w-[18rem] bg-red-50 relative overflow-hidden rounded-lg z-[2]">
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black z-[5] from-40% to-100% flex justify-start items-end p-4'>
          <p className='text-xl font-bold text-white'>Beautiful villa</p>
        </div>
          <img className=' absolute top-0 left-0 w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWS7hmvKObteex4lznztX2EiVYp7Or2Qq_Q&s" alt="home" />
      </div>
      <div className="carousel-item w-[18rem] bg-red-50 relative overflow-hidden rounded-lg z-[2]">
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black z-[5] from-40% to-100% flex justify-start items-end p-4'>
          <p className='text-xl font-bold text-white'>Beautiful villa</p>
        </div>
          <img className=' absolute top-0 left-0 w-full h-full object-cover' src="https://sanjaypuriarchitects.com/wp-content/uploads/2021/01/Ishatvam-9-Ranchi-1.jpg" alt="home" />
      </div>
      <div className="carousel-item w-[18rem] bg-red-50 relative overflow-hidden rounded-lg z-[2]">
        <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black z-[5] from-40% to-100% flex justify-start items-end p-4'>
          <p className='text-xl font-bold text-white'>Beautiful villa</p>
        </div>
          <img className=' absolute top-0 left-0 w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGkSJ-Uu7et9KT8ndD_IaN4DM0_c6SwoAvw&s" alt="home" />
      </div>
        
       
    </div>
  )
}

export default CarouselMini