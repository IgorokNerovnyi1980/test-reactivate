import React from 'react';
import {createGlobalStyle} from 'styled-components';
//pages
import Weather from './pages/Weather';


const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  input, button{
    outline:none;
    border:none;
    background:none;
  }

  body{
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  input, textarea{
    outline: none;
  }

`;

function App() {


    return (
        <> 
          < GlobalStyle />
          <Weather />
        </>
    );
}



export default App;
