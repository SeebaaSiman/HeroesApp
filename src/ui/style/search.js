import { keyframes, styled } from "styled-components";

export const SearchPageContainer = styled.div`
  margin: 1rem;
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
export const FieldContainer = styled.div`
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  max-width: 180px;
`;
export const Inupt = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  caret-color: #38caef;
  color:#ff5252;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label{
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  &:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }

  /* reset input */
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;
export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #9b9b9b;
  pointer-events: none;
  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }
`;
const showIn = keyframes`
0% {
  opacity: 0;
  transform: translateY(-10px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}`
export const DropdownContent = styled.ul`
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 8px;
  animation: ${showIn} 0.3s ease-in-out;
  li {

  padding: 4px 0;
  &:hover {
  background-color: #ddd;
}
}
`