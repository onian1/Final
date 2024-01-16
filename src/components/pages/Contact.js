import React from 'react';
import {
  VStack,
  HStack,
  Image,
  Text,
  Divider,
  Link,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import profImage from '../../prof.jpg';

const Contact = () => {
  return (
    <VStack spacing={4} alignItems="center">
      <Image
        src={profImage}
        alt="Profile Picture"
        rounded="full"
      />
      <VStack spacing={4} fontSize="xl" fontWeight="bold" textAlign="center">
        <Text>Aleko oniani</Text>
        <Text>Vitom Front End Developer</Text>
      </VStack>
      <Divider />
      <VStack spacing={4}>
        <HStack spacing={4} align="center">
          <IconButton as={Icon} icon={<FaPhone />} aria-label="Phone" />
          <Text>+995 555-55-55-55</Text>
        </HStack>
        <HStack spacing={4} align="center">
          <IconButton as={Icon} icon={<FaEnvelope />} aria-label="Email" />
          <Link href="mailto:aleko.oniani.1@btu.edu.ge">
            <Text>aleko.oniani.1@btu.edu.ge</Text>
          </Link>
        </HStack>
        <HStack spacing={4} align="center">
          <IconButton as={Icon} icon={<FaGlobe />} aria-label="Website" />
          <Link href="https://yourwebsite.com">
            <Text>https://yourwebsite.com</Text>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Contact;
