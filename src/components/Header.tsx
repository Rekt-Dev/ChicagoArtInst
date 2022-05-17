import { lucky } from "../services/FeelingLucky";
import React, { useState } from "react";
import { requestOptions } from "../services/requestOptions";
import { numToLetter } from "./Randomizer";

function Header(type: any) {
  function concatSearch() {
    const link = chicagoLink + find;

    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  const [find, setFind] = useState("");
  const chicagoLink = "https://api.artic.edu/api/v1/artworks/search?q=";

  function HandleChange(event: any) {
    const e = event.target.value;
    setFind(e);
    return e;
  }

  return (
    <div>
      <h1 className="center">The Art Institute of Chicago</h1>

      <div className="center">
        <input onChange={HandleChange} placeholder="Enter your search here" />
      </div>
      <div className="center">
        <div className="button">
          <button onClick={concatSearch} type="button" className="button">
            Search
          </button>
        </div>
        <button onClick={numToLetter} className="button" type="button">
          Randomize it !
        </button>
        <br />
      </div>
    </div>
  );
}

export default Header;
