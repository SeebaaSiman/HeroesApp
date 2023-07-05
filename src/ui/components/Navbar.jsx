import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { Button, Footer, Header, HeaderUser, LinksContainer, NavBarContainer, NavLinks, User } from "../style/Navbar";

export const Navbar = () => {
  //Traigo aquí por contexto el user, será user. name para saber el nombre del user//
  //También extraigo logout//
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogout = () => {
    logout(); //disparo la fx logout desde AuthProvider//
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <NavBarContainer>
      <Header>
        {/* <Links to="/">Asociaciones</Links> */}
        <LinksContainer>
          <NavLinks to="/marvel">Marvel</NavLinks>
          <NavLinks to="/dc">DC</NavLinks>
          <NavLinks to="/star-wars">Star Wars</NavLinks>
          <NavLinks to="/search">Search</NavLinks>
        </LinksContainer>
      </Header>

      <Footer>
        <HeaderUser>
          <h5>User login:</h5>
          <User>{user?.name}</User>
        </HeaderUser>
        <Button onClick={onLogout}>
          <span>Logout</span>
        </Button>
      </Footer>
    </NavBarContainer>
  );
};
