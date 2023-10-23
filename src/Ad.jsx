import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CarContext } from "./context/CarContext";
import { BsFuelPumpFill } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { FaHorseHead } from "react-icons/fa";
import { PiGaugeBold } from "react-icons/pi";
import { FaCalendarDays } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { BidContext } from "./context/BidContext";

const Ad = () => {
  const params = useParams();
  const [sum, setSum] = useState("");
  const { car, setCar, fetchCarById, cars, fetchCars } = useContext(CarContext);
  const { bids, fetchBids, setBidCreate, bidCreate, createBid } =
    useContext(BidContext);

  useEffect(() => {
    fetchBids();
  }, [bids]);

  useEffect(() => {
    fetchCarById(params.Id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBid = {
      sum,
      account_id: "placeholder",
      car_id: car.id,
    };

    setSum("");

    createBid(newBid);
  };

  const carBids = bids.filter((bid) => bid.car_id === car.id);

  const topBid = (carBids) => {
    if (carBids.length > 0) {
      return carBids[carBids.length - 1].sum;
    } else {
      return "0";
    }
  };

  return (
    <div className="ad">
      <h2>
        {car.year} {car.brand} {car.model}
      </h2>
      <div className="image">
        <img src={car.img} alt="carimg" />
      </div>
      <div className="bidContainer">
        <div className="bidSection">
          <label>Leading bid: {topBid(carBids)}</label>
          <label>Your bid: {topBid(carBids)}</label>
          <label>Expires: {car.end_date}</label>
        </div>
        <div className="makeBid">
          <form className="bidClass" onSubmit={handleSubmit}>
            <input
              type="text"
              value={sum}
              name="Make-bid"
              onChange={(e) => setSum(e.target.value)}
              placeholder="Make bid"
            ></input>
            <button>Bid</button>
          </form>
        </div>
      </div>
      <div className="carInfo">
        <p>{car.description}</p>
        <ul>
          <li>
            <BsFuelPumpFill /> {car.fuel}
          </li>
          <li>
            <TbManualGearbox /> {car.gear}
          </li>
          <li>
            <FaHorseHead /> {car.horsePower}
          </li>
          <li>
            <FaCalendarDays /> {car.year}
          </li>
          <li>
            <PiGaugeBold /> {car.milage}
          </li>
          <li>
            <IoSparkles /> {car.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ad;
