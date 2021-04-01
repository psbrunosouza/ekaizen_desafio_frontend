import React from 'react';
import { BrowserRouter } from "react-router-dom";
import {Routes} from './routes';
import { GlobalStyle, Sidebar } from './styles/index';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes/>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
