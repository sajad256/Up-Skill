import React, { useState } from "react";
import { whoweAre, accordionData } from "../Constant/Constant";
import { invitedcoma } from "../../assets/Imges";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function WhoweAre() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="2xl:flex 2xl:justify-center">
        <section className="py-10 lg:flex">
          <div className="container mx-auto px-4">
            {/* Background Image with Info */}
            <div className="relative top-[230px] md:top-[310px] z-50 container">
              <img
                className="px-2 py-3  bg-white rounded-full"
                src={invitedcoma}
                alt=""
              />
            </div>
            <div className="Saidshah relative bg-cover bg-center bg-no-repeat bg-[url('/saidshah.png')] h-[400px] md:h-[500px] rounded-xl flex items-end pb-2">
              <div className="info-of-saidshah w-full bg-white/90 md:w-[300px] backdrop-blur-sm p-4 rounded-xl shadow-lg mx-2">
                {whoweAre.map((data, index) => (
                  <>
                    <div key={index} className="text-center md:text-left">
                      <h1 className="text-lg font-bold">{data.name}</h1>
                      <h2 className="text-sm text-gray-600">{data.job}</h2>
                      <p className="text-xs md:text-sm mt-2">{data.detail}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="w-full max-w-2xl container mt-8 lg:mt-0 space-y-4">
            <div>
              {/* Who We Are Section */}
              <div className="text-center lg:text-left mt-10 lg:mt-0">
                <div className="for-flex-the-who-we-are flex justify-center lg:justify-start">
                  <div className="border-2 border-[#A5DAFC] px-3 font-semibold rounded-full py-1">
                    <h1 className="text-sm ">Who We Are</h1>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mt-6 lg:text-3xl xl:text-5xl 2xl:text-4xl">
                  Learn More About Upskill Learning Center
                </h2>
              </div>
            </div>
            {accordionData.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-semibold  bg-white hover:bg-gray-100 transition"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span className=" border px-2 py-2 rounded-full">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed ">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
            <div className="btn">
              <button className="px-4 py-3 rounded-full bg-[#1CA4F5] text-sm text-white font-semibold">
                More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
