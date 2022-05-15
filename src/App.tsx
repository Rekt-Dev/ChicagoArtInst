import "./styles.css";
import "./index.css";
import renderCard from "./components/RenderCard";
import { lucky } from "../src/services/FeelingLucky";
import { json } from "./services/importedData";
import React, { useState } from "react";
import Card from "./components/Card";
import requestOptions from "./services/requestOptions";

export default function App() {
  const [find, setFind] = useState("");
  const chicagoLink = "https://api.artic.edu/api/v1/artworks/search?q=";

  function concatSearch() {
    const link = chicagoLink + find;

    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function HandleChange(event: any) {
    const e = event.target.value;
    setFind(e);

    console.log(`this is e ${e}`);
    console.log(`this is e.trgt.vlu ${e}`);
    console.log("theres been a change");

    return e;
  }

  return (
    <div>
      <h1 className="box">The Art Institute of Chicago</h1>

      <div className="center">
        <input onChange={HandleChange} placeholder="Enter your search here" />
      </div>
      <div className="center">
        <button onClick={concatSearch} type="button" className="btn btn-info">
          Search
        </button>
        <button onClick={lucky} className="btn btn-info" type="button">
          Randomize it !
        </button>

        <br />
      </div>

      <div>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
    </div>
  );
}
{
  /* <div>
  <SearchPage />
</div> */
}
