import React from 'react';
import backgroundImage from '../assets/nairobi-kenya-skyline-flag-color.png';

function CFP() {
  return (
    <div className="items-center">
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "40vh",
        }}
      >
        <h1 className="text-5xl text-black font-extrabold bg-green-400 rounded text-center">
          Call For Papers
        </h1>
      </div>
      <div className="h-auto absolute flex flex-col items-center justify-center">
        <h1 className="text-red-500 text-6xl mb-10 mt-16">
          2023 Call for Papers
        </h1>
        <span className="text-gray-500 text-[23px] leading-[42px] space-x-4 block mb-2 items-center tracking-wide">
          CFP is now Open
        </span>
        <span className="text-gray-500 text-[23px] leading-[42px] space-x-4 mb-2 flex tracking-wide">
          Applications close 15 August 2023 @ 9pm AEST.
        </span>
        <span className="text-gray-500 text-[23px] leading-[42px] space-x-4 mb-2 flex tracking-wide">
          Notifications will be sent to Applicants: 30 August - 5 September, 2023
        </span>
        <button className="bg-green-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded mt-4">
          <a href="https://www.eventbrite.com/e/bsides-nairobi-2021-tickets-166005001405" className="text-gray-100 text-lg leading-none">
            Register Now
          </a>
        </button>
      </div>
    </div>
  );
}

export default CFP;
