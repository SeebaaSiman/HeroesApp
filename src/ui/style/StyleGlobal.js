import { createGlobalStyle, styled } from "styled-components";
import ComicBookBoldItalic from './../fonts/Comic Book Bold Italic.otf';
import ComicBookBold from './../fonts/Comic Book Bold.otf';
import ComicBookItalic from './../fonts/Comic Book Italic.otf';
import ComicBook from './../fonts/Comic-Book.otf';

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
export const BoxStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
};
export const PageContainer = styled.div`
font-family:"Comic";
min-height: 100vh;
margin:1rem;
`
export const StyleGlobal = createGlobalStyle`
@font-face {
    font-family: 'Comic Book Bold Italic';
    src: url(${ComicBookBoldItalic}) format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Comic Book Bold';
    src: url(${ComicBookBold}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Comic Book Italic';
    src: url(${ComicBookItalic}) format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Comic";
    src: url(${ComicBook}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family:"Comic";

}
html{
    background-color: #e2dfdd;
    color: #000;
    text-transform: uppercase;
    font-family:"Comic";
}

::-webkit-scrollbar {
    width: 0;
    display: none;
  }
h5,p,ul,li, h4,h6,h1,h2,h3,button,div,span,b ,input{
  font-family:"Comic";

  /* color:white; */
}
`;

/* ${props => props.deviceType === "desktop" && `
  * {
    cursor: none;
  }
  `} */
  // const heroImageUrl = `./../../../assets/heroes/${id}.jpg`;