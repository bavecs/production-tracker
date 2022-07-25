import React, { useContext } from "react";
import { ProductContext } from "./ContextProviders/productContext";

const FetchUserDetails = () => {
  const { products } = useContext(ProductContext);

  return <>{products ? `Tömb elérhető` : ``}</>;
};

export default FetchUserDetails;