import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth";
import { styled } from "styled-components";

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
        <Links to="/">Asociaciones</Links>
        <LinksContainer>
          <NavLinks to="/marvel">Marvel</NavLinks>
          <NavLinks to="/dc">DC</NavLinks>
          <NavLinks to="/other">OTHER</NavLinks>
          <NavLinks to="/search">Search</NavLinks>
        </LinksContainer>
      </Header>

      <Footer>
        <span>User login: {user?.name}</span>
        <Button onClick={onLogout}>Logout</Button>
      </Footer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  background-color: #222;
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
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-image: linear-gradient(to top, #d8d9db 0%, #fff 80%, #fdfdfd 100%);
  border-radius: 30px;
  border: 1px solid #8f9092;
  transition: all 0.2s ease-in-out;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
  &:hover {
    box-shadow: 0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1,
      0 -6px 4px #fefefe, inset 0 0 3px 3px #cecfd1;
  }
`;
