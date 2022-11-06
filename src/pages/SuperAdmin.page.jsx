import React from "react";
import Header from "../components/header";

import SideBar from "../components/Sidebar";

function SuperAdminPage() {
  return (
    <div className=" w-screen h-screen flex">
      <SideBar />
      <div className="w-full h-screen bg-white p-10">
        {/* Header  */}
        <Header />
      </div>
    </div>
  );
}

export default SuperAdminPage;
