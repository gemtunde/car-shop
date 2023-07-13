//const axios = require("axios");
import axios from "axios";
// const options = {
//   method: "GET",
//   url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
//   params: { model: "corolla" },
//   headers: {
//     "X-RapidAPI-Key": "f3ca2ff635mshd1c1bff03098a57p13270ejsna4d8b4c851aa",
//     "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f3ca2ff635mshd1c1bff03098a57p13270ejsna4d8b4c851aa",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla";
  const response = await axios.get(url, { headers: headers });
  //console.log(response);
  return response.data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};