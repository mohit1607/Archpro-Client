import React from 'react'

const ProfileCard = () => {
  return (
    <div className='w-72 h-80 card rounded-md bg-transparent flex flex-col justify-between'>
       <div className='w-full h-[60%] bg-transparent flex justify-center items-center'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XqlA_XHKY_lJu-eRHGnIFATEW4h3meNJ6A&s" className='rounded-r-full w-[300px] h-[180px] object-cover' alt="avatar" />
        {/* <Image src={archperson} width={'300'} height={'300'} objectFit='cover' className='rounded-r-full' /> */}
       </div>
       <div className='w-full h-[40%] bg-transparent flex flex-col items-start'>
        <p className='text-center font-semibold'>Poulo Peter san</p>
        <p className='text-center mb-3 text-xs'>Arch Pro Nice Solution Ltd.</p>
        <button className='border border-gray-500 rounded-full px-4 py-2 text-xs hover:border-blue-900 hover:bg-blue-900 hover:text-white'>Follow</button>
       </div>
    </div>
  )
}

export default ProfileCard