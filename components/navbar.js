import React from "react";
import Image from "next/image";
import logo from "../public/images/UnimaLogo.png"



function Navbar()
{
  // const menu = document.getElementByID('nav-toggle');
  //
  //     function burgerMenu(){
  //       document.getElementByID("nav-content").classList.toggle("hidden")
  //     }

  return(
    <>
      <div>
      <div>
          <nav className ="flex items-center justify-between flex-wrap bg-gradient-to-l from-gray-900 via-transparent  to-gray-900  p-3 fixed w-full z-10 top-0 pin-t">
          <div className="flex items-center flex-shrink-0 text-white mr-6">  </div>
            <img src="/images/UnimaLogo.png" className ="w-18 h-12"  />
              <div className ="block lg:hidden">
                  <button  id="nav-toggle" className ="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:white">
                  <svg
                  xmins ="http://www.w3.org/2000/svg"
                  fill ="none"
                  viewBox ="0 0 24 24"
                  stroke ="currentColor"
                  className="w-8 h-g"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 18h16"
                    />
                    </svg>
                  </button>
              </div>

          <div className = "flex-grow w-full lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 ">
          <ul className ="list-reset text-gray-800 gap-3  lg:flex  justify-end flex-1 items-center" id="nav-content">
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Home</a>
            </li>
        
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Contact</a>
            </li>
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Login</a>
            </li>
          </ul>
          </div>
          </nav>
          </div>
      </div>
    </>
  );
}

export default Navbar;
