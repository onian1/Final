import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import '../common/Footer.css';

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <footer className={`footer ${colorMode}`}>
      <p className="text-center">&copy; 2024 Your App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
