import React from 'react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { Link as ChakraLink, Button, Flex, useColorMode, Icon } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex className="navbar" justify="space-between" align="center">
      <Flex>
        <ChakraLink as={ReactRouterNavLink} to="/" className="nav-link" activeClassName="active" exact>
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouterNavLink} to="/about" className="nav-link" activeClassName="active">
          Projects
        </ChakraLink>
        <ChakraLink as={ReactRouterNavLink} to="/contact" className="nav-link" activeClassName="active">
          Contact
        </ChakraLink>
      </Flex>
      <Flex>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <Icon as={FiMoon} /> : <Icon as={FiSun} />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
