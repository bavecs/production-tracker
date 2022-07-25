import React, { useState, useContext } from "react";

import { ProductContext } from "./ContextProviders/productContext";
import {
  useNavigate
} from "react-router-dom";

const SetUserDetails = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  
  const { setproducts } = useContext(ProductContext);
  const handleSetName = () => {
  };
  return (
    <>
      <input 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSetName}>Set Name </button>
    </>
  );
};

export default SetUserDetails;