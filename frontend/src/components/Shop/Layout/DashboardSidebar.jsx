import React from "react";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ active }) => {
  return (
    <div className="w-full h-[89vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="flex w-full item-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} />
          <h5
            className={`pl-2 text-[18px] font-400 ${
              active === 1 ? "text-[crimson]" : "text-[#555"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
