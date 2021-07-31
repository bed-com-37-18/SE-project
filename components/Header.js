import React from "react"


function Header(){

    return(
<>
      <div>

      <div className =" relative z-10 w-full bg-gray-900 shadow-sm bg-opacity-80 bg-clip-padding blur-backdrop-filter">
      <nav className ="relative flex items-center justify-between w-full max-w-screen-xl px-3 py-3 mx-auto text-white lg:px-2 lg:shadow-none">
           <div className="absolute insert-0 z-0 block w-full h-full shadow-md opacity-50 lg:hidden"></div>
           <button className ="z-10 w-10 sm:w-12 md:w-16 lg:hidden opacity-90 focus:outline-none">
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


          <ul className ="list-reset text-gray-800 gap-3 font-bold lg:flex  justify-end flex-1 items-center">
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Home</a>
            </li>
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">About</a>
            </li>
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Contact</a>
            </li>
            <li className="mr-6">
              <a href ="" className ="inline-block py-2 px-2 text-white no-underline hover:bg-gray-800">Login</a>
            </li>
          </ul>

      </nav>


      </div>

  </div>
  </>

    );
}
export default Header;
