import React, { useRef } from "react";
import { transformingSkill } from "../Constant/Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function TransformingSkills() {
  const swiperRef = useRef(null);

  return (
    <section className="pt-32">
      <div className="info flex justify-center">
        <h1 className="font-bold text-center text-3xl md:w-[500px] lg:text-4xl lg:w-[600px] xl:w-[800px]">
          Transforming Skills for Tomorrow's Challenges
        </h1>
      </div>

      <div className="relative w-full mt-10 container">
        <div className="w-full max-w-screen-xl mx-auto">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={20}
            loop={true} // enable loop
            loopFillGroupWithBlank={true} // ensures XL works even if slides < slidesPerView
            allowTouchMove={true}
            breakpoints={{
              768: { slidesPerView: 2, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
              1280: { slidesPerView: 4, slidesPerGroup: 1 },
            }}
            className="second"
          >
            {transformingSkill.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="box border bg-white mt-3">
                  <div className="img">
                    <img src={data.Img} alt="" />
                  </div>
                  <div className="title pt-2">
                    <h1 className="font-bold container">{data.title}</h1>
                  </div>
                  <div className="Name-and-img flex items-center gap-2 container pt-3">
                    <div className="img">
                      <img
                        className="w-[30px] h-[30px] rounded-full"
                        src={data.img1}
                        alt=""
                      />
                    </div>
                    <div className="name">
                      <p className="text-gray-600">{data.name}</p>
                    </div>
                  </div>
                  <div className="border mx-3 mt-3"></div>
                  <div className="Main-for-lessons-and-time mt-3 mb-3 flex items-center justify-between container text-gray-600">
                    <div className="lecture flex items-center gap-2">
                      <data.videoIcon size={20} />
                      <p>{data.lesson}</p>
                    </div>
                    <div className="time flex items-center gap-2">
                      <data.timeIcon size={20} />
                      <p>{data.time}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile / MD / LG arrows */}
        <div className="flex justify-end mt-4 gap-2 xl:hidden">
          <button
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            className="text-gray-600 hover:text-gray-800 bg-white rounded-full p-1"
            aria-label="prev"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            className="text-gray-600 hover:text-gray-800 bg-white rounded-full p-1"
            aria-label="next"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>

        {/* XL and above arrows: centered below slider */}
        <div className="hidden xl:flex justify-end 2xl:pe-32 gap-4 mt-6">
          <button
            onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
            className="text-gray-600 hover:text-gray-800 bg-white rounded-full shadow p-2"
            aria-label="prev-xl"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>

          <button
            onClick={() => swiperRef.current && swiperRef.current.slideNext()}
            className="text-gray-600 hover:text-gray-800 bg-white rounded-full shadow p-2"
            aria-label="next-xl"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
      <div className="btn flex justify-center">
        <button className="text-white bg-[#1097E8] px-4 py-2 rounded-full">More Courses</button>
      </div>
    </section>
  );
}


