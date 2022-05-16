import "./styles.css";
import "./index.css";
import { lucky } from "../src/services/FeelingLucky";
import { json } from "./services/importedData";
import Card from "./components/Card";
import { requestOptions } from "./services/requestOptions";
import Header from "./components/Header";

export default function App() {
  function apiLink() {
    fetch(linkApi, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function openCard() {
    console.log("card was clicked");
  }

  return (
    <div>
      <Header />

      <div onClick={openCard}>
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
