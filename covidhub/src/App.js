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
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    console.log(country);
  };
  render() {
    // destructure the data

    const { data } = this.state;
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
        <Chart />
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
