import React from "react";
import { Link } from "react-router-dom";
import { UploadingLoop } from "../templates/icons/uploadingLoop";

export default function UnderConstruction() {
  return (
    <>
      <div className="main-404">
        <div className="404-icon">
          <UploadingLoop />
        </div>
        <h1>under construction</h1>
        <p>The page will be available soon</p>
        <Link to="/" className="hover-white-darkist">
          Go to Home
        </Link>
      </div>
    </>
  );
}
