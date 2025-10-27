import React from "react";
import { Navbar, Hero, Courses } from "./Components/index";

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
    </>
  );
}
