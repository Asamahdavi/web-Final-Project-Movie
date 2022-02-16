import "../style/Header.css";
import React, { useState } from "react";
import AddMovieModal from "./AddMovieModal";

function Header() {

  const [active, setActive] = useState("nav-menu");
  const [icon, setIcon] = useState("nav-toggler");
  const [search,setSearch]=useState("");

  const searchHandler=(inputs)=>{
  
    setSearch(inputs)
    console.log(search)
  }
  const navToggle = () => {
    if (active === "nav-menu") {
      setActive("nav-menu nav-active");
    } else setActive("nav-menu");

    if (icon === "nav-toggler") {
      setIcon("nav-toggler toggle");
    } else setIcon("nav-toggler");
  };
  return (
    <>
      <div className="divHeader sticky flex justify-between h-32 items-center  shadow-md z-0">
        <div className=" pl-44 pt-8 pb-7 font-sans text-cyan-800  text-4xl">
          Welcom to <span className="text-white font-sans ">MOVIES</span>
        </div>

        <div className="flex justify-end ">
          <nav className="nav  ">
            <ul className={active}>
              <a href="/">
              <li className="nav-item font-sans hover:bg-teal-500  text-cyan-900 shadow-2xl shadow-neutral-700  px-14 py-2 top-5 rounded-3xl ">
              
                Home
                
              </li>
              </a>
              <li className="nav-item">
                <div className="pb-1 pt-2 sm:left-0 sm:pl-1 sm:ml-1 left-96 pl-96 ml-96 py-5 ">
                  <AddMovieModal />
                </div>
              </li>
              <li className="nav-item font-sans pb-2 pt-4 ">
                <div className=" grid grid-cols-2 pr-24">
                  
                  <input
                    className="  shadow-neutral-700 shadow-2xl focus:outline-none text-cyan-900  md:w-36 sm:w-24 rounded-l-3xl h-10 placeholder:text-cyan-900 font-sans "
                    type="text"
                    
                    name="search"
                    placeholder="  search ..."
                    onChange={e => searchHandler(e.target.value)}
                    value={search}
                  />
                  <a className=" w-9 rounded-r-3xl bg-white flex items-center justify-center   hover:bg-cyan-600 hover:w-9 " href={`/movie/search/${search}`}
                   >
                  <img className="w-4" src="https://img.icons8.com/ios-filled/50/26e07f/search--v1.png" alt=""/>
                  </a>

                </div>
              </li>
            </ul>
            <div onClick={navToggle} className={icon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
