import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { OpenCard } from "./components/OpenCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
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
