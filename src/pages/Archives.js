import React from 'react'
import Footer from './Footer';
import Sponsor from "../assets/shehacks.png"
import AfriHackon from '../assets/africahackon.png'
import backgroundImage from '../assets/nairobi-kenya-skyline-flag-color.png';



function Archives() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})`, height: "50vh" }}>
        {/* <Head>
          <title>Welcome to Bsides Nairobi</title>
        </Head> */}
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold text-black bg-green-600 rounded text-center">Welcome to Bsides Nairobi</h1>
        </div>
      </div>
      <div class="bg-white p-8  mx-[200px]  h-[400px] items-center mt-10 ">
        <h1 class="text-green-400 font-bold text-5xl mt-10 mb-10 ">
        Archives - BSides Nairobi
        </h1>
          <p class="text-2xl text-gray-500 font-semibold mb-10">
            2022 - <a href="/conference" class="underline">Conference</a> - <a href="/speakers" class="underline">Speakers</a>
          </p>
        </div>

        <div className="bg-[#2e383a] p-12 text-white text-2xl">
        <h1 className="text-4xl font-bold mb-8">What is BSides?</h1>
        <p className="leading-7 text-white">
          The Security BSides brand is known all over the world for being a community 
          driven event and being different. BSides Nairobi want to uphold those values
           which is why this is also a non-for-profit event, 100% volunteer run put 
           on by and for the community. BSides is a conference that provides a platform 
           for first-time speakers, students, new and experienced professionals an 
           environment to present their work in a friendly and welcoming environment.
            We welcome all participants.
        </p>
        <h1 className="text-4xl font-bold mt-12 mb-20">Theme: Data Breaches</h1>
        <p className="leading-9 text-2xl mb-24">
          In recent years there has been a rise in data breaches affecting organizations 
          across various industries and continents and Kenya is no exception. Data breaches
           have far-reaching consequences, undermining trust and privacy and exposing 
           sensitive information to malicious actors. Data breaches continue to present a 
           challenge to organizations. How do you prevent one? What do you do in the event
            a data breach occurs? What steps do you take in order to successfully recover?
             All these are questions that linger when we see headlines of breaches. This year’s 
             conference is aimed at having these conversations, sharing knowledge and creating 
             a collaborative environment for discussing best practices on preparedness and 
             handling of data breaches.
        </p>
      </div>


      <div class="flex flex-wrap items-center justify-center py-12 h-[600px]">
        <div class="w-full md:w-1/2 px-4">
          <h2 class="text-4xl font-semibold mb-6 mt-[20px] ml-8">
            2023 Sponsors/Donations/Friends
          </h2>
          <p class="text-xl leading-7 mb-8 ml-8 block">
            A big thank you to all the companies and individuals who have sponsored,
            donated items and time and who have stood by us since we started in 2021.
            BSides Nairobi could not happen without your support.
          </p>

          <p class="text-xl leading-7 mb-8 ml-8 block">
            To Help us impact the community through sponsorship 
            
            <span class="ml-2 font-normal">
            <a href="#" class="text-blue-500 underline">
            click here
            </a>
          </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
            <div className="w-1/3 px-4 py-2">
              <img src={Sponsor} alt="Sponsor 1" width={80} height={80} />
            </div>
            <div className="w-1/3 px-4 py-2">
              <img src={Sponsor} alt="Sponsor 2" width={80} height={80} />
            </div>
            <div className="w-1/3 px-4 py-2">
              <img src={Sponsor} alt="Sponsor 3" width={80} height={80} />
            </div>
            <div className="w-1/3 px-4 py-2">
              <img src={AfriHackon} alt="Sponsor 4" width={80} height={80} />
            </div>
            <div className="w-1/3 px-4 py-2">
              <img src={AfriHackon} alt="Sponsor 5" width={80} height={80} />
            </div>
            <div className="w-1/3 px-4 py-2">
              <img src={AfriHackon} alt="Sponsor 6" width={80} height={80} />
            </div>
          </div>
    
          </div>
          
    <Footer/>
    </div>
  )
}

export default Archives
