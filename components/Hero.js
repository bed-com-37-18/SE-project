import React from "react";

function Hero(){
  return(
    <section class="relative bg-home-image h-screen bg-cover no-repeat bg-center top-0 py-5 bg-opacity-50">
<div className ="bg-gradient-to-br from-gray-900  to-transparent absolute bg-opacity-50 top-0 flex flex-col left-0 w-full h-full ">


         <div class="container py-20  flex flex-col items-center   mt-14 lg:mt-28">
               <div class="flex flex-1 flec-col items-center lg:items-start">
                    <h2 class="text-white text-3xl md:text-4 uppercase  lg:text-4xl tracking-widest text-center lg:text-left mb-6">Campus Facility Maintenance</h2>

               </div>
               <div>
               <p className="text-white justify-center text-lg text-center f lg:text-center mb-6">Creating a better environment for academic purposes</p>

               </div>
                <div className="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn bg-gradient-to-r from-gray-800 via-transparent text-white to-gray-800  animate-bounce hover:bg-white ">Get Started</button>
                </div>
</div>
</div>



    </section>






  );
}
export default Hero;
