import React from 'react'

function Registration() {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/nairobi-kenya-skyline-flag-color.png')",
          height: "40vh",
        }}
      >
        {/* <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head> */}
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-5xl text-black font-extrabold bg-blue-300 rounded text-center">
            Registration
          </h1>
        </div>
      </div>

      <div className='h-[500px]'>
      <h1 className="text-red-500 font-semibold text-4xl mb-10 mt-16 text-center ">
        Registration - Bsides Nairobi
        </h1>
        <span className="ml-[250px] text-gray-500 text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        Unable to expense other, costly conferences?
        </span>
        <span className="ml-[250px] text-gray-500  text-[23px] leading-[42px] space-x-4 block mb-2  tracking-wide">
        No worries, at BSidesNYC we strive to make the cost of attendance minimal.
        </span>
        <span className="ml-[250px] text-gray-500  text-[23px] leading-[42px] space-x-4 block mb-20  tracking-wide">
        Want to attend our awesome conference? Use this button to get a ticket.
        </span>
        <button className="bg-green-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded ml-[750px] mt-[-34px] absolute" >
            <a href="https://www.eventbrite.com/e/bsides-nairobi-2021-tickets-166005001405" className="text-gray-100 text-lg leading-none">
                Register Now
            </a>
        </button>
      </div>
    </div>
  )
}

export default Registration
