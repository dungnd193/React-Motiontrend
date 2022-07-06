import LikeIcon from "src/assets/image/like-icon.png";
import PlayIcon from "src/assets/image/play-icon.png";
import TutorialImg from "src/assets/image/tutorial-img.png";
import ViewIcon from "src/assets/image/view-icon.png";
import MovieItem from "src/components/MovieItem/MovieItem";
import { useAppSelector } from "src/store/hook";

const Tutorial = () => {
  const { movieList } = useAppSelector((state) => state.HomePageSlice);

  return (
    <>
      <div className="px-[30px] py-[60px] mt-[54px] bg-[#efefef] flex items-start lg:items-center lg:justify-between flex-wrap lg:flex-nowrap gap-y-10">
        <div className="md:pr-10 mx-auto sm:mx-0 text-center sm:text-left">
          <h3 className="text-lg text-[#292929] font-medium mb-3 sm:mb-7">
            TUTORIAL
          </h3>
          <p className="sm:text-xl md:text-3xl lg:text-[35px] text-secondary font-medium max-w-[350px] w-full">
            Let's look at 7 ways to use motion trend more effectively in the
            first tutorial.
          </p>
          <button className="py-4 px-11 mt-10 sm:mt-[70px] text-sm text-white bg-secondary border border-black transition duration-150 ease-linear hover:bg-white hover:text-secondary">
            watch now
          </button>
        </div>

        <div className="sm:max-w-[230px] md:max-w-[320px] lg:max-w-[526px] relative">
          <img src={TutorialImg} alt="tutorial" className="w-full" />
          <div className="absolute top-[10px] left-[-10px]">
            <span className="text-base text-white font-medium bg-primary px-[14px] py-1">
              LIVE
            </span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[80px] w-full cursor-pointer">
            <img src={PlayIcon} alt="" className="w-full" />
          </div>
          <div className="absolute bottom-[10px] right-[10px] bg-[#00000080]">
            <span className="text-base text-white font-medium px-3 py-1 block">
              02:33
            </span>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:flex flex-col gap-y-[15px] gap-x-4 lg:pl-10">
          <div className="flex flex-col lg:flex-row gap-x-5 items-start lg:items-center">
            <div className="w-full lg:w-[157px]">
              <img
                src={TutorialImg}
                alt="tutorial-thumbnail"
                className="w-full"
              />
            </div>
            <div className="mt-3 lg:mt-0">
              <h3 className="text-lg text-secondary font-medium">Tutorial</h3>

              <span className="text-xs text-secondary block font-light lg:max-w-[275px] mt-[6px] mb-[12px] w-full">
                A tutorial video with Motion Trend. Let's Learn Motion Trends.
              </span>
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={LikeIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={ViewIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 items-start lg:items-center">
            <div className="w-full lg:w-[157px]">
              <img
                src={TutorialImg}
                alt="tutorial-thumbnail"
                className="w-full"
              />
            </div>
            <div className="mt-3 lg:mt-0">
              <h3 className="text-lg text-secondary font-medium">Tutorial</h3>

              <span className="text-xs text-secondary block font-light lg:max-w-[275px] mt-[6px] mb-[12px] w-full">
                A tutorial video with Motion Trend. Let's Learn Motion Trends.
              </span>
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={LikeIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={ViewIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5 items-start lg:items-center">
            <div className="w-full lg:w-[157px]">
              <img
                src={TutorialImg}
                alt="tutorial-thumbnail"
                className="w-full"
              />
            </div>
            <div className="mt-3 lg:mt-0">
              <h3 className="text-lg text-secondary font-medium">Tutorial</h3>

              <span className="text-xs text-secondary block font-light lg:max-w-[275px] mt-[6px] mb-[12px] w-full">
                A tutorial video with Motion Trend. Let's Learn Motion Trends.
              </span>
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={LikeIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <div className="w-[14px] h-[14px]">
                    <img src={ViewIcon} alt="like" className="w-full" />
                  </div>
                  <span className="text-xs text-[#333] font-light">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[70px] px-[30px] grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[15px] gap-y-10">
        {movieList?.length > 0 &&
          movieList?.map((movie, index) => {
            if (index <= 4) return <MovieItem key={movie.id} movie={movie} />;
          })}
      </div>
    </>
  );
};

export default Tutorial;
