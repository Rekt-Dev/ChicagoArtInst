import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { OpenCard } from "./components/OpenCard";

export default function App() {
  function cardDisplayer() {
    OpenCard();
    console.log("cardDisplayer activated ! ");
  }

  return (
    <div>
      <Header />
      <div className="divWidth" onClick={cardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      {json.map((obj) => (
        <OpenCard
          key={obj.id}
          artistName={obj.name}
          title={obj.title}
          year={obj.year}
          location={obj.location}
          displayedOn={obj.displayedOn}
        />
      ))}
    </div>
  );
}
