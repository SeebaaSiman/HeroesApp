import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { styled } from "styled-components";
import { BoxStyle } from "../StyleGlobal";

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
          <NavLinks to="/other">OTHER</NavLinks>
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

const NavBarContainer = styled.div`
  background-color: #222;
  border-radius: 0 0 10px 10px;
  box-shadow: ${BoxStyle};
  font-size: 1.2rem;
`;
const Header = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
`;
const Links = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const NavLinks = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #000;
  }
  &.active {
    color: #1a31b8;
  }
`;
const Footer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  justify-content: space-around;
  align-items: center;
  span {
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 0.1em 0.25em;
  width: 13em;
  height: 4.2em;
  background-color: #212121;
  border: 0.08em solid #fff;
  border-radius: 0.3em;
  font-size: 12px;
  span {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0.4em;
    width: 8.25em;
    height: 2.5em;
    background-color: #212121;
    border-radius: 0.2em;
    font-size: 1.5em;
    color: #ffff;
    border: 0.08em solid #ff5252;
    box-shadow: 0 0.4em 0.1em 0.019em #ff5252;
    &:hover {
      color: #ff5252;
      transition: all 0.5s;
      transform: translate(0, 0.4em);
      box-shadow: 0 0 0 0 #ff5252;
    }
    &:not(hover) {
      transition: all 1s;
    }
    &:active {
      background-color: #fcf414;
      box-shadow: none;
    }
  }
`;
const User = styled.h5`
  margin-left: 6px;
  color: #ff5252;
  transform: skewY(-4deg);
  text-shadow: white 1px 1px, cyan 2px 2px;
`;
const HeaderUser = styled.div`
  display: flex;
`;
