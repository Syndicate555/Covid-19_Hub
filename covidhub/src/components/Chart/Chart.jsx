import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2"; // also need to install chart.js seperately
import styles from "./Chart.module.css";
const Chart = () => {
  const [dailyData, setDailyData] = useState({});
  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  // first wait for the data to be fetched from the API, then return the result. Until then, return null
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}],
      }}
    />
  ) : null;
  return <h1>Chart</h1>;
};

export default Chart;
