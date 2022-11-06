import React from "react";
import searchIcon from "../assets/icons/search.1 1.svg";
import notification from "../assets/icons/Vector.svg";
import wal from "../assets/icons/wal.svg";
import black from "../assets/icons/black.svg";

function Header() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="right-section flex gap-10">
          <img src={searchIcon} width="25" className="cursor-pointer" alt="" />
          <img
            src={notification}
            width="25"
            className="cursor-pointer"
            alt=""
          />
        </div>
      </header>

      <section className="mt-8 xl:flex w-full gap-6">
        <div className="w-full">
          <div className="md:flex xl-10 xl:mt-0 gap-6 w-full ">
            <div className="bg-dark w-full mt-2 md:mt-0 h-32 rounded-lg flex items-center px-3 gap-5">
              <div className="h-12 w-12 bg-light_dark rounded-full flex items-center justify-center ">
                <img src={wal} width="18" alt="" />
              </div>
              <div>
                <p className="text-slate-400">Total Hospitals</p>
                <h1 className="text-white text-3xl font-bold">999</h1>
              </div>
            </div>

            <div className="bg-gray-100 w-full mt-2 md:mt-0 h-32 rounded">
              <div className="bg-gray-100 w-full mt-2 md:mt-0 h-32 rounded-lg flex items-center px-3 gap-5">
                <div className="h-12 w-12 bg-g_gray rounded-full flex items-center justify-center ">
                  <img src={black} width="18" alt="" />
                </div>
                <div>
                  <p className="text-slate-400">Total Doctors</p>
                  <h1 className="text-dark text-3xl font-bold">2222</h1>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 w-full mt-2 md:mt-0 h-32 rounded">
              <div className="bg-gray-100 w-full mt-2 md:mt-0 h-32 rounded-lg flex items-center px-3 gap-5">
                <div className="h-12 w-12 bg-g_gray rounded-full flex items-center justify-center ">
                  <img src={black} width="18" alt="" />
                </div>
                <div>
                  <p className="text-slate-400">Total Users</p>
                  <h1 className="text-dark text-3xl font-bold">10000+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-full h-64 mt-5 xl:mt-5 bg-white-400 border-g_gray border px-5 py-4 rounded-md">
            <div className="flex justify-between ">
              <h1 className="font-medium text-xl">All Hospitals</h1>
              <h1 className="font-medium  cursor-pointer text-[#29A073]">
                View All{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="xl:w-5/12  h-64 mt-5 xl:mt-0 bg-gray-100 rounded-md"></div>
      </section>
    </>
  );
}

export default Header;
