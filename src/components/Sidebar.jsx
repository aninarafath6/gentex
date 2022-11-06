import React, { useState } from "react";
import NavigationItem from "../components/NavigationItem";

import help from "../assets/icons/Help.svg";
import Logout from "../assets/icons/Logout.svg";
import Logo from "../assets/images/logo.png";
import dashboardIcon from "../assets/icons/Dashboard.svg";
import invoiceIcon from "../assets/icons/Invoices.svg";
import wallet from "../assets/icons/My Wallets.svg";
import settings from "../assets/icons/Settings.svg";
import transactions from "../assets/icons/Transactions.svg";

function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  var menus = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Hospitals", icon: invoiceIcon },
    { name: "Users", icon: wallet },
    { name: "Doctors", icon: transactions },
    { name: "Settings", icon: settings },
  ];

  return (
    <div className="left-section w-3/12 h-screen bg-gray-100 px-5 py-7">
      <img src={Logo} width="180" alt="" className="mb-5" />
      <div className="h-3"></div>

      <div className="flex  flex-col justify-between h-5/6">
        <div>
          {menus.map((item, index) => {
            return (
              <NavigationItem
                selected={index === selectedIndex}
                item={item}
                onTap={() => {
                  setSelectedIndex(index);
                }}
              />
            );
          })}
        </div>
        <div>
          <NavigationItem
            selected={6 === selectedIndex}
            item={{ name: "Help", icon: help }}
            onTap={() => {
              setSelectedIndex(6);
            }}
          />
          <NavigationItem
            selected={5 === selectedIndex}
            item={{ name: "Logout", icon: Logout }}
            onTap={() => {
              setSelectedIndex(5);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
