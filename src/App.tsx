import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { CardDisplayer } from "./services/CardDisplayer";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <div className="center" onClick={CardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      <div>
        <nav
          style={{
            paddingBottom: "1rem"
          }}
        >
          <Link to="/i">Inloices</Link> | <Link to="/expenses">Expenses</Link>
        </nav>
      </div>
      <div className="center" onClick={CardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      <div className="center" onClick={CardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      <div className="center" onClick={CardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      <div className="center" onClick={CardDisplayer}>
        {json.map((obj) => (
          <Card
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />
        ))}
      </div>
      <br></br>
      <br></br>) )
    </div>
  );
}
