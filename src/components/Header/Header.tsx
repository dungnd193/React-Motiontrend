import { ChangeEvent, useEffect, useState } from "react";
import LogoImg from "src/assets/image/logo-icon.png";
import SearchIcon from "src/assets/image/search-icon.png";
import { searchMovies } from "src/features/HomePage/store/homePageSlice";
import { useAppDispatch } from "src/store/hook";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showInputResize, setShowInputResize] = useState(true);
  const dispatch = useAppDispatch();
  let timer: number;
  const handleChange = (e: ChangeEvent) => {
    if (timer) clearTimeout(timer);

    timer = window.setTimeout(() => {
      dispatch(searchMovies((e.target as HTMLInputElement).value));
    }, 300);
  };
  const handleResizeWindow = () => {
    if (window.innerWidth <= 768) {
      setShowInputResize(false);
      return;
    }
    setShowInputResize(true);
    setShowInput(false);
  };

  const handleOpenSearchInput = () => {
    if (window.innerWidth <= 768) {
      setShowInput(!showInput);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  return (
    <>
      <header className="container-fluid h-[74px] px-[30px] py-3 bg-black text-white flex justify-between sticky top-0 left-0 right-0 z-[9999]">
        <div className="flex items-center">
          <div className="w-[180px] mr-10">
            <img src={LogoImg} alt="logo" className="w-full" />
          </div>
          <ul className="hidden lg:flex gap-x-[30px] items-center">
            <li>
              <a
                href="#"
                className="text-sm text-[#8f8f8f] font-medium hover:text-primary transition duration-300 ease-out"
              >
                Discoverd
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-[#8f8f8f] font-medium hover:text-primary transition duration-300 ease-out"
              >
                Job
              </a>
            </li>
          </ul>
        </div>

        {showInputResize && (
          <div className="border-b border-[#8f8f8f] w-[600px]">
            <input
              type="text"
              placeholder="Search for motion trend......"
              onChange={handleChange}
              className="w-full bg-transparent outline-none pl-[26px] py-3 placeholder:text-sm placeholder:text-white"
            />
          </div>
        )}

        <div className="flex items-center">
          <div
            className="w-5 h-5 mr-[30px] cursor-pointer"
            onClick={handleOpenSearchInput}
          >
            <img src={SearchIcon} alt="search" className="w-full" />
          </div>
          <ul className="hidden lg:flex items-center gap-x-[30px]">
            <li>
              <a
                href="#"
                className="text-sm text-[#8f8f8f] font-medium hover:text-primary transition duration-300 ease-out"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-[#8f8f8f] font-medium hover:text-primary transition duration-300 ease-out"
              >
                Sign Up
              </a>
            </li>
          </ul>
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => {
              setOpenSidebar(true);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
              ></path>
            </svg>
          </div>
        </div>
        {showInput && (
          <div className="border-t border-white bg-black w-full absolute top-[74px] left-0">
            <input
              type="text"
              placeholder="Search for motion trend......"
              onChange={handleChange}
              className="w-full bg-transparent outline-none pl-[26px] text-white py-3 placeholder:text-sm placeholder:text-white"
            />
          </div>
        )}
      </header>
      {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
    </>
  );
};

export default Header;
