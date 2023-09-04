import './App.css';
import Axios from 'axios';
import {useState} from 'react';
const api = {
  key: "72265c14b7bba9f56546773b753b7cdf",
  url: "https://api.openweathermap.org/data/2.5/"
}
// https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric

function App() {

const [input,setInput] = useState('');
const [result,setResult] = useState({});

  const search = (e)=>{
    
      if (e.key === "Enter") {
        Axios.get(`${api.url}weather?q=${input}&appid=${api.key}`).then((res)=>{
          setResult(res.data);
        })
      }

  }
  return (
    <div className="App">
        <div className='app'>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            onKeyPress={search}
          />
        </div>
    {(typeof result.main !== 'undefined')?   
        <div>
          <div className="location-box">
            <div className="location">{input}</div>
            {/* <div className="date">date</div> */}
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(result.main.temp)}°c
            </div>
            <div className="weather">{result.weather[0].main}</div>
          </div>
        </div>
     : ('')}
      </main>
    </div>
    </div>
  );
}

export default App;
