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
          <span className="icon-search">I</span>
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
        </div>
        <div className="follow-section-content">
          <div className="follow-element">
            <div className="follow-element-first">
              <div className="follow-element-image">
                <img src="/images/profile-photo.png" alt="" />
              </div>
              <div className="follow-element-content">
                <h5>The New York Times</h5>
                <span>@nytimes</span>
              </div>
            </div>
            <div className="follow-element-btn">
              <a href="#">Follow</a>
            </div>
          </div>
          <div className="follow-element">
            <div className="follow-element-first">
              <div className="follow-element-image">
                <img src="/images/profile-photo.png" alt="" />
              </div>
              <div className="follow-element-content">
                <h5>The New York Times</h5>
                <span>@nytimes</span>
              </div>
            </div>
            <div className="follow-element-btn">
              <a href="#">Follow</a>
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
        <span>© 2021 Twitter, Inc.</span>
      </div>
    </div>
  );
}
