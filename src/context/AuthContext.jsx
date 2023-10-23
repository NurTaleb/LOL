import { createContext, useState, useEffect, useReducer } from "react";

const initialState = {
  user: null,
};

export const AuthContext= createContext(initialState);

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      window.localStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return state;
  }
};



const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const storedUser = window.localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        dispatch({
          type: "LOGIN",
          payload: user,
        }, []);
      } catch (error) {
        console.error("Corrupted user data in localStorage.", error);
        window.localStorage.removeItem("user"); // consider removing corrupted data
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
