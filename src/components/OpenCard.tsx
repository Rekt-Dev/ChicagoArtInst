import React from "react";

export function OpenCard() {
  function getImageData() {
    console.log("getImageData invoked thru openCard");
  }

  const url1 = "https://theRealFileIllBuild";
  const url = `https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg`;
  console.log("card was clicked");
  window.open(url, "_blank");

  getImageData();

  return (
    <div className="center">
      <div>
        <div>
          <img width="1250" height="650" src={url} alt="a beautiful piece" />
        </div>
        <ul>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
          <li className="liFont">a piece of data loren ipsumish </li>
        </ul>
      </div>
    </div>
  );
}
