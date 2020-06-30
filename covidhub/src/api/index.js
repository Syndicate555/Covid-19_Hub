import axios from "axios";

const stats = "https://covid19.mathdro.id/api";
const country = "https://covid19.mathdro.id/api/countries";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(stats);
    const modifiedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    const countryData = await axios.get(country);
    return { modifiedData, countryData };
  } catch (error) {
    console.log(error);
  }
};
