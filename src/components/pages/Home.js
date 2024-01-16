import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Box,
  Center,
  useToast,
} from '@chakra-ui/react';
import './Home.css';

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    toast({
      title: 'Data added successfully!',
      status: 'success',
      duration: 2500,
      isClosable: true,
    });

    localStorage.setItem(data.name, data.value);
    reset();
  };

  return (
    <Center>
      <Box maxW="md" rounded="md" p={6} shadow="md" textAlign="center">
        <Text mb={4} fontSize="lg" fontWeight="bold">
          Add Your Item
        </Text>
        <form onSubmit={handleSubmit(onSubmit)} >
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              {...register('name', { required: 'Name is required' })}
              type="text"
            />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.value}>
            <FormLabel htmlFor="value">Value</FormLabel>
            <Input
              id="value"
              {...register('value', { required: 'Value is required' })}
              type="text"
            />
            <FormErrorMessage>{errors.value && errors.value.message}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            mt={4}
            bgGradient="linear(to-r, #54a0ff, #3a85ff)"
            borderRadius="full"
            w="50%"
            py={2}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};

export default Home;