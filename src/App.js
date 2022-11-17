import "./App.css";
import { useState } from "react";

import { FaChartPie } from "react-icons/fa";

import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TodayIcon from "@mui/icons-material/Today";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function App() {
  const [minimized, setMinimized] = useState(false);

  function handleMinimize() {
    setMinimized((minimized) => !minimized);
  }

  return (
    <>
      <div className="flex">
        <div className="sidebar-container">
          <div className="logo-container">
            <div className="py-10 px-4 ml-5">
              <InventoryOutlinedIcon />
              <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                Your<span className="text-[#F46445]">Title</span>
              </span>
            </div>
          </div>
          <div className="nav-container">
            <div className="nav-item">
              <button>
                <GridViewIcon />
                <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                  Dashboard
                </span>
              </button>
            </div>
            <div className="nav-item">
              <button>
                <InsightsIcon />
                <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                  Reports
                </span>
              </button>
            </div>
            <div className="nav-item">
              <button>
                <FaChartPie className="inline" />
                <span className={minimized ? "hide-disp" : "ml-3 mr-12"}>
                  Analytics
                </span>
              </button>
            </div>
            <div className="nav-item">
              <button>
                <PersonOutlineIcon />
                <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                  Users
                </span>
              </button>
            </div>
            <div className="nav-item">
              <button>
                <CalculateOutlinedIcon />
                <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                  Accounting
                </span>
              </button>
            </div>
            <div className="nav-item">
              <button>
                <SettingsOutlinedIcon />
                <span className={minimized ? "hide-disp" : "ml-2 mr-12"}>
                  Settings
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-red-300">
          <div className="flex items-center gap-8">
            <div className="header-container ">
              <button className="py-10 px-4" onClick={handleMinimize}>
                <MenuIcon />
              </button>
            </div>
            <div className="flex justify-items-end  gap-8">
              <div className="flex">
                <div className="py-2 px-6 border rounded-l-2xl border-r-neutral-200">
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
                    <span className="mx-6">18 Oct -25 Oct 2020</span>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="py-2 mr-4">
                  <NotificationsNoneIcon />
                </div>
                <p className="py-2  mr-4">Your Name</p>
                <div className="h-10 w-10  bg-slate-800 rounded-full mr-7">

</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
