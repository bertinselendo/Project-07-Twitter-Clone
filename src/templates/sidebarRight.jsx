import React from "react";
import SearchBar from "@components/sidebar-right/searchBar";
import FollowSection from "@components//sidebar-right/followSection";
import Footer from "./footer";
import TrendsSection from "@components//sidebar-right/trendsSection";

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
