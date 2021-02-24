 import React from "react";
 import Weather from "./Weather";
 import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />

        <footer>
          Coded by Nina Thür
          and it is{" "}
          <a
            href="https://github.com/nina-thur/my-weather-app.git"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://stupefied-agnesi-8a2e55.netlify.app"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}