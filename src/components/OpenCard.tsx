import mockLink from "./Card";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function OpenCard() {

  function getImageData() {
    console.log("getImageData invoked thru openCard");
  }
  
  const url = `https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg`;
  console.log("card was clicked");
  window.open(url, "_blank");
  

  getImageData();

  return (
    <div className="center">
      <div>
        <ul>
     
          <li>a peice of data loren ipsumish </li>
          <li>a peice of data loren ipsumish </li>
          <li>a peice of data loren ipsumish </li>
          <li>a peice of data loren ipsumish </li>

        </ul>
      <div>
        <img width="1350" height="750" src={url} alt="a beautiful peice" />
      </div>
      </div>
    </div>
  );
}
