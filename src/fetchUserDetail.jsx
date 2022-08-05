import React, { useContext } from "react";
import { ProductContext } from "./utils/Providers/productContext";

const FetchUserDetails = () => {
  const { products } = useContext(ProductContext);

  return <>{products ? `Tömb elérhető` : ``}</>;
};

export default FetchUserDetails;