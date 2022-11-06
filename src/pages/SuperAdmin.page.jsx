import React from "react";

import SideBar from "../components/Sidebar";

function SuperAdminPage() {
  return (
    <div className=" w-screen h-screen flex">
      <SideBar />
      <div className="w-full h-screen bg-white"></div>
    </div>
  );
}

export default SuperAdminPage;
