import { Navigate } from "react-router-dom";
import { useSetup } from "./Providers/setupProvider";

export const ProtectedRoute = ({ children }) => {
  const { hours } = useSetup();
  if (!hours) {
    // user is not authenticated
    return <Navigate to="/hall" />;
  }
  return children;
};