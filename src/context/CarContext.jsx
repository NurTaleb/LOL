import { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [ads, setAds] = useState([]);
  const [car, setCar] = useState({});
  const [carCreate, setCarCreate] = useState({});
  const [ad, setAd] = useState({});
  const [adCreate, setAdCreate] = useState({});
  const [cars, setCars] = useState([]);

  /* useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axios.get(`${apiUrl}/ads`);
        setAds(res.data);
        //console.log(ads);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAds();
  }, []); */

  const fetchCars = async () => {
    try {
      const res = await axios.get(`${apiUrl}/cars`);
      setCars(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCarById = async (carId) => {
    try {
      const res = await axios.get(`${apiUrl}/car/${carId}`);
      setCar(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createCar = async (newCar) => {
    try {
      const res = await axios.post(`${apiUrl}/car`, newCar);
    } catch (error) {
      console.log(error);
    }
  };

  /* useEffect(() => {
    const fetchAdById = async () => {
      try {
        const res = await axios.get(`${apiUrl}/ad/`);
        setAd(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdById();
  }, []); */

  /* const createAd = async (newAd) => {
    try {
      const res = await axios.post(`${apiUrl}/ad`, newAd);
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <CarContext.Provider
      value={{
        fetchCars,
        /* createAd, */
        createCar,
        /* ad,
        setAd, */
        car,
        setCar,
        setCars,
        fetchCarById,
        cars,
        /*  ads, */
        /* setAds, */
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContext, CarProvider };
