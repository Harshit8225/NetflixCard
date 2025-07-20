import "./netflix.css";
export const SeriesCards=(props)=>{
    const {data}=props;
    const Rate=data.rating>=8.5?"hit":"avg";
    return (<li>
          <div>
            <img src={data.img_url} alt="Nahi Hora" width="40%" height="40%"/>
          </div>
          <h2>Name:{data.name}</h2>
          <h3>Rating: <span className={`span_rate ${Rate}`}>{data.rating}</span></h3>
          <p>Summary:{data.description}</p>
          <p>Genre:{data.genre}</p>
          <p>Cast: {data.cast}</p>
          <a href={data.watch_url}>
            <button  className={Rate}>Watch Now</button>
          </a>
        </li>
        )
}