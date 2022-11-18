import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import TodayIcon from "@mui/icons-material/Today";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Badge from "@mui/material/Badge";

function Header({handleMinimize}) {
  return (
    <>
      <div className=" ">
        <button className="py-10 px-4" onClick={handleMinimize}>
          <MenuIcon />
        </button>
      </div>

      <div className="flex justify-items-end  gap-8 ml-80 text-gray-400">
        <div className="flex">
          <div className="py-2 px-6 border rounded-l-xl border-r-neutral-200 bg-[#475F7B]">
            Today
          </div>
          <div className="py-2 px-6 border">Week</div>
          <div className="py-2 px-6 border">Month</div>
          <div className="py-2 px-6 border">Quater</div>
          <div className="py-2 px-6 border">Year</div>
        </div>
        <div className="border rounded-md ">
          <div className="py-2 pl-6 pr-12">
            <p>
              <TodayIcon />
              <span className="mx-6 truncate">18 Oct -25 Oct 2020</span>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="py-2 mr-4">
            <Badge badgeContent={1} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </div>
          <p className="py-2  mr-4">Your Name</p>
          <div className="h-10 w-10  bg-[#475F7B] rounded-full mr-7"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
