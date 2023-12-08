import React from "react";
import Moreicon from "../../../templates/icons/more";

export default function TrendEement(props) {
  const trend = props.trend;
  return (
    <>
      <div className="trend-element">
        <div className="trend-element-content">
          <span>Trending in {trend.city}</span>
          <h5>{trend.htag}</h5>
          <span>{trend.tweetNumber} Tweets</span>
        </div>
        <div className="trend-element-more">
          <span className="icon">
            <Moreicon />
          </span>
        </div>
      </div>
    </>
  );
}
