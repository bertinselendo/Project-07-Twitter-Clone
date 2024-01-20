import React from "react";

export default function Footer() {
  return (
    <>
      <div className="mb-24 text-xs flex flex-wrap gap-x-2 *:text-text-gray hover:[&>a]:text-blue">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Imprint</a>
        <a href="#">Ads info</a>
        <a href="#">More ...</a>
        <span>© 2021 Twitter, Inc.</span>
      </div>
    </>
  );
}
