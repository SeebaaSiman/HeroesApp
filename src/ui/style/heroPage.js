import { styled } from "styled-components";
import { device, BoxStyle } from "./StyleGlobal";

export const HeroPageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  @media ${device.md} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const ButtonBack = styled.button`
  margin: 1rem;
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
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
export const CardImage = styled.div`
  margin: 1rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    margin-left: 0;
    margin-right: 0;
    width: 35%;
  }
  img {
    box-shadow: ${BoxStyle.boxShadow};

    object-fit: cover;
  }
`;
export const ContentContainer = styled(CardImage)`
  flex-direction: column;
`;
