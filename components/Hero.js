function Hero(){
  return(
    <section class="realtive">
         <div class="container flex flex-col-reverse items-center gap-12 mt-14 lg:mt-28">
               <div class="flex flex-1 flec-col items-center lg:items-start">
                    <h2 class="text-blue-900 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold">Welcome To Campus Facility Maintenance System</h2>
                    </div>
               </div>
               <div>
               <p className="text-grey-800 justify-center text-lg text-center font-bold lg:text-center mb-6"> Campus Facility Maintenance lets you report any issue about our infrastructure</p>

               </div>
                <div className="flex justify-center flex-wrap gap-6">
                <button type="button" class="btn btn-purple font-bold hover:bg-white hover:text-black">Get Started</button>
                <button type="button" class="btn btn-white font-bold hover:bg-purple-400 hover:text-white">Get Started</button>
                </div>
            


    </section>






  );
}
export default Hero;
