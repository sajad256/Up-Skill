import React from "react";
import {
  footerlinks,
  Services,
  HelpfullLinks,
  Information,
  Location,
} from "../Constant/Constant";

export default function Footer() {
  return (
    <>
      <footer className="mt-20 bg-[linear-gradient(170deg,rgba(249,254,251,1)_0%,rgba(217,240,253,1)_96%)]">
        <div className="Main-for-all-for-flex 2xl:flex 2xl:justify-center">
          <div className="lg:flex">
            {footerlinks.map((data) => {
              return (
                <div className="main-for-info-icon-scanner mx-3 md:mx-10 lg:mx-1 xl:mx-24 pt-3  ">
                  <div className="info lg:pt-8 ">
                    <h1 className="font-semibold md:text-xl md:w-[400px] lg:text-lg">
                      {data.title}
                    </h1>
                  </div>
                  <div className="Icons flex gap-2 mt-4">
                    <img src={data.facebookIcon} alt="" />
                    <img src={data.LinkedinIcon} alt="" />
                    <img src={data.Instagram} alt="" />
                  </div>
                  <div className="scanner mt-5">
                    <img src={data.Scanner} alt="" />
                  </div>
                </div>
              );
            })}
            <div className="Main-for-all-Nav-links md:flex items-center justify-evenly">
              <div className="for-mobile-flex flex">
                {/* For Services */}
                <div className="Services ">
                  {Services.map((data) => {
                    return (
                      <div>
                        <ul className="text-gray-600 container mt-6">
                          <h1 className="font-bold text-black">{data.title}</h1>
                          <li className="mt-2 font-medium">{data.cleaning}</li>
                          <li className="mt-2 font-medium">{data.house}</li>
                          <li className="mt-2 font-medium">{data.apartment}</li>
                          <li className="mt-2 font-medium">
                            {data.commercial}
                          </li>
                          <li className="mt-1 font-medium">
                            {data.springcenter}
                          </li>
                          <li className="mt-1 font-medium">
                            {data.partnership}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {/* For Helpfull Links */}
                <div className="Helpfull-Links">
                  {HelpfullLinks.map((data) => {
                    return (
                      <div>
                        <ul className="text-gray-600 container mt-6">
                          <h1 className="font-bold text-black">{data.title}</h1>
                          <li className="mt-2 font-medium">{data.aboutus}</li>
                          <li className="mt-2 font-medium">{data.aries}</li>
                          <li className="mt-2 font-medium">
                            {data.workwithus}
                          </li>
                          <li className="mt-2 font-medium">{data.reviews}</li>
                          <li className="mt-2 font-medium">{data.contact}</li>
                          <li className="mt-2 font-medium">
                            {data.partnership}
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="for-mobile-flex flex items-center">
                {/* For Information */}
                <div className="Information">
                  {Information.map((data) => {
                    return (
                      <div>
                        <ul className="text-gray-600 container mt-6 md:mt-0">
                          <h1 className="font-bold text-black">{data.title}</h1>
                          <li className="mt-2 font-medium">{data.blog}</li>
                          <li className="mt-2 font-medium">{data.help}</li>
                          <li className="mt-2 font-medium">{data.reviews}</li>
                          <li className="mt-2 font-medium">{data.job}</li>
                          <li className="mt-2 font-medium">{data.aboutus}</li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {/* For Location */}
                <div className="Location-and-calls pb-12 md:pt-4">
                  {Location.map((data) => {
                    return (
                      <div>
                        <div className="info">
                          <h1 className="font-bold text-black">{data.title}</h1>
                        </div>
                        <div className="location flex items-center gap-2">
                          <img src={data.locationIcon} alt="" />
                          <h1 className="mt-1 font-medium text-sm border md:w-[140px]">
                            {data.location}
                          </h1>
                        </div>
                        <div className="phone-call flex items-center gap-2">
                          <img className="mt-4" src={data.phoneIcon} alt="" />
                          <h1 className="mt-4 font-medium">{data.phone}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="last-footer mt-5 mx-3 md:mx-10 flex justify-between 2xl:justify-center 2xl:gap-96">
          <h1>@Copyright All rights reserved. 2025</h1>
          <h1 className="font-medium">
            Develop By{" "}
            <a
              className="font-extrabold text-[#2BAAF5]"
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              Sajad Danish
            </a>
          </h1>
        </div>
      </footer>
    </>
  );
}
