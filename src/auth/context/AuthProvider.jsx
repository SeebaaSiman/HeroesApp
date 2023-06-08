import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
  logged: false,
};
//Creo init que es la tercer opcion de useReducer para inicializar el user y almacenarlo cuando refresque la pág el usuario y ya haya hecho el login//
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user, //doble negación para que esté en true//
    user: user,
  };
};
export const AuthProvider = ({ children }) => {
  //En el reducer tengo el dispatch que dispara la acción, el authReducer donde está el switch y el initialState//
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  //Creo la función login para pasarla a los children. Recibirá un name y tendrá la action que disparará el dispatch//
  const login = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user)); //Almacena el user en el localStoragge y cuando se refresque la pág si ya está logeado queda el user en pantalla //
    dispatch(action); //dispara la acción del useReducer//
  };
  //Al hacer logout, debe salir de la sesión y borrar el user del localStorrage//
  const logout = () => {
    localStorage.removeItem("user");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        //Métodos//
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
