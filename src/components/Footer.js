/* eslint-disable jsx-a11y/anchor-is-valid */
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
           Search by backend
          </li>
          
          <li className="font-light  hover:text-rose-500 hover:shadow-curren">
           grid/list style
          </li>
          <li className="font-light  hover:text-rose-500 hover:shadow-curren">
           update by backend
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
          <li className="font-light  hover:text-yellow-500 hover:shadow-curren">
            Team
          </li>
          <li className="font-light  hover:text-yellow-500 hover:shadow-curren">
           Locations
          </li>
          <li className="font-light hover:text-yellow-500 hover:shadow-curren">
          Privacy
          </li>
          <li className="font-light  hover:text-yellow-500 hover:shadow-curren">
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
          <a href="" className="w-8 h-8 border-2 items-center border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-rose-500 hover:border-rose-500">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png" alt="" className="h-5 pl-1"/>          </a>
          <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400">
          <img src="https://img.icons8.com/ios-glyphs/30/ffffff/twitter--v1.png" alt="" className="h-5 pl-1"/>
          </a>
          <a href="" className="w-8 h-8  border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600">
          <img src="https://img.icons8.com/material-sharp/24/ffffff/facebook-new.png" alt="" className="h-5 pl-1"/>
          </a>
        </div>
      </div>
    </div>

    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 ">
      <div className="sm:w-full px-4 md:w-1/6">
        <strong  className="font-bold mb-2">Frontend library</strong>
        <h3>
          Material UI, Material Design
        </h3>
        <h3>
          Tailwind CSS
        </h3>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Address</h6>
        <address className="not-italic mb-4 text-sm">
          Apadana 7th St.
          Gorgan, Iran
        </address>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 className="font-bold mb-2">Free movie suggest</h6>
        <p className="mb-4 text-sm">Use our movie site for <strong>MOVIE NIGHTS</strong>.
          All are my favorite movies</p>
      </div>
      <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <button className="px-4 py-2 bg-red-500 hover:bg-red-900 rounded text-white">EMAIL</button>
      </div>
    </div>
  </div>
</footer>
      </>
  );
}
