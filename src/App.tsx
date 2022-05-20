import "./styles.css";
import "./index.css";
import { json } from "./services/importedData";
import Card from "./components/Card";
import Header from "./components/Header";
import { OpenCard } from "./components/OpenCard";

export default function App() {
  return (
    <div >
      <Header />
      <div className="divWidth" onClick={OpenCard}>
        {json.map((obj) => (
          <Card 
            key={obj.id}
            artistName={obj.name}
            title={obj.title}
            year={obj.year}
          />

        )
        )
        }

      </div>
      <OpenCard />

    </div>
  );
}
