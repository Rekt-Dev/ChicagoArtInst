import "./styles.css";
import "./index.css";
import Header from "./components/Header";
import {
  Link,
  BrowserRouter,
  Routes,
  Route,
  Layout,
  Home
} from "react-router-dom";
import { Card } from "./components/Card";
import { json } from "./services/json";
import { OpenCard } from "./components/OpenCard";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<OpenCard />}>
          <Route index element={<Card />} />
          <Route path="blogs" element={<OpenCard />} />
          <Route path="contact" element={<OpenCard />} />
          <Route path="*" element={<OpenCard />} />
        </Route>
      </Routes>
      <div>
        <Link to="OpenCard.tsx">OpenCard | </Link>
        <Link to="/11_20">pages : 11-20 | </Link>
        <Link to="/21_30">pages : 21-30 | </Link>
        <Link to="/31_40">pages : 31-40 | </Link>
      </div>
      <div className="centered">
        {json.map((obj) => (
          <div className="">
            <Card
              key={obj.id}
              artistName={obj.name}
              title={obj.title}
              year={obj.year}
            />
          </div>
        ))}
      </div>
      <Link to="/2_10">pages : 2-10 | </Link>
      <Link to="/11_20">pages : 11-20 | </Link>
      <Link to="/21_30">pages : 21-30 | </Link>
      <Link to="/31_40">pages : 31-40 | </Link>
    </div>
  );
}
