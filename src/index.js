import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
</React.StrictMode>,
  document.getElementById('root')
);
