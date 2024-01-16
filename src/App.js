import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AnimatedRoute from './utils/AnimatedRoute';
import { theme } from "./utils/theme.js";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <AnimatedRoute>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatedRoute>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
