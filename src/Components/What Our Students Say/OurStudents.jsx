import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { studentsComment } from "../Constant/Constant";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function OurStudents() {
  const swiperRef = useRef(null);

  return (
    <>
      <section className="mt-10">
        <div className="for-bigger-screen-flex">
          <div className="Testimonials flex justify-center pt-10">
            <h1 className="text-center font-semibold border-2 border-[#3EB2F7] px-2 py-1 rounded-full">
              Testimonials 🥳
            </h1>
          </div>

          <div className="info flex justify-center pt-4">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
              What Our Students Say
            </h1>
          </div>

          {/* Swiper for cards */}
          <div className="Main-for-boxses container mt-5">
            <Swiper
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 2 },
              }}
              className="pb-10"
            >
              {studentsComment.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className="box bg-white mt-3 rounded-2xl md:flex md:justify-between">
                    <div className="md:w-[450px]">
                      <div className="for-flex-the-Icons flex items-center justify-between container pt-3 md:pt-0 md:h-[100px]">
                        <div className="cottedIcon">
                          <img className="#" src={data.cottedIcon} alt="" />
                        </div>
                        <div className="vectorIcon flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <img key={i} src={data.vectorIcon} alt="" />
                          ))}
                        </div>
                      </div>
                      <div className="Name-job container mt-4 md:mt-0">
                        <h1 className="font-bold text-lg">{data.name}</h1>
                        <h1 className="font-semibold">{data.job}</h1>
                      </div>
                      <div className="Comment mt-3 container text-sm pb-3">
                        <p>{data.comment}</p>
                      </div>
                    </div>
                    <div className="img">
                      <img
                        className="lg:h-full lg:object-cover lg:object-center"
                        src={data.img}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Arrows (bottom-right, outside cards) */}
            <div className="flex justify-end gap-3 mt-2 pb-3">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="p-2 bg-[#3EB2F7] text-white rounded-full"
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="p-2 bg-[#3EB2F7] text-white rounded-full"
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
