import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import "./loginstyle.css";
export const LoginPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errorInfo, setErrorInfo] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(false);
  };
  //Llamo al contexto y busco la función login y del login busco el authContext//
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogin = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setError(true);
      setErrorInfo("usename debe contener una letra mínimo");
    } else if (/^\d/.test(inputValue)) {
      setError(true);
      setErrorInfo("usename no puede comenzar con un número");
    } else {
      const lastPath = localStorage.getItem("lastPath") || "/"; //al hacer login buscará en el locastorrage lastPath y si es null irá a ' / '//
      //Uso la fx login//
      login(inputValue);
      navigate(lastPath, {
        replace: true,
      });
    }
  };
  return (
    <div className="container-login">
      <form className={`form-login ${error ? "shake-animation" : ""}`}>
        <p className="heading-login">Login</p>

        <div className="field-login">
          <span>@</span>
          <input
            autocomplete="off"
            placeholder="Username"
            className={`input-field-login ${error ? "shake-animation" : ""}`}
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        {error ? (
          <h6 className={`error-login ${error ? "shake-animation" : ""}`}>
            {errorInfo}
          </h6>
        ) : null}
        <div className="btn-login">
          <button
            className={`button1 ${error ? "shake-animation" : ""}`}
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
