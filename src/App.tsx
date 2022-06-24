import "./styles.css";
import "./index.css";
import Header from "./components/Header";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "./components/Card";
import { json } from "./services/json";
import { OpenCard } from "./components/OpenCard";
import { GoToArtist } from "./components/GoToArtist";
import { Home } from "./components/Home";
import { Teams } from "./components/Teams";
import { Team } from "./components/Team";

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <div className="centered">
          {json.map((obj) => (
            <div className="">
              <Card
                key={obj.id}
                artistName={obj.name}
                title={obj.title}
                year={obj.year}
                hometown={obj.hometown}
              />
            </div>
          ))}
        </div>
        <Link to="/2_10">pages : 2-10 | </Link>
        <Link to="/11_20">pages : 11-20 | </Link>
        <Link to="/21_30">pages : 21-30 | </Link>
        <Link to="/31_40">pages : 31-40 | </Link>
      </Router>
    </div>
  );
}
