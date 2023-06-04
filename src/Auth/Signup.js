import React from "react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

const Signup = () => {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history("/");
        }
      })
      .catch((err) =>{
        console.log(err)
        setAlert(true)
      });
    setEmail("");
    setPassword("");
  };
  return (
    <VStack spacing="5px">
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
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          value={email}
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
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
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
