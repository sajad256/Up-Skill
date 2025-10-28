import React from "react";
import { vector4 } from "../../assets/Imges";

export default function DontWait() {
  return (
    <>
      <section className="mt-10">
        <div className="for-big-screen ">
          <div className="Main container lg:flex lg:justify-center">
            <div className="second bg-[linear-gradient(90deg,rgba(25,163,245,1)_15%,rgba(44,171,246,1)_77%)] rounded-xl md:flex md:justify-between lg:w-[800px] xl:w-[900px]">
              <div className="Main-info ">
                <div className="info container">
                  <h1 className="pt-4 font-semibold text-white md:text-lg md:mt-3">
                    Don't wait - take the next step toward your brighter future.
                    Your journey begins with one simple action today
                  </h1>
                </div>
                <div className="btn container pt-5">
                  <button className=" px-5 py-2 rounded-full bg-white text-[#2BAAF5]">
                    Start Learning
                  </button>
                </div>
              </div>
              <div className="img container pt-10  md:w-[300px]">
                <img src={vector4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
