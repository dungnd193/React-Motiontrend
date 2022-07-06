import { useRef } from "react";
import NextIcon from "src/assets/image/next.png";
import PrevIcon from "src/assets/image/prev.png";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

const swipperList = [
  "Editing",
  "Camera Action, Angle",
  "Sound, Beat",
  "Graphical",
  "Experimental",
  "Elements",
  "Car",
  "Gun",
  "Doll",
  "Theme",
];

const Carousel = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="mt-[10px] mb-[60px] relative">
      <>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 6, spaceBetween: 10 },
            1424: { slidesPerView: 9, spaceBetween: 10 },
          }}
          autoplay={{ delay: 2000 }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            (swiper.params.navigation! as NavigationOptions).prevEl =
              navigationPrevRef.current;
            (swiper.params.navigation! as NavigationOptions).nextEl =
              navigationNextRef.current;
          }}
        >
          {swipperList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary w-full hover:bg-primary transition duration-150 ease-linear cursor-pointer">
                <span className="h-20 flex items-center justify-center text-white text-lg font-medium">
                  {item}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div
            className="w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 right-5 -translate-y-1/2 z-10 cursor-pointer"
            ref={navigationNextRef}
          >
            <img src={NextIcon} alt="next" />
          </div>
          <div
            className="w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 left-5 -translate-y-1/2 z-10 cursor-pointer"
            ref={navigationPrevRef}
          >
            <img src={PrevIcon} alt="prev" />
          </div>
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
