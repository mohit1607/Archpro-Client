import React from 'react'
import Card from '../components/Card'

const page = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[18rem] z-[5] relative mb-[6rem]'>
            <img className='w-full h-full object-cover' src="https://sanjaypuriarchitects.com/wp-content/uploads/2021/01/Ishatvam-9-Ranchi-1.jpg" alt="imagebanner" />
            <div className='z-[8] absolute -bottom-[6rem] left-[43.3%] flex justify-center items-center bg-white p-2 rounded-full'>
              <div className='w-[10rem] h-[10rem] rounded-full border flex justify-center items-center overflow-hidden'>
                  <img className='w-full h-full object-cover' src="https://sanjaypuriarchitects.com/wp-content/uploads/2021/01/Ishatvam-9-Ranchi-1.jpg" alt="imagebanner" />
              </div>
            </div>
        </div>
        <div className='w-full p-4'>
          <h1 className='text-3xl font-bold text-center mb-8'>Architect's Portfolio and Case studies</h1>
          <div className='px-[10%] w-full flex flex-wrap justify-between'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
    </div>
  )
}

export default page