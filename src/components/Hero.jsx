import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
    <div
    className="hero min-h-[100vh]"
    style={{
      backgroundImage: "url(https://st.hzcdn.com/simgs/pictures/gardens/bellad-house-khosla-associates-img~16f1219908aea81c_14-2974-1-db4b483.jpg)",
    }}>
    <div className="hero-overlay bg-black w-full bg-opacity-60 over"></div>
    <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-[#D2D4E0]">Hello there</h1>
        <p className="mb-5 text-[#D2D4E0] font-semibold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <label className="input input-bordered border-none flex items-center gap-2 bg-white focus:outline-none">
          <input type="text" className="grow focus:outline-none" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
        </label>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero