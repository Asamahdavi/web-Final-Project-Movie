import "../style/Footer.css";


export default function Footer() {
  return (
    <>
    <footer className="footer-1 overflow-hidden font-sans font-light bg-cyan-900 py-8 sm:py-12">
  <div className="container left-20  mx-auto px-4">
    <div className="sm:flex  sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4  sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 className=" text-xl font-bold mb-6">Features</h5>
        <ul className=" list-none grid grid-rows-3 footer-links">
          <li className="font-light  hover:text-rose-500 hover:shadow-curren" >
           Cool stuff
          </li>
          
          <li className="font-light  hover:text-rose-500 hover:shadow-curren">
           Stuff for developers
          </li>
          <li className="font-light  hover:text-rose-500 hover:shadow-curren">
           Another one
          </li>
          
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none  grid grid-rows-3">
          <li className="font-light  hover:text-purple-600 hover:shadow-curren">
            Resource
          </li>
          <li className="font-light  hover:text-purple-600 hover:shadow-curren">
           Resource name
          </li>
          <li className="font-light  hover:text-purple-600 hover:shadow-curren">
           Final resource
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">About</h5>
        <ul className="list-none grid grid-rows-3">
          <li className="font-light  hover:text-blue-200 hover:shadow-curren">
            Team
          </li>
          <li className="font-light  hover:text-blue-200 hover:shadow-curren">
           Locations
          </li>
          <li className="font-light hover:text-blue-200 hover:shadow-curren">
          Privacy
          </li>
          <li className="font-light  hover:text-blue-200 hover:shadow-curren">
          Terms
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none grid grid-rows-3">
          <li className="font-light  hover:text-orange-500 hover:shadow-curren">
          Support
          </li>
          <li className="font-light  hover:text-orange-500 hover:shadow-curren">Help Center
          </li>
          <li className="font-light  hover:text-orange-500 hover:shadow-curren">
           Contact Us
          </li>
        </ul>
      </div>
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 ">
      <div className="sm:w-full px-4 md:w-1/6">
        <strong>FWR</strong>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Address</h6>
        <address className="not-italic mb-4 text-sm">
          123 6th St.
          Melbourne, FL 32904
        </address>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Free Resources</h6>
        <p className="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.
          All are MIT License</p>
      </div>
      <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button className="px-4 py-2 bg-red-500 hover:bg-red-900 rounded text-white">Get Started</button>
      </div>
    </div>
  </div>
</footer>
      </>
  );
}
