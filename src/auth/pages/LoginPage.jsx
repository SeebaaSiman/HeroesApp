import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import {
  BtnLogin,
  ErrorLogin,
  FieldLogin,
  FormLogin,
  HeaderLogin,
  InputLogin,
  PageContainer,
} from "../../ui/style/loginPage";
import { Footer } from "../../heroes/footer";

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
    <>
      <PageContainer>
        <FormLogin className={`${error ? "shake-animation" : ""}`}>
          <HeaderLogin>Login</HeaderLogin>

          <FieldLogin>
            <span>@</span>
            <InputLogin
              autocomplete="off"
              placeholder="Username"
              className={`${error ? "shake-animation" : ""}`}
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
          </FieldLogin>
          {error ? (
            <ErrorLogin className={`${error ? "shake-animation" : ""}`}>
              {errorInfo}
            </ErrorLogin>
          ) : null}
          <BtnLogin
            className={`${error ? "shake-animation" : ""}`}
            onClick={onLogin}
          >
            Login
          </BtnLogin>
        </FormLogin>
      </PageContainer>
      <Footer />
    </>
  );
};
