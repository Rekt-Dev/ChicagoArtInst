import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { CardDisplayer } from "./services/CardDisplayer";
import { Link } from "react-router-dom";
import { Row } from "./components/Row";

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
      <Row />
      <Row />
    </div>
  );
}
