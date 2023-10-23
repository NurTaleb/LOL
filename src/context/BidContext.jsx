import { createContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const BidContext = createContext();

const BidProvider = ({ children }) => {
  const [bids, setBids] = useState([]);
  const [bidCreate, setBidCreate] = useState({});

  const fetchBids = async () => {
    try {
      const res = await axios.get(`${apiUrl}/bids`);
      setBids(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createBid = async (newBid) => {
    try {
      const res = await axios.post(`${apiUrl}/bid`, newBid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BidContext.Provider
      value={{
        bids,
        setBids,
        fetchBids,
        setBidCreate,
        bidCreate,
        createBid,
      }}
    >
      {children}
    </BidContext.Provider>
  );
};

export { BidContext, BidProvider };
