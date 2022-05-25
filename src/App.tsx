import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { CardDisplayer } from "./services/CardDisplayer";
import { Link } from "react-router-dom";
import { Row } from "./components/Row";
import { OpenCard } from "./components/OpenCard";

export default function App() {
  return (
    <div>
      <Header />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Link to="/2_10">pages : 2-10 | </Link>
      <Link to="/11_20">pages : 11-20 | </Link>
      <Link to="/21_30">pages : 21-30 | </Link>
      <Link to="/31_40">pages : 31-40 | </Link>
    </div>
  );
}
