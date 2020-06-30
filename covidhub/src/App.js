import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Cards/Chart";
import CountryPicker from "./components/Cards/CountryPicker";

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
