import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

// injected global styles for styled components 
injectGlobal`
    html, body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
    }  
`;

ReactDOM.render(<App />, document.getElementById('root'));
