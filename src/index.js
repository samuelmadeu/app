import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

// global styles and fonts 
injectGlobal`
    body {
        margin: 0;
        padding: 0;
    }  
`;

ReactDOM.render(<App />, document.getElementById('root'));

/*
  @font-face {
    font-family: 'Operator Mono';
    src: url('../fonts/Operator-Mono.ttf');
  }
*/