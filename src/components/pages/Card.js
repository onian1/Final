import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

const Card = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete(data);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4" boxShadow="md">
      <Text>Name: {data.name}</Text>
      <Text>Value: {data.value}</Text>
      <Button colorScheme="red" onClick={handleDelete} mt="2">
        Delete
      </Button>
    </Box>
  );
};

export default Card;
