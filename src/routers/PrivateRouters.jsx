import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRouters = ({ children }) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  useEffect(() => {
    const lastPath = pathname + search; //pathname y search son los params de useLocation. //
    localStorage.setItem("lastPath", lastPath); //Le pongo el nombre de lastPath y los valores de la variable lastPath//
  }, [pathname, search]);

  return logged ? children : <Navigate to="/login" />;
};
//Tengo el componente PrivateRouters que va a recibir a su children, y por contexto veo el logged para saber si estoy autentificado o no. El return pregunta si estoy logged arroja children (pueden ser uno o más) y sino me navega o arroja al login en este caso//
//Para hacer que al ir para atrás en el navegador vuelva a la pág anterior y no vaya al login o dcpage, uso el useLocation con el pathname y el search. Creo un useEffect para que no se lance a cada rato//
