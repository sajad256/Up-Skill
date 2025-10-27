import React from "react";
import { courses } from "../Constant/Constant";

export default function Courses() {
  return (
    <section>
      <div className="Main-for-courses">
        <div className="flex justify-center">
          <div className="second grid justify-items-center xl:mx-10 pt-20 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {courses.map((data, index) => (
              <div
                key={index}
                className="Course grid justify-items-center border mt-5 rounded-3xl bg-white
               w-64 xl:w-[170px] xl:h-[170px] 2xl:h-[190px]"
              >
                <div className="Icons mt-10 border shadow-2xl px-4 py-3 rounded-full ">
                  <img src={data.icon} alt="" />
                </div>

                <div className="title flex justify-center items-center text-center  pb-3 pt-6 xl:pt-0">
                  <h1 className="font-bold text-xl xl:text-lg w-[200px] xl:w-40 leading-tight text-center xl:pt-3">
                    {data.title === "Accouting & Finance" ||
                    data.title === "AI Artificial Intelligence" ? (
                      // single-line render (no forced breaks)
                      <span>
                        {data.title === "Accouting & Finance"
                          ? "Accounting & Finance"
                          : "AI Artificial Intelligence"}
                      </span>
                    ) : (
                      // keep existing behavior for other titles
                      data.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))
                    )}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
