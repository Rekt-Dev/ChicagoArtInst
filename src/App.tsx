import "./styles.css";
import "./index.css";
import renderCard from "./components/RenderCard";
import { lucky } from "../src/services/FeelingLucky";
import { json } from "./services/importedData";
import React, { useState } from "react";
import Card from "./components/Card";
import requestOptions from "./services/requestOptions";
import Header from "./components/Header";

export default function App() {
  const [find, setFind] = useState("");
  const chicagoLink = "https://api.artic.edu/api/v1/artworks/search?q=";

  function concatSearch() {
    const link = chicagoLink + find;

    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function apiLink() {
    const linkApi = "https://api.artic.edu/api/v1/artworks/103332";

    fetch(linkApi, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function HandleChange(event: any) {
    const e = event.target.value;
    setFind(e);

    return e;
  }

  return (
    <div>
      <Header />

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
