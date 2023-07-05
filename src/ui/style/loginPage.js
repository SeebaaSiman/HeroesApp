import { keyframes, styled } from "styled-components";
const shake = keyframes`
 0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 60vw;
  margin: auto;
  background-color: #171717;
  border-radius: 25px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }
  .shake-animation {
    animation: ${shake} 0.5s linear;
  }
`;
export const HeaderLogin = styled.p`
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 2em;
`;
export const FieldLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
`;
export const InputLogin = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
  .shake-animation {
    animation: ${shake} 0.5s linear;
  }
`;
export const BtnLogin = styled.button`
  margin: 2rem;
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 10px;
  border: none;
  outline: none;
  transition: 0.3s ease-in-out;
  background-color: #252525;
  color: white;
  &:hover {
    background-color: black;
    color: white;
  }
  .shake-animation {
    animation: ${shake} 0.5s linear;
  }
`;
export const ErrorLogin = styled.h6`
  color: red;
  margin: 12px;
  .shake-animation {
    animation: ${shake} 0.5s linear;
  }
`;
