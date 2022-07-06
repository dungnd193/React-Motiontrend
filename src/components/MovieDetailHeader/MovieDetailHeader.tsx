import React from "react";
import ProfileAvt from "src/assets/image/profile.png";
import { useAppSelector } from "src/store/hook";
import Button from "../Button/Button";

const MovieDetailHeader = () => {
  const { currentMovie } = useAppSelector((state) => state.HomePageSlice);

  return (
    <div className="px-[30px] md:px-[60px]  flex items-center flex-col lg:flex-row gap-x-[30px]">
      <div className="w-[120px] h-[120px] flex-none">
        <img src={ProfileAvt} alt="avatar" className="w-full" />
      </div>
      <div className="w-full">
        <h2 className="text-lg mt-3 xs:mt-0 xs:text-3xl text-secondary font-medium">
          {currentMovie.title}
        </h2>
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-x-[30px] mt-[4px]">
          <span className="text-base text-secondary font-light">
            Kim Aeyong
          </span>
          <span className="text-base text-[#8c8c8c] font-light">
            Design, Music Video, Advertising
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:flex md:gap-x-1 mt-5">
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
            content="Follow"
            icon={
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
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
          <div className="md:ml-auto">
            <Button content="Edit Project" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHeader;
