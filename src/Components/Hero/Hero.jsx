import React from "react";

export default function Hero() {
  return (
    <>
      <section className="h-[400px] lg:h-[500px] xl:h-[600px] bg-cover bg-center bg-no-repeat bg-[url('/hero-img.jpg')] mt-4">
        <div className="info flex justify-center items-center pt-10 md:pt-24 lg:pt-36">
          <h1 className="text-white font-bold text-3xl text-center md:w-[500px] lg:w-[650px] lg:text-4xl xl:w-[970px] xl:text-5xl xl:leading-snug">
            Empowering Afghanistan's Smartest Minds Through Didital Skills
          </h1>
        </div>
        {/* Search Input */}
        <div className="search-input flex items-center justify-center mt-6 container">
          <div className="flex rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className=" px-3 py-3 md:px-16 text-sm text-gray-700 focus:outline-none"
            />
            <button className="bg-[#0199F4] text-white md:px-3 md:py-3 text-xs md:text-base font-medium hover:bg-blue-600 transition-all duration-300">
              Find Best Course
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
