import series from "../api/series.json"
import {SeriesCards} from "./SeriesCards.jsx"
import "../../index.css";
const NetflixSeries=()=>{
       return (
      <ul className="grid">
      {series.map((ele)=>(<SeriesCards key={ele.id} data={ele}/>)
    )}
      </ul>
       )
    };
export default NetflixSeries;