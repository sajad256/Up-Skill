import React, { useRef } from "react";
import { transformingSkill } from "../Constant/Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ correct import for v11+
import "swiper/css";
import "swiper/css/navigation";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export default function TransformingSkills() {
  const swiperRef = useRef(null);

  return (
    <section className="pt-32 pb-3">
      <div className="info flex justify-center">
        <h1 className="font-bold text-center text-3xl md:w-[500px] lg:text-4xl lg:w-[600px] xl:w-[800px]">
          Transforming Skills for Tomorrow's Challenges
        </h1>
      </div>

      <div className="relative w-full mt-10 container">
        <div className="w-full max-w-screen-xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]} // ✅ use Autoplay here
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            allowTouchMove={true}
            speed={1100}
            autoplay={{
              delay: 2000, // 2 sec
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
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

        <div className="flex justify-end mt-4 gap-2 xl:hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-gray-600 bg-white rounded-full p-1"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-gray-600 bg-white rounded-full p-1"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>

        <div className="hidden xl:flex justify-end 2xl:pe-32 gap-4 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="text-gray-600 bg-white rounded-full shadow p-2"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="text-gray-600 bg-white rounded-full shadow p-2"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>

      <div className="btn flex justify-center">
        <button className="text-white bg-[#1097E8] px-4 py-2 rounded-full">
          More Courses
        </button>
      </div>
    </section>
  );
}
