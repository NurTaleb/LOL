import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CarContext } from "./context/CarContext";
import { v4 as uuidv4 } from "uuid";
import { BidContext } from "./context/BidContext";

const Home = () => {
  const { car, setCar, fetchCarById, cars, fetchCars } = useContext(CarContext);
  const { bids, fetchBids, setBidCreate, bidCreate, createBid } =
    useContext(BidContext);

  useEffect(() => {
    fetchBids();
  }, []);

  const topBid = (bids, car) => {
    const highestBid = bids.filter((bid) => bid.car_id === car.id);
    if (highestBid.length > 0) {
      return highestBid[highestBid.length - 1].sum;
    } else {
      return "0";
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="App">
      <h1 className="title">DAWNcars</h1>
      <h2>Welcome And Get Ready For Ultimate Car Auction</h2>
      <div className="car-list">
        {cars.map((car) => (
          <div key={uuidv4()} className="car-item">
            <img src={car.img} alt={car.model} className="car-image" />
            <h2>
              {car.year} {car.brand} {car.model}
            </h2>
            <p>
              <strong style={{ fontWeight: "bold" }}> Current bid:</strong> {""}
              {topBid(bids, car)}
            </p>
            <p>
              <strong style={{ fontWeight: "bold" }}> Time left:</strong>{" "}
              {car.end_date}
            </p>
            <p>
              <strong style={{ fontWeight: "bold" }}> Location:</strong>{" "}
              {car.location}
            </p>
            <Link className="button-link" to={`/ad/${car.id}`}>
              BrowseAd
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;