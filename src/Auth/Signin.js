import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => setShow(!show);
  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch(() => setAlert(true));
  };
  return (
    <VStack spacing="10px">
      {alert ? (
        <Alert status="error" borderRadius="8px">
          <AlertIcon />
          <AlertDescription>
            The email address is badly formatted !
          </AlertDescription>
        </Alert>
      ) : (
        ""
      )}
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={email}
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick} _focus="none">
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        _focus="none"
        onClick={handleSignIn}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Signin;
