import React from "react";
import "./Login.css";
import Signin from "./Signin";
import Signup from "./Signup";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Container maxW="md" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Link to="/" className="dfg">
            <Button
              fontSize="4xl"
              fontFamily="Work sans"
              w="100%"
              // _focus="none"
              colorScheme="teal"
              p="35px"
            >
              <Image
                src="https://iqexpress.co.uk/wp-content/uploads/2018/01/amazon-logo-transparent.png"
                boxSize="150"
                alt="dsgfgf"
                objectFit="contain"
              />
            </Button>
          </Link>
        </Box>
        <Box bg="#fff" w="100%" p={4} borderRadius="lg" borderWidth="0.5px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab _focus="none">Login</Tab>
              <Tab _focus="none">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Signin />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
