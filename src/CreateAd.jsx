import "./CreateAd.css";
import homeImage from "/assets/Bentley.jpeg";

import React, { useState } from 'react';
import axios from 'axios';





function CreateAd() {
  const [accountId, setAccountId] = useState("");
  const [Start_valueSearch, setStart_valueSearch] = useState("");
  const [milageSearch, setMilageSearch] = useState("");
  const [gearSearch, setGearSearch] = useState("");
  const [YearSearch, setYearSearch] = useState("");
  const [End_dateSearch, setEnd_dateSearch] = useState("");
  const [DescriptionSearch, setDescriptionSearch] = useState("");
  const [ModelSearch, setModelSearch] = useState("");
  const [HorsepowerSearch, setHorsepowerSearch] = useState("");
  const [StatusSearch, setStatusSearch] = useState("");
  const [BrandSearch, setBrandSearch] = useState("");
  const [RegistrationNumberSearch, setRegistrationNumberSearch] = useState("");
  const [FuelSearch, setFuelSearch] = useState("");
  const [LocationSearch, setLocationSearch] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);


  const handleAccountIdChange = (event) => {
    setAccountId(event.target.value);
  };


  const handleStart_valueChange = (event) => {
    setStart_valueSearch(event.target.value);
  };

  const handleMilageChange = (event) => {
    setMilageSearch(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearSearch(event.target.value);
  };
  const handleGearChange = (event) => {
    setGearSearch(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescriptionSearch(event.target.value);
  };
  const handleEnd_dateChange = (event) => {
    setEnd_dateSearch(event.target.value);
  };
  const handleHorsepowerChange = (event) => {
    setHorsepowerSearch(event.target.value);
  };

  const handleModelChange = (event) => {
    setModelSearch(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatusSearch(event.target.value);
  };
  const handleBrandChange = (event) => {
    setBrandSearch(event.target.value);
  };
  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumberSearch(event.target.value);
  };
  const handleFuelChange = (event) => {
    setFuelSearch(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocationSearch(event.target.value);
  };

  const handleImageURLChange = (event) => {
    setImageURL(event.target.value);
  };

  console.log(import.meta.env.VITE_API_URL); // Should display your API URL if set up correctly

  const handleSubmit = async (event) => {
    event.preventDefault();

    const adData = {
      accountId,
      start_value: Start_valueSearch,
      milage: milageSearch,
      gear: gearSearch,
      year: YearSearch,
      end_date: End_dateSearch,
      description: DescriptionSearch,
      model: ModelSearch,
      horsePower: HorsepowerSearch,
      status: StatusSearch,
      brand: BrandSearch,
      registrationNumber: RegistrationNumberSearch,
      fuel: FuelSearch,
      location: LocationSearch,
      imageURL: imageURL,
    };

   


    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/car`, adData);
      console.log(response.data);

      setSubmissionStatus("Success")
    } catch (error) {
      console.error("There was an error sending the data!", error.response?.data);

      setSubmissionStatus("Error");

   }
   

  };
    


 
  return (
    <div className="Home">
      <div className="secContainer">
        <div className="homeText">
          <span className="homeSpan">Post Your Car</span>
          <h1 className="homeTitle">ADVERTISMENT</h1>
        </div>

        <div className="homeImage">
          <img src={homeImage} alt="A luxurious car" /> {/* Updated alt description */}
        </div>
        <form onSubmit={handleSubmit}> {/* Corrected form tag */}
          <div className="Container">


          <input
            type="text"
            placeholder="Account ID..."
            value={accountId}
            onChange={handleAccountIdChange}
            className="searchInput"
          />
            

            <input
            type="text"
            placeholder="Start_value..."
            value={Start_valueSearch}
            onChange={handleStart_valueChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Milage..."
            value={milageSearch}
            onChange={handleMilageChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Gear..."
            value={gearSearch}
            onChange={handleGearChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Year..."
            value={YearSearch}
            onChange={handleYearChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="End_date..."
            value={End_dateSearch}
            onChange={handleEnd_dateChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Horsepower..."
            value={HorsepowerSearch}
            onChange={handleHorsepowerChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Description..."
            value={DescriptionSearch}
            onChange={handleDescriptionChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Model..."
            value={ModelSearch}
            onChange={handleModelChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Status..."
            value={StatusSearch}
            onChange={handleStatusChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Brand..."
            value={BrandSearch}
            onChange={handleBrandChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="RegistrationNumber..."
            value={RegistrationNumberSearch}
            onChange={handleRegistrationNumberChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Fuel..."
            value={FuelSearch}
            onChange={handleFuelChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Location..."
            value={LocationSearch}
            onChange={handleLocationChange}
            className="searchInput"
          />
          <input
            type="text"
            placeholder="Image URL..."
            value={imageURL}
            onChange={handleImageURLChange}
            className="searchInput"
          />
          
          </div>
          <div className="btn flex">
            <button type="submit" className="btnSubmit">Submit</button> {/* Corrected typo and added button text */}
          </div>
        </form> 
      </div>
    </div>
  );
  }


export default CreateAd;