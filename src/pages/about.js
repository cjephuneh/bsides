import React from 'react';
// import Footer from '../../components/footer'
import Lawrence from "../assets/lawrence.webp"
import Ikua from "../assets/ikua.jpg"
import soita from "../assets/soita.jpg"
import backgroundImage from '../assets/nairobi-kenya-skyline-flag-color.png';


function About() {
  return (
    <div>
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
        
      </div>

      <div className="h-auto">
        <h1 className="text-red-500 font-semibold text-4xl mb-10 mt-16 text-center">
          About - Bsides Nairobi
        </h1>
        <span className="ml-4 md:ml-[150px] text-gray-500 font-semibold text-[23px] leading-[42px] space-x-4 block mb-20 tracking-wide">
          Security BSides is a non-profit, community-driven event built for and by members 
          of the information security community.<br/> This creates opportunities for individuals 
          to both present and participate in an intimate atmosphere that encourages <br/> innovation, 
          inclusivity, networking, and collaboration.<br/> Our aim is to help develop the Information 
          Security community in Kenya. <br/> 
        </span>

        <span className="mt-5 text-gray-500 font-semibold text-[23px] ml-4 md:ml-[150px] space-x-4 block mb-20 leading-8 tracking-wide">
          If you would like to learn more or get involved, please 
          email <a href="mailto:info@bsidesnairobi.ke" className="text-green-500 underline">
          info@bsidesnairobi.ke</a>.
        </span>

        <div className="ml-4 md:ml-[220px] text-gray-500 font-medium leading-8 text-2xl
        space-x-4 block mb-20 tracking-wide mt-[20px]">
          <ul className="list-disc">
            <li>Meet our Organizing Committee</li>
            <li className="underline">Meet our Review Board</li>
            <li>Meet our Mentors (coming soon)</li>
            <li>Thank you to all our volunteers (coming soon)</li>
          </ul>
        </div>

        <div className="ml-4 md:ml-[150px] flex-col mb-12">
          <p className="text-gray-500 text-3xl font-semibold">Contact Us:</p>

          <span className="flex text-gray-500 text-2xl">General Enquiries: info@bsidesnairobi.ke</span>
          <span className="text-gray-500 text-2xl">Sponsorship: info@bsidesnairobi.ke</span>
        </div>

        <h1 className="text-red-500 text-6xl mb-10 mt-16 text-center">
          Meet our Founders
        </h1>
        <div className="bg-gray-100 p-8 flex-col space-y-8 md:h-[800px] absolute w-full">
          <div className="bg-gray-100 p-8 flex-col space-y-8 h-auto md:w-[500px] md:mx-auto">
            <div className="w-full flex ml-4 md:ml-[150px] mb-10">
              <img
                src={Lawrence}
                alt="Sponsor 1"
               
                width={100}
                height={100}
                className="rounded-full h-40 w-40 object-cover"
              />
              <div className="pl-8 flex-grow w-full ml-4 md:ml-[200px] mt-4">
                <h2 className="text-3xl font-bold mb-4">Lawrence Muchilwa</h2>
                <p className="text-lg font-medium">
                  Cybersecurity engineering manager with a focus on cyber defend and prevent operations. He leads a cybersecurity operations center and researches threat intelligence and forensics.
                </p>
              </div>
            </div>
            <div className="w-full flex ml-4 md:ml-[150px] mb-10">
              <img
                src={soita}
                alt="Sponsor 1"
                width={100}
                height={100}
                className="rounded-full h-40 w-40 object-cover"
              />
              <div className="pl-8 flex-grow w-full ml-4 md:ml-[200px] mt-4">
                <h2 className="text-3xl font-bold mb-4">Hillary Soita</h2>
                <p className="text-lg font-medium">
                  Cybersecurity engineering manager with a focus on cyber defend and prevent operations. He leads a cybersecurity operations center and researches threat intelligence and forensics.
                </p>
              </div>
            </div>
            <div className="w-full flex ml-4 md:ml-[150px] mb-10">
              <img
                src={Ikua}
                alt="Sponsor 1"
                width={100}
                height={100}
                className="rounded-full h-40 w-40 object-cover"
              />
              <div className="pl-8 flex-grow w-full ml-4 md:ml-[200px] mt-4">
                <h2 className="text-3xl font-bold mb-4">Michael Ikua</h2>
                <p className="text-lg font-medium">
                  Cybersecurity engineering manager with a focus on cyber defend and prevent operations. He leads a cybersecurity operations center and researches threat intelligence and forensics.
                </p>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    
  );
}

export default About;