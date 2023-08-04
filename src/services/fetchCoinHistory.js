import axios from "axios";

const fetchCoinHistory = (coinId, timePeriod) => {
  return axios
    .get(`https://coinranking1.p.rapidapi.com/coin/${coinId}/history`, {
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: timePeriod,
      },
      headers: {
        "X-RapidAPI-Key": "5f39635c49msh1e63c99047a5d09p1d7526jsn44c760b940eb",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default fetchCoinHistory;
