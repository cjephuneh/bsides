
 const Footer = () => {
  return (
    <footer className="bg-gray-800  w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">About Us</h4>
            <p className="text-gray-400">Security BSides Nairobi is a community-driven event in Kenya, fostering innovation, inclusivity, networking, and collaboration in information security.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul>
              <li><a href="/"><h1 className="text-gray-400 hover:text-white">Home</h1></a></li>
              {/* <li><a href="/about"><h1 className="text-gray-400 hover:text-white">About</h1></a></li> */}
              {/* <li><a href="/Volunteer"><h1 className="text-gray-400 hover:text-white">Volunteer</h1></a></li> */}
              <li><a href="/CFP"><h1 className="text-gray-400 hover:text-white">CFP</h1></a></li>
              {/* <li><a href="/code-of-conduct"><h1 className="text-gray-400 hover:text-white">Code of Conduct</h1></a></li> */}
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <p className="text-gray-400">Email: info@bsidesnairobi.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-wrap justify-between">
          <div className="w-full text-center md:w-auto md:text-left">
            <p className="text-gray-400">&copy; 2023 BSides Nairobi. All Rights Reserved.</p>
          </div>
          <div className="w-full text-center md:w-auto md:text-right">
            <ul>
              <li><a href="/terms"><h1 className="text-gray-400 hover:text-white">Terms &amp; Conditions</h1></a></li>
              <li><a href="/privacy"><h1 className="text-gray-400 hover:text-white">Privacy Policy</h1></a></li>
              <li><a href="/copyright"><h1 className="text-gray-400 hover:text-white">Copyright</h1></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
 export default Footer