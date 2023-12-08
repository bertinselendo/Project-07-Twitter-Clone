import React from "react";
import { Link } from "react-router-dom";
import SidebarIcons from "../templates/sidebarIcons";
import TwitterIcon from "../templates/icons/twitterIcon";
import Badges from "../templates/icons/badges";

export default function SidebarRight() {
  return (
    <div className="rigth-sidebar">
      <div className="search-bar">
        <form action="">
          <input type="text" placeholder="Rechercher" />
        </form>
      </div>
      <div className="trends-section">
        <div className="trends-seaction-header">
          <h4>Trends for you</h4>
          <span>I</span>
        </div>
        <div className="trends-section-content">
          <div className="trend-element">
            <div className="trend-element-content">
              <span>Trending in Turkey</span>
              <h5>#SQUID</h5>
              <span>2,066 Tweets</span>
            </div>
            <div className="trend-element-more">
              <span>I</span>
            </div>
          </div>
        </div>
        <div className="trends-section-more">
          <a href="#">Show more</a>
        </div>
      </div>
      <div className="follow-section">
        <div className="follow-seaction-header">
          <h4>Trends for you</h4>
          <span>I</span>
        </div>
        <div className="follow-section-content">
          <div className="follow-element">
            <div className="follow-element-image">
              <img src="#" alt="" />
            </div>
            <div className="follow-element-content">
              <span>Trending in Turkey</span>
              <h5>#SQUID</h5>
              <span>2,066 Tweets</span>
            </div>
            <div className="follow-element-btn">
              <span>I</span>
            </div>
          </div>
        </div>
        <div className="follow-section-more">
          <a href="#">Show more</a>
        </div>
      </div>
      <div className="footer">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Imprint</a>
        <a href="#">Ads info</a>
        <a href="#">More ...</a>
        <a href="#">© 2021 Twitter, Inc.</a>
      </div>
    </div>
  );
}
