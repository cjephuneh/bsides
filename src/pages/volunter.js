import React from 'react'
import backgroundImage from '../assets/nairobi-kenya-skyline-flag-color.png';


function Volunteer() {
  return (

        <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
          `url(${backgroundImage})`,
          height: "40vh",
        }}
      >
        {/* <Head>
          <title>Bsides | Volunteer </title>
        </Head> */}
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl text-black font-extrabold bg-blue-300 rounded text-center">
            Volunteer
          </h1>
        </div>
        <div className='h-[500px]'>
      <h1 className="text-red-500  text-6xl mb-10 mt-16 text-center ">
      Want to be involved?
        </h1>
        <span className="text-center text-gray-500 text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        We are looking for individuals to help in a variety of areas – are you interested in lending a hand? If so, <br/>
        <span className="ml-[259px] text-gray-500  text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        use the form below to sign-up and we ll reach out to you when the conference nears.
        </span>
        </span>
        
        <button className="bg-green-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded ml-[750px] mt-[34px] " >
            <a href="https://www.eventbrite.com/e/bsides-nairobi-2021-tickets-166005001405" className="text-gray-100 text-lg leading-none">
                Register Now
            </a>
        </button>
      </div>
      </div>
    
  
  )
}

export default Volunteer
