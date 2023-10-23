import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./LoginSignup.css";

function InputField({ type, placeholder, name, value, onChange }) {
  return (
    <div className="input">
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </div>
  );
}

const LoginSignup = () => {
  const { dispatch } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [userDetails, setUserDetails] = useState({
    mail: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const requiredFields = isLogin ? ["mail", "password"] : Object.keys(userDetails);
    for (let field of requiredFields) {
      if (!userDetails[field]) {
        setError("Please fill in all required fields!");
        return;
      }
    }

    const url = `${import.meta.env.VITE_API_URL}/api/auth/${isLogin ? "signin" : "signup"}`;

    try {
      const response = await axios.post(url, userDetails);
      const data = response.data;
      if (data.account) {
        dispatch({ type: "LOGIN", payload: data.account });
        window.localStorage.setItem("user", JSON.stringify(data.account));
      } else {
        setError("Failed to log in. Please try again.");
      }
    } catch (err) {
      setError("An error occurred: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">{isLogin ? "Sign In" : "Sign Up"} - DAWNcars</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {!isLogin && (
            <>
              <InputField type="text" placeholder="First Name" name="firstName" value={userDetails.firstName} onChange={handleChange} />
              <InputField type="text" placeholder="Last Name" name="lastName" value={userDetails.lastName} onChange={handleChange} />
              <InputField type="text" placeholder="Username" name="username" value={userDetails.username} onChange={handleChange} />
              <InputField type="text" placeholder="PhoneNumber" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
            </>
          )}
          <InputField type="email" placeholder="Email" name="mail" value={userDetails.mail} onChange={handleChange} />
          <InputField type="password" placeholder="Password" name="password" value={userDetails.password} onChange={handleChange} />
        </div>
        <div className="Submit-container">
          <div className={!isLogin ? "submit gray active" : "submit"} onClick={() => setIsLogin(false)}>Sign Up</div>
          <div className={isLogin ? "submit gray active" : "submit"} onClick={() => setIsLogin(true)}>Sign In</div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
