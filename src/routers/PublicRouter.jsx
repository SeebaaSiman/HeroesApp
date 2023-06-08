import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

//Si estoy logeado no me deja ir a login, sin antes hacer logout//
export const PublicRouter = ({ children }) => {
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/dc" />;
};
 