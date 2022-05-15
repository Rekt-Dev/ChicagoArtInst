import HandleChange from "../App";
import concatSearch from "../App";
import lucky from "../App";

export const header = (
  <div>
    <h1 className="box">The Art Institute of Chicago</h1>

    <div className="center">
      <input onChange={HandleChange} placeholder="Enter your search here" />
    </div>
    <div className="center">
      <button onClick={concatSearch} type="button" className="btn btn-info">
        Search
      </button>
      <button onClick={lucky} className="btn btn-info" type="button">
        Randomize it !
      </button>

      <br />
    </div>
  </div>
);
