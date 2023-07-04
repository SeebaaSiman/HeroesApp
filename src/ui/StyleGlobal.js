import { createGlobalStyle } from "styled-components";

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
//! Aplicación de device
/* h1 {
    font-size: 2rem;
    ${device.md} {
      font-size: 3rem;
    }
  } */
export const BoxStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
};
export const StyleGlobal = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select:none;
    overflow-x: hidden;

}
html{
    background-color: #e2dfdd;
    color: #000;
    /* font-family: "Oxygen" ,'Bebas Neue',"poppins",sans-serif; */
}

::-webkit-scrollbar {
    width: 0;
    display: none;
  }


  /* ${props => props.deviceType === "desktop" && `
    * {
      cursor: none;
    }
    `} */
`