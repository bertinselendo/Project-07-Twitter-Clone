import React from "react";
import Moreicon from "../../../templates/icons/more";

export default function TrendEement(props) {
  const trend = props.trend;
  return (
    <>
      <div className="px-4 py-2 flex gap-2 justify-between hover:bg-gray-hober cursor-pointer">
        <div className="">
          <span className="text-xs font-thin text-text-gray">
            Trending in {trend.city}
          </span>
          <h5 className="text-sm uppercase font-bold">{trend.htag}</h5>
          <span className="text-xs font-thin text-text-gray">
            {trend.tweetNumber} Tweets
          </span>
        </div>
        <div className="pt-2">
          <span className="">
            <Moreicon />
          </span>
        </div>
      </div>
    </>
  );
}
