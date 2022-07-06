import { useState } from "react";
import { EFilter } from "src/features/HomePage/type/type";
const Filter = () => {
  const [filter, setFilter] = useState(EFilter.MotionTrendPick);
  return (
    <div className="flex justify-between items-start md:items-center px-[30px] mb-7">
      <ul className="flex flex-col md:flex-row items-start md:items-center gap-x-[30px] gap-y-3">
        <li
          onClick={() => setFilter(EFilter.MotionTrendPick)}
          className={`text-sm sm:text-base md:text-lg text-secondary font-medium cursor-pointer ${
            filter === EFilter.MotionTrendPick
              ? "border-black"
              : "border-transparent"
          } border-b-2 !leading-tight`}
        >
          Motion trend pick
        </li>
        <li
          onClick={() => setFilter(EFilter.Latest)}
          className={`text-sm sm:text-base md:text-lg text-secondary font-medium cursor-pointer ${
            filter === EFilter.Latest ? "border-black" : "border-transparent"
          } border-b-2 !leading-tight`}
        >
          Latest
        </li>
        <li
          onClick={() => setFilter(EFilter.Recommended)}
          className={`text-sm sm:text-base md:text-lg text-secondary font-medium cursor-pointer ${
            filter === EFilter.Recommended
              ? "border-black"
              : "border-transparent"
          } border-b-2 !leading-tight`}
        >
          Recommended
        </li>
      </ul>
      <span className="text-sm font-light text-secondary">
        Selection criteria
      </span>
    </div>
  );
};

export default Filter;
