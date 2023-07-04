import React from 'react'
import backgroundImage from '../assets/nairobi-kenya-skyline-black_1.png';


function Speakers() {
  return (
    <><div>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "47vh",
        }}
      >
        {/* <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head> */}
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-white bg-green-600 rounded text-center">
            Speakers
          </h1>
        </div>
      </div>
      <h1 className="text-red-500  text-6xl mb-10 mt-16 text-center ">
        Want to be involved?
      </h1>
      <span className="text-center text-gray-500 text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        We are looking for speakers – are you interested? If so, <br />
        <span className="ml-[259px] text-gray-500  text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
          click the button below to submit your papers.
        </span>
      </span>

      <button className="bg-green-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded ml-[700px] mt-[34px] absolute">
        <a href="https://www.eventbrite.com/e/bsides-nairobi-2021-tickets-166005001405" className="text-gray-100 text-lg leading-none">
          Call for papers 
        </a>
      </button>
    </div>
    
    </>

  )
}

export default Speakers
