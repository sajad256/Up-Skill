import React from "react";
import {
  Navbar,
  Hero,
  Courses,
  TransformingSkills,
  WhoweAre,
  Talent,
  OurStudents,
} from "./Components/index";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="bg-[#DFF2FD]">
        <Courses />
      </div>
      <div className="bg-[#DFF2FD] xl:h-[720px] 2xl:h-[750px]">
        <TransformingSkills />
      </div>
      <div className="bg-[#DFF2FD]">
        <WhoweAre />
      </div>
      <div>
        <Talent />
      </div>
      <div className="bg-[#DFF2FD]">
        <OurStudents />
      </div>
    </>
  );
}
