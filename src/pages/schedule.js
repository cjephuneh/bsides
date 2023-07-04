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
            2023 Schedule
          </h1>
        </div>
      </div>

      <h1 className="text-red-500  text-6xl mb-10 mt-16 text-center ">
        Check here after a while
      </h1>
      {/* <span className="ml-[250px] text-gray-500 text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        We are looking for individuals to help in a variety of areas – are you interested in lending a hand? If so, <br />
        <span className="ml-[259px] text-gray-500  text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
          use the form below to sign-up and we'll reach out to you when the conference nears.
        </span>
      </span> */}

      {/* <button className="bg-green-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded ml-[750px] mt-[34px] absolute">
        <a href="https://www.eventbrite.com/e/bsides-nairobi-2021-tickets-166005001405" className="text-gray-100 text-lg leading-none">
          Register Now
        </a>
      </button> */}
    </div>

    </>
     
  )
}

export default Speakers
