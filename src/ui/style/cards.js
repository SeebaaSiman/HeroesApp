import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { BoxStyle } from "./StyleGlobal";


export const Book = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.2rem;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: whitesmoke;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
  &:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }
  img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }
`;
export const ContentInBook = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  font-size: 1.2rem;
  color: #ff5252;
  transform: skewY(-4deg);
  text-shadow: white 1px 1px, black 2px 2px;
`;
export const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  h5 {
    position: absolute;
    top: 1%;
    color: #000;
    padding: 3px;
    background-image: linear-gradient(
      to top,
      #d8d9db 0%,
      #fff 80%,
      #fdfdfd 100%
    );
    border-radius: 30px;
    border: 1px solid #8f9092;
    box-shadow: ${BoxStyle.boxShadow};
  }
  img {
    width: 100%;
    height: 100%;
    filter: grayscale(0%);
  }
`;
export const MoreInfo = styled(Link)`
  color: #000;
  transform: skewY(0deg);
  text-shadow: none;
  text-decoration: none;
  margin: 1rem;
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #ff5252;
  border: 2px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0px #000;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #ff5252;
    border: 2px solid #ff5252;
    box-shadow: 5px 5px 0px #ff5252;
  }
  &:active {
    background-color: #fcf414;
    box-shadow: none;
    transform: translateY(4px);
  }
`;
