import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'react-jss'
import theme from './constants/theme'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


