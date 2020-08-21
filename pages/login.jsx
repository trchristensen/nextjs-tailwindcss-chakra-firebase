import { useEffect, useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading
} from '@chakra-ui/core';

export default () => {

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <div className="max-w-sm bg-white p-6 shadow-md mx-auto rounded-md">
      <Heading className="text-center mb-6 mt-4">Sign In</Heading>
      <form>
        <FormControl isRequired className="mb-4">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <button
          className="shadow-lg w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};
