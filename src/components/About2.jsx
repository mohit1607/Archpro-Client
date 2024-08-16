import React from 'react'

const About2 = () => {
  return (
    <div className='w-full px-[10%] mt-8'>
        <div className='w-full pt-8 pb-16 flex justify-between items-center gap-8'>
            <div className='bg w-[25rem] h-[25rem] flex flex-col justify-center gap-4'>
                <h3 className='text-4xl font-bold'>About Us</h3>
                <p className='pr-12 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate animi sequi amet, sit perferendis reprehenderit illo magnam! Molestiae, dignissimos quas.</p>
            </div>
            <div className='bg-cyan-400 w-[40rem] h-[25rem]'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/mD9Uu3RJOks?si=kexqHt7FALH1CWnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  )
}

export default About2