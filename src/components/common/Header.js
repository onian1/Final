import React from 'react';
import Navbar from '../../components/Navbar';
import { useColorMode } from '@chakra-ui/react';
import './Header.css';

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <header className={`header ${colorMode}`}>
      <Navbar />
    </header>
  );
};

export default Header;
