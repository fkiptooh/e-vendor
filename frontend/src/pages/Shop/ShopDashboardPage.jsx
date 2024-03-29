import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSidebar from "../../components/Shop/Layout/DashboardSidebar";

const ShopDashboardPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="flex items-center justify-between w-full">
        <div className="w-[80px] md:w-[330px]">
          <DashboardSidebar active={1} />
        </div>
      </div>
    </div>
  );
};

export default ShopDashboardPage;
