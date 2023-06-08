import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  //Llamo al contexto y busco la función login y del login busco el authContext//
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';  //al hacer login buscará en el locastorrage lastPath y si es null irá a ' / '//
    //Uso la fx login//
    login("Sebastián");
    navigate( lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5 ">
      <h1>Login</h1>
      <hr />
      <button className="btb btn-primary" onClick={onLogin}>
        login
      </button>
    </div>
  );
};
