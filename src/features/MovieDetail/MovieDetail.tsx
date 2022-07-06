import PlayIcon from "src/assets/image/play-icon.png";
import VideoThumbnail from "src/assets/image/video-thumbnail.png";
import Button from "src/components/Button/Button";
import Comment from "src/components/Comment/Comment";
import MovieDetailCarousel from "src/components/MovieDetailCarousel/MovieDetailCarousel";
import MovieDetailHeader from "src/components/MovieDetailHeader/MovieDetailHeader";
import LabelTZ from "src/assets/image/label-tz.png";
import {
  setIsShowing,
  setOpen,
} from "src/features/HomePage/store/homePageSlice";
import { useAppDispatch, useAppSelector } from "src/store/hook";

const MovieDetail = () => {
  const dispatch = useAppDispatch();
  const { currentMovie } = useAppSelector((state) => state.HomePageSlice);
  const handleCloseDialog = () => {
    dispatch(setIsShowing(false));
    dispatch(setOpen(false));
  };
  return (
    <div className="h-screen overflow-y-hidden">
      <div
        className="fixed top-0 left-0 right-0 h-full bg-[#00000080] z-[9999]"
        onClick={handleCloseDialog}
      ></div>
      <div
        className="fixed top-[20px] right-[20px] z-[9999] cursor-pointer"
        onClick={handleCloseDialog}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path
            fill="#FFF"
            fill-opacity="0"
            fill-rule="evenodd"
            d="M.999 1H19v18H.999V1z"
          />
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M19.192 17.763l-1.415 1.414L10 11.4l-7.777 7.777-1.416-1.414 7.778-7.778L.807 2.207 2.223.792 10 8.57 17.777.792l1.415 1.415-7.777 7.778 7.777 7.778z"
          />
        </svg>
      </div>
      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-[10001] shadow-lg">
        <div className="py-[14px] px-4 flex flex-col justify-center items-center cursor-pointer bg-white border-b border-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#070707"
              fill-opacity="0"
              fill-rule="evenodd"
              d="M0 0h16v16H0V0z"
            />
            <path
              fill="#070707"
              fill-rule="evenodd"
              d="M14.111 16H1V5.4h3.444v.9H1.889v8.8h12.222V6.3h-2.555v-.9H15V16h-.889zM9.778 9H6.222V3.6H4.444L8 0l3.556 3.6H9.778V9z"
            />
          </svg>
          <span className="text-xs text-secondary font-normal">Page</span>
        </div>
        <div className="py-[14px] px-4 flex flex-col justify-center items-center cursor-pointer bg-white border-b border-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#070707"
              fill-opacity="0"
              fill-rule="evenodd"
              d="M0 0h18v18H0V0z"
            />
            <path
              fill="#070707"
              fill-rule="evenodd"
              d="M8.992 15.999c-.074 0-.149-.021-.217-.063l-.497-.298c-2.543-1.519-7.276-4.346-7.276-8.983 0-2.574 2.074-4.67 4.626-4.67 1.272 0 2.495.543 3.364 1.47.869-.927 2.092-1.47 3.365-1.47 2.549 0 4.626 2.096 4.626 4.67 0 4.637-4.734 7.464-7.276 8.983-.175.107-.347.206-.499.298-.066.042-.14.063-.216.063z"
            />
          </svg>

          <span className="text-xs text-secondary font-normal">Like</span>
        </div>
        <div className="py-[14px] px-4 flex flex-col justify-center items-center cursor-pointer bg-white border-b border-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14">
            <path
              fill="#070707"
              fill-opacity="0"
              fill-rule="evenodd"
              d="M.875 0h14v14h-14V0z"
            />
            <path
              fill="#070707"
              fill-rule="evenodd"
              d="M1 14V8h14v6H1zm.999-9H14v2H1.999V5zm2-3h8.002v2H3.999V2z"
            />
          </svg>

          <span className="text-xs text-secondary font-normal">Add</span>
        </div>
        <div className="py-[14px] px-4 flex flex-col justify-center items-center cursor-pointer bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <path
              fill="#070707"
              fill-opacity="0"
              fill-rule="evenodd"
              d="M0 0h16v16H0V0z"
            />
            <path
              fill="#070707"
              fill-rule="evenodd"
              d="M11.69 11.056c-.592 0-1.132.238-1.541.63L6.454 8.919c.106-.284.165-.594.165-.919 0-.324-.059-.634-.165-.918l3.695-2.767c.409.391.949.629 1.541.629 1.276 0 2.31-1.105 2.31-2.469 0-1.364-1.034-2.47-2.31-2.47s-2.31 1.106-2.31 2.47c0 .325.059.634.165.919L5.85 6.16c-.409-.391-.949-.63-1.541-.63-1.276 0-2.31 1.106-2.31 2.47s1.034 2.47 2.31 2.47c.592 0 1.132-.238 1.541-.63l3.695 2.767c-.106.284-.165.594-.165.919 0 1.364 1.034 2.47 2.31 2.47S14 14.89 14 13.526c0-1.365-1.034-2.47-2.31-2.47z"
            />
          </svg>

          <span className="text-xs text-secondary font-normal">Share</span>
        </div>
      </div>
      <div className="w-[270px] xxs:!container absolute top-0 left-0 right-0 mx-auto bg-white z-[10000] pt-10 h-screen overflow-y-scroll">
        <div className="absolute top-0 right-5 md:right-[60px]">
          <div className="">
            <img src={LabelTZ} alt="TZ" />
          </div>
        </div>
        <MovieDetailHeader />

        <div className="px-[30px] md:px-[60px] mt-12 md:mt-[100px] mb-10 relative">
          <div className="w-full">
            <img src={VideoThumbnail} alt="video" className="w-full" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <img src={PlayIcon} alt="" />
          </div>
        </div>

        <p className="px-[30px] md:px-[60px]  text-sm text-secondary font-extralight mb-[30px]">
          {currentMovie.description_full}
        </p>

        {[1, 2, 3].map((item) => (
          <div key={item} className="w-[90%] md:px-[60px] mx-auto mt-[70px]">
            <img
              src={currentMovie.large_cover_image}
              alt=""
              className="mx-auto"
            />
          </div>
        ))}

        <div className="text-center py-[50px] px-[30px] md:px-[60px] border border-t border-[#efefef] mt-[50px]">
          <h2 className="text-xl md:text-3xl text-secondary font-normal mb-5">
            The first portfolio movement.
          </h2>
          <div className="flex items-center justify-center gap-x-5 mb-[30px]">
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M0 0h18v18H0V0z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M8.992 15.999c-.074 0-.149-.021-.217-.063l-.497-.298c-2.543-1.519-7.276-4.346-7.276-8.983 0-2.574 2.074-4.67 4.626-4.67 1.272 0 2.495.543 3.364 1.47.869-.927 2.092-1.47 3.365-1.47 2.549 0 4.626 2.096 4.626 4.67 0 4.637-4.734 7.464-7.276 8.983-.175.107-.347.206-.499.298-.066.042-.14.063-.216.063z"
                />
              </svg>
              <span className="text-base md:text-lg text-[#333] font-light">
                1,688
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M-.001.156h17.844V18H-.001V.156z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M8.921 2.384C4 2.384.014 8.041.014 9.077c0 1.034 3.986 6.691 8.907 6.691 4.92 0 8.907-5.657 8.907-6.691 0-1.036-3.987-6.693-8.907-6.693zm0 10.343c-1.737 0-3.145-1.635-3.145-3.65 0-2.018 1.408-3.651 3.145-3.651 1.735 0 3.144 1.633 3.144 3.651 0 2.015-1.409 3.65-3.144 3.65z"
                />
              </svg>

              <span className="text-sm md:text-lg text-[#333] font-light">
                18,178
              </span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M.197.323h15.708v15.705H.197V.323z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M1.005 15.998V13.36c0-1.14.844-2.021 1.879-2.465l3.232-1.378c1.035-.443 2.727-.443 3.758 0l3.235 1.378c1.033.444 1.879 1.325 1.879 2.465v2.638H1.005zm6.99-8.287c-2.092 0-3.788-1.724-3.788-3.85 0-2.127 1.696-3.85 3.788-3.85 2.094 0 3.79 1.723 3.79 3.85 0 2.126-1.696 3.85-3.79 3.85z"
                />
              </svg>

              <span className="text-sm md:text-lg text-[#333] font-light">
                332
              </span>
            </div>
          </div>
          <span className="text-base text-[#8c8c8c] font-light mb-10 block">
            Publishing date : 2020.10.15
          </span>
          <div className="flex items-center justify-center gap-x-[10px]">
            <Button
              content="Like"
              icon={
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                </svg>
              }
            />
            <Button
              content="Add"
              icon={
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                  ></path>
                </svg>
              }
            />
          </div>
        </div>

        <MovieDetailCarousel />

        <Comment />
      </div>
    </div>
  );
};

export default MovieDetail;
