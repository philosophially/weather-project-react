import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <SearchEngine />
        <br />
        <p>
          🙌🏼 This project was coded by Sophia Lee and it is{" "}
          <a
            href="https://github.com/philosophially/weather-project-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          👩🏼‍💻
        </p>
      </header>
    </div>
  );
}

export default App;
