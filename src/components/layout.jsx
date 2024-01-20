import React from "react";
import SidebarLeft from "../templates/SidebarLeft";
import SidebarRight from "../templates/sidebarRight";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <SidebarLeft />
      <main className="w-[680px] border-x border-gray-text">
        <Outlet />
      </main>
      <SidebarRight />
    </>
  );
}

export default Layout;
