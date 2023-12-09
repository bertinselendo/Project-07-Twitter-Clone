import React from "react";
import TrendsServices from "../models/trendsServices";
import TrendEement from "../templates/sidebar-right/trends/trendElement";

export default function Trends() {
  const trends = TrendsServices.getTrends();

  return (
    <>
      {trends.slice(0,5).map((trend) => (
        <TrendEement key={trend.id} trend={trend} />
        ))}
    </>
  );
}
