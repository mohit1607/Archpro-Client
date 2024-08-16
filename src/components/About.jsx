import React from 'react'

const About = () => {
  return (
    <div className='w-full px-[10%] py-8 text-center'>
        {/* bento design here */}
        <h2 className='mb-6 text-3xl '>Explore the Aesthetics according to your taste</h2>
        <div className='h-[110vh] bg-red-400 relative overflow-hidden mb-8'>
            <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black'></div>
            <img className='w-full h-full object-cover' src="https://assets.onejswhomes.com/kanchipuram_home_design_7153099ef0/kanchipuram_home_design_7153099ef0.jpeg" alt="" />
        </div>
        <div className='w-full flex justify-center items-center gap-8'>
            <div className='w-[50%] h-[30rem] bg-red-400'>
                <img className='w-full h-full object-cover' src="https://assets.architecturaldigest.in/photos/654a052a873b6243681f20f3/master/w_1600%2Cc_limit/1%2520-%25202.jpeg" alt="" />
            </div>
            <div className='w-[50%] h-[30rem] bg-red-400'>
                <img className='w-full h-full object-cover' src="https://lh7-us.googleusercontent.com/ecCksIkHeIcCExP-mEptvZVnutekhaRZdd4bvhV2TdCIL1llIz_csSzA9hG2UtFFuVvjhTzpPWbLgXhHl2JxL1DhAFRb7M2KRQRnBW1NQD6a2YgZHNmpdZlrOPB_EYTTXVjXSG06Nb0Ee1HmFCuxkRk" alt="" />
            </div>
        </div>
    </div>    
  )
}

export default About