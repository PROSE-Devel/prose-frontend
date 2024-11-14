/**
 * This code was generated by Builder.io
 */
import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import ContentArea from "./ContentArea";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex overflow-hidden flex-col px-4 py-5 bg-sky-50 max-md:pr-5">
      <Header />
      <div className="flex flex-wrap gap-3 mt-5 w-full max-md:max-w-full">
        <Menu />
        <ContentArea />
      </div>
    </div>
  );
};

export default Dashboard;