import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import Footer from "./components/Footer/Footer";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";

class App extends React.Component {
  // declare app state
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    // destructure the data

    const { data, country } = this.state;
    return (
      <div className="container">
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <Cards data={data} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <br />
        <br />
        <br />
        <Chart data={data} country={country} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
