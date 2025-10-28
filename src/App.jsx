import React from "react";
import {
  Navbar,
  Hero,
  Courses,
  TransformingSkills,
  WhoweAre,
  Talent,
  OurStudents,
  DontWait,
  Footer,
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
      <div className="bg-[linear-gradient(170deg,rgba(249,254,251,1)_0%,rgba(217,240,253,1)_96%)]">
        <Courses />
      </div>
      <div className="bg-[linear-gradient(170deg,rgba(249,254,251,1)_0%,rgba(217,240,253,1)_96%)] xl:h-[720px] 2xl:h-[750px]">
        <TransformingSkills />
      </div>
      <div className="bg-[linear-gradient(170deg,rgba(249,254,251,1)_0%,rgba(217,240,253,1)_96%)]">
        <WhoweAre />
      </div>
      <div>
        <Talent />
      </div>
      <div className="bg-[linear-gradient(170deg,rgba(249,254,251,1)_0%,rgba(217,240,253,1)_96%)]">
        <OurStudents />
      </div>
      <div>
        <DontWait />
      </div>
      <div >
        <Footer />
      </div>
    </>
  );
}
