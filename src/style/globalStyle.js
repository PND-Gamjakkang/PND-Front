import { createGlobalStyle } from 'styled-components';
// import NotoSans_MediumFont from '../assets/fonts/NotoSansKR-Medium.ttf';
// import NotoSans_RegularFont from '../assets/fonts/NotoSansKR-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  :root {
    --vh: 100%;
    width: 1920px;
    font-size: 16px;

   }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, 
  a, abbr, acronym, address, big, cite, 
  del, em, strong, dfn,  img, ins, kbd, q, s, samp,
  small, strike,  sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {

    margin: 0;
    border: 0;
    padding: 0;
    
  } 
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }
  body {
    touch-action: manipulation;
    line-height: 1;
    overflow-y: hidden;
    overflow-x: hidden;
    // 가운데 정렬
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  /* 위에가 styled-reset 내용 */
  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
    user-select: none;
  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
  select{
    border: none;
    &:focus {
      outline: none;
    }
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .scroll {
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }
  @media screen and (max-width: 375px) {
        html {
                font-size: 40%;
        }
  }
    @media screen and (max-width: 429px) {
        .pageContainer {
            width: 100vw;
        }
    }

`;
