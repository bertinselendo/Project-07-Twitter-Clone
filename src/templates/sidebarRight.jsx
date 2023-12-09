import React from "react";
import SearchBar from "./sidebar-right/searchBar";
import FollowSection from "./sidebar-right/followSection";
import Footer from "./footer";
import TrendsSection from "./sidebar-right/trendsSection";

export default function SidebarRight() {
  return (
    <div className="rigth-sidebar">
      <SearchBar />
      <div className="inner-scroll-effect">
        <TrendsSection />
        <FollowSection />
        <Footer />
      </div>
    </div>
  );
}
