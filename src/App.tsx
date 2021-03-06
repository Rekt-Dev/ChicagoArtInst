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
import { Footer } from "./components/Footer";
import { HoverCard } from "./components/HoverCard";

export default function App() {
  return (
    <div>
      <Header />
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
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<Footer />} />
            <Route index element={<HoverCard />} />
          </Route>
        </Route>
      </Routes>
      <Link to="/2_10">pages : 2-10 | </Link>
      <Link to="/11_20">pages : 11-20 | </Link>
      <Link to="/21_30">pages : 21-30 | </Link>
      <Link to="/31_40">pages : 31-40 | </Link>
    </div>
  );
}
