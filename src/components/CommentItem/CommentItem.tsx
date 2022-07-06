import React from "react";
import ProfileAvt from "src/assets/image/profile.png";

const CommentItem = () => {
  return (
    <div className="flex flex-col gap-y-3 mt-10">
      <div className="flex items-center gap-x-4">
        <div className="w-[50px]">
          <img src={ProfileAvt} alt="avatar" className="w-full" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm text-[#222] font-medium mb-[2px]">
            Kim Aeyong
          </h3>
          <span className="text-xs text-[#888] font-light">2020. 07. 06</span>
        </div>
      </div>
      <p className="text-xs text-[#222] font-extralight">
        Amazing work you have here. feels like an alternative reality with that
        much saturation.. love it! Amazing work you have here feels like an
        alternative reality with that much saturation.. love it!
      </p>
    </div>
  );
};

export default CommentItem;
