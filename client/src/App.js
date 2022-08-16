import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <BrowserRouter>
      s
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
