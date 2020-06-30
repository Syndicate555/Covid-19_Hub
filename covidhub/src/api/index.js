import axios from "axios";

const stats = "https://covid19.mathdro.id/api";
const country = "https://covid19.mathdro.id/api/countries";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(stats);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };

    const countryData = await axios.get(country);
    return { modifiedData, countryData };
  } catch (error) {
    console.log(error);
  }
};
