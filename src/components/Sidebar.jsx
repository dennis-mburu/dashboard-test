import React from "react";
import { FaChartPie } from "react-icons/fa";

import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import InsightsIcon from "@mui/icons-material/Insights";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Sidebar({ minimized }) {
  return (
    <>
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
    </>
  );
}

export default Sidebar;
