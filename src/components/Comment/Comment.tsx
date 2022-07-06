import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import ProfileAvt from "src/assets/image/profile.png";

const arr = [
  "Editing",
  "Camera action, Angle",
  "Sound, Beat",
  "Graphical ",
  "Experimental",
  "Editing",
];

const Comment = () => {
  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-x-[50px]">
      <div className="col-span-2 pl-[60px] py-[50px] pr-[60px] lg:pr-0">
        <h3 className="text-xl text-[#222] font-medium mb-5">Comment</h3>
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Write a comment now......"
            className="w-full outline-none border border-1 border-black px-4 py-2 placeholder:text-xs placeholder:text-secondary placeholder:font-light"
          />
          <button className="bg-black px-6 py-3 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
              <path
                fill="#FFF"
                fillOpacity="0"
                fillRule="evenodd"
                d="M0 0h20v20H0V0z"
              />
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M19.013 9.055l-6.331-6.064-.985.943 5.634 5.398H-.01v1.334h17.341l-5.634 5.397.985.943 7.314-7.007-.985-.944z"
              />
            </svg>
          </button>
        </div>

        {[1, 2, 3, 4, 5].map((item) => (
          <CommentItem key={item} />
        ))}

        <div className="flex items-center justify-center gap-x-2 w-full border border-1 border-black py-2 cursor-pointer mt-[50px]">
          <span>More comment</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FF2E43"
              fillOpacity="0"
              fillRule="evenodd"
              d="M.109.109H12V12H.109V.109z"
            />
            <path
              fill="#222"
              fillRule="evenodd"
              d="M7.091 10.925l3.898-3.79-1.103-1.072-3.117 3.032V-.004h-1.56v9.099L2.091 6.063l-1.1 1.072 4.999 4.862 1.101-1.072z"
            />
          </svg>
        </div>
      </div>
      <div className="border border-l-1 border-[#efefef]">
        <div className="pt-[50px] px-[50px] pb-[40px] border-b border-[#efefef]">
          <span className="text-xs text-[#8c8c8c] font-light mb-5 block">
            Owner
          </span>
          <div className="flex items-center gap-x-4]">
            <div className="w-[50px]">
              <img src={ProfileAvt} alt="avatar" className="w-full" />
            </div>
            <div>
              <span className="text-sm text-[#222] font-medium">
                Kim Aeyong
              </span>
              <div className="flex items-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#070707"
                    fillOpacity="0"
                    fillRule="evenodd"
                    d="M-.001.212h11.789v11.789H-.001V.212z"
                  />
                  <path
                    fill="#8C8C8C"
                    fillRule="evenodd"
                    d="M11.724 11.868c-.062.084-.16.133-.265.133H.303c-.103 0-.2-.049-.259-.133-.064-.083-.083-.19-.054-.289l.983-3.275.631.189-.858 2.852h10.275l-.859-2.852.628-.189.985 3.275c.028.099.01.206-.051.289zm-2.731-4.49l-3.109 3.106-3.113-3.106c-.322-.343-.59-.741-.786-1.179-.238-.529-.367-1.112-.367-1.731 0-2.35 1.909-4.256 4.266-4.256 2.354 0 4.265 1.906 4.265 4.256 0 .619-.131 1.202-.369 1.731-.198.438-.464.836-.787 1.179zM5.884 2.832c-.909 0-1.642.733-1.642 1.636 0 .905.733 1.638 1.642 1.638.903 0 1.638-.733 1.638-1.638 0-.903-.735-1.636-1.638-1.636z"
                  />
                </svg>

                <span className="text-xs text-[#8c8c8c] font-light">
                  Korea, Republic of
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-[50px] py-[40px] border-b border-[#efefef]">
          <span className="text-base text-secondary font-medium mb-4 block">
            The first portfolio movement.
          </span>
          <div className="flex items-center gap-x-5 mb-5">
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M0 0h16v16.001H0V0z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M8 13.999c-.064 0-.133-.016-.191-.051l-.433-.256C5.146 12.392 1.002 9.97 1.002 6c0-2.205 1.816-4.001 4.051-4.001 1.114 0 2.185.465 2.947 1.259.76-.794 1.831-1.259 2.946-1.259C13.181 1.999 15 3.795 15 6c0 3.97-4.147 6.392-6.375 7.692-.155.091-.301.176-.434.256-.057.035-.124.051-.191.051z"
                />
              </svg>

              <span className="text-xs text-[#333] font-light">18</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M0 0h16.001v16.001H0V0z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M7.999 1.997C3.589 1.997.012 7.07.012 7.998c0 .928 3.577 6 7.987 6 4.412 0 7.988-5.072 7.988-6 0-.928-3.576-6.001-7.988-6.001zm0 8.994c-1.661 0-3.004-1.34-3.004-2.993 0-1.653 1.343-2.993 3.004-2.993 1.66 0 3.007 1.34 3.007 2.993 0 1.653-1.347 2.993-3.007 2.993z"
                />
              </svg>

              <span className="text-xs text-[#333] font-light">18</span>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  fill="#070707"
                  fillOpacity="0"
                  fillRule="evenodd"
                  d="M0 0h16v16.001H0V0z"
                />
                <path
                  fill="#070707"
                  fillRule="evenodd"
                  d="M12.737 2.004H4.266C3.015 2.004 2 3.019 2 4.271v5.298c0 1.252 1.015 2.266 2.266 2.266H5.97v3.16l4.378-3.16h2.389c1.248 0 2.264-1.014 2.264-2.266V4.271c0-1.252-1.016-2.267-2.264-2.267z"
                />
              </svg>

              <span className="text-xs text-[#333] font-light">18</span>
            </div>
          </div>
          <span className="text-xs text-[#8c8c8c] font-light">
            Publishing date : 2020.10.15
          </span>
        </div>

        <div className="px-[50px] py-[40px] border-b border-[#efefef]">
          <span className="text-xs text-[#8c8c8c] font-light">
            Creative field
          </span>
          <div className="flex flex-wrap gap-1 mt-4">
            <span className="text-sm text-[#b5b5ff] font-medium p-[10px] bg-[#00005b]">
              Premiere
            </span>
            <span className="text-sm text-[#31a8ff] font-medium p-[10px] bg-[#001e36]">
              Photoshop
            </span>
            <span className="text-sm text-[#ff9a00] font-medium p-[10px] bg-[#300]">
              Premiere
            </span>
          </div>
        </div>

        <div className="px-[50px] py-[40px] border-b border-[#efefef]">
          <div className="flex flex-wrap gap-1">
            {arr.map((item, index) => (
              <span
                key={index}
                className="text-sm text-primary font-medium inline-block border border-primary py-1 px-[6px]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="px-[50px] py-[40px]">
          <div className="border border-[#222] flex items-center justify-center gap-x-2 py-[7px] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
              <path
                fill="#8C8C8C"
                fillOpacity="0"
                fillRule="evenodd"
                d="M0 0h12v12H0V0z"
              />
              <path
                fill="#222"
                fillRule="evenodd"
                d="M6.001 0C2.686 0 0 2.687 0 5.999 0 9.314 2.686 12 6.001 12 9.314 12 12 9.314 12 5.999 12 2.687 9.314 0 6.001 0zm4.56 5.999c0 .989-.317 1.902-.852 2.649L3.353 2.291c.747-.534 1.66-.853 2.648-.853 2.514 0 4.56 2.046 4.56 4.561zm-9.125 0c0-.986.321-1.899.855-2.646l6.356 6.355c-.746.536-1.66.855-2.646.855-2.518 0-4.565-2.047-4.565-4.564z"
              />
            </svg>

            <span>Report</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
