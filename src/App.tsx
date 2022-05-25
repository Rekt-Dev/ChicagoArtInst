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
      <Link to="/2_10">pages : 2-10</Link> 
      <Link to="/10_20">pages : 10-20</Link> 
      <Link to="/20_30">pages : 20-30</Link> 
    </div>
  );
}
