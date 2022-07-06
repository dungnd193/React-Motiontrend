import React from "react";

const Sidebar = ({ setOpenSidebar }: { setOpenSidebar: Function }) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 h-full bg-[#00000080] z-[9999]"
        onClick={() => setOpenSidebar(false)}
      ></div>
      <div className="w-[400px] fixed top-0 left-0 bottom-0 bg-white z-[10000]">
        <ul>
          <li className="text-center py-4">
            <span className="text-sm text-[#8f8f8f] font-medium">Login</span>
          </li>
          <li className="text-center py-4">
            <span className="text-sm text-[#8f8f8f] font-medium">Sign Up</span>
          </li>
          <li className="text-center py-4">
            <span className="text-sm text-[#8f8f8f] font-medium">Discover</span>
          </li>
          <li className="text-center py-4">
            <span className="text-sm text-[#8f8f8f] font-medium">Job</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
