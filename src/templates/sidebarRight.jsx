import React from "react";
import SearchBar from "@components/sidebar-right/searchBar";
import FollowSection from "@components//sidebar-right/followSection";
import Footer from "./footer";
import TrendsSection from "@components//sidebar-right/trendsSection";

export default function SidebarRight() {
  return (
    <div className="w-[360px] p-4 flex flex-col gap-2 sticky top-0 h-screen">
      <SearchBar />
      <div className="overflow-y-scroll flex flex-col gap-4 scrollbar-hide">
        <TrendsSection />
        <FollowSection />
        <Footer />
      </div>
    </div>
  );
}
