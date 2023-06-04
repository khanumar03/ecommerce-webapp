import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Cart from "./Components/Cart/Cart";
import Login from "./Auth/Login";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StateValue } from "./API/Stateprovider";
import { auth } from "./Auth/firebase";
import Profile from "./Auth/Profile";
import Payment from "./paymentGateway/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentSuccesfull from "./paymentGateway/PaymentSuccesfull";

const App = () => {
  const [{ user }, dispatch] = StateValue();
  const [promise, setPromise] = useState(async () =>
    await loadStripe("stripe public key")
  );
  // const promise = loadStripe(
  //   "pk_test_51KWKGVSE8Tit44qssj0PeA8a3LgGsPWxnuDgyc9IEZtg2zWv6DaRHf5TOvZSY7OI4jK6pwymhYTHJJCBs97rMLjw00CV7lYO52"
  // );
  console.log(promise.then((x)=> console.log(x)));
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <ChakraProvider>
                <Login />
              </ChakraProvider>
            }
          />
          <Route
            path="/profile"
            element={
              <ChakraProvider>
                <Profile />
              </ChakraProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/paysuccess" element={<PaymentSuccesfull />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
