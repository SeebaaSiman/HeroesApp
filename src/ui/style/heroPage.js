import { styled } from "styled-components";
import { device, BoxStyle } from "./StyleGlobal";

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

export const HeroPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:1rem;
  @media ${device.md} {
    flex-direction: row;
    align-items: start;
    gap:0;
  }
`;
export const CardImage = styled.div`
 width: 80%;
  border-radius: 10px;
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width:100%;
    box-shadow: ${BoxStyle.boxShadow};
    object-fit: cover;
  }
`;
export const ContentContainer = styled(CardImage)`
padding: 1rem;
  flex-direction: column;
  `;
export const HeaderContent = styled.div`
display:flex;
flex-direction: column;
`
export const ContainerLeft = styled.div`
gap:1rem;
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
@media ${device.md} {
  width:50%;
}`