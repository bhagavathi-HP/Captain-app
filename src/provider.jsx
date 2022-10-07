import React from "react";
import { useEffect, useState } from "react";
import { Available } from "./context";
const MyContextProvider = ({ children }) => {
  const [contextArray, setContextArray] = useState([]);
  useEffect(() => {
    const array = JSON.parse(localStorage.getItem("array"));
    console.log("providerArray", array);
    setContextArray(array);
  }, []);
  return (
    <div>
      <Available.Provider value={contextArray}>{children}</Available.Provider>
    </div>
  );
};

export default MyContextProvider;
