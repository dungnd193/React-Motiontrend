import React, { useRef } from "react";
import ProfileAvtWhite from "src/assets/image/profile-avt.png";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "../MovieItem/MovieItem";
import CircleArrow from "src/assets/image/circle-arrow.png";
import { useAppSelector } from "src/store/hook";
import { NavigationOptions } from "swiper/types";

const MovieDetailCarousel = () => {
  const { movieList } = useAppSelector((state) => state.HomePageSlice);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="px-[60px] py-[50px] bg-[#efefef]">
      <div className="flex items-center gap-x-4 mb-4">
        <div className="w-[70px]">
          <img src={ProfileAvtWhite} alt="avt" className="w-full" />
        </div>
        <h3 className="text-lg text-[#222] font-medium">Kim Aeyong</h3>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={15}
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
        // autoplay={{ delay: 2000 }}
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
        {movieList.length &&
          movieList.map((movie, index) =>
            index <= 7 ? (
              <SwiperSlide key={movie.id}>
                <MovieItem movie={movie} />
              </SwiperSlide>
            ) : null
          )}
        <div
          className="w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 right-5 -translate-y-1/2 z-10 cursor-pointer"
          ref={navigationNextRef}
        >
          <img src={CircleArrow} alt="next" />
        </div>
        <div
          className="rotate-180 w-[43px] h-[43px] hover:brightness-75 absolute top-1/2 left-5 -translate-y-1/2 z-10 cursor-pointer"
          ref={navigationPrevRef}
        >
          <img src={CircleArrow} alt="prev" />
        </div>
      </Swiper>
    </div>
  );
};

export default MovieDetailCarousel;
