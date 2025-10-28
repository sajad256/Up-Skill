import React from "react";
import { talentData } from "../Constant/Constant";
import { CgArrowTopRight } from "react-icons/cg";

export default function Talent() {
  return (
    <section className="mt-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl container mx-auto">
          We Bring Expertise and Guidance for Talent
        </h1>
        <p className="text-sm md:text-base mt-3 font-medium container mx-auto">
          Lead by experts working daily in technology, AI, and leadership —
          bringing real-world experience to every program.
        </p>
      </div>

      {/* Cards */}
      <div className="Main-for-cards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {talentData.map((data) => (
          <div
            key={data.id}
            className="relative h-80 rounded-2xl flex items-end overflow-hidden shadow-md group transition-transform duration-500 hover:scale-105 bg-cover bg-center bg-[url('/saidshah.png')] cursor-pointer"
          >
            {/* Overlay */}
            <div className="absolute inset-0  group-hover:bg-black/50 transition-all duration-300"></div>

            {/* Info Box */}
            <div className="relative z-10 w-full p-5 flex flex-col justify-end">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {data.title}
                  </h2>
                  <p className="text-sm mt-2 text-gray-200">{data.detail}</p>
                </div>
                <CgArrowTopRight className="text-white text-xl mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
