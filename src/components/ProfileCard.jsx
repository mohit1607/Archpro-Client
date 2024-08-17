import React from 'react'
import { useNavigate } from 'react-router-dom'
import blank from '../assets/blank.png'

const ProfileCard = ({
  Name, 
  userName,
  email,
  imageUrl,
  uid
}) => {
  const navigate = useNavigate()

  console.log(uid)

  return (
    <div onClick={() => {
      navigate('/profile_read',{state: {
        Name, 
        userName,
        email,
        imageUrl,
        uid
      }})
    }} className='w-72 h-80 card rounded-md bg-transparent flex flex-col justify-between cursor-pointer'>
       <div className='w-full h-[60%] bg-transparent flex justify-center items-center'>
        <img src={imageUrl} className='rounded-r-full w-[300px] h-[180px] object-cover' alt="avatar" />
        {/* <Image src={archperson} width={'300'} height={'300'} objectFit='cover' className='rounded-r-full' /> */}
       </div>
       <div className='w-full h-[40%] bg-transparent flex flex-col items-start'>
        <p className='text-center font-semibold'>{Name}</p>
        <p className='text-center mb-3 text-xs'>{userName}</p>
        <button className='border border-gray-500 rounded-full px-4 py-2 text-xs hover:border-blue-900 hover:bg-blue-900 hover:text-white'>Follow</button>
       </div>
    </div>
  )
}

export default ProfileCard