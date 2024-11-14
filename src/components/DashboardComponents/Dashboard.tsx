/**
 * This code was generated by Builder.io
 */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col px-4 py-5 bg-sky-50 max-md:pr-5">
      <Header />
      <main className="flex gap-5 mt-6 max-md:max-w-full">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </main>
    </div>
  );
};

export default Dashboard;
