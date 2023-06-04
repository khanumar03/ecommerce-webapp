import React from "react";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { StateValue } from "../API/Stateprovider";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../API/reducer";
import  { baseURL}  from "./axios";
import { useEffect } from "react";
import { db } from "../Auth/firebase";
import CurrencyFormat from "react-currency-format";

const Payment = () => {
  const [{ cart, user }, dispatch] = StateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await baseURL({
        method: "get",
        //stripe expect total amount in base currencies like Rupees to paise
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      console.log(response) 
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (user && cart.length !== 0) {
      setProcessing(true);

      console.log(CardElement());

      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          console.log(paymentIntent);
          // db.collection("users")
          //   .doc(user?.uid)
          //   .collection("order")
          //   .doc(paymentIntent.id)
          //   .set({
          //     cart: cart,
          //     amount: paymentIntent.amount,
          //     created: paymentIntent.created,
          //   });
          // setSucceeded(true);
          // setError(null);
          // setProcessing(false);

          dispatch({
            type: "EMPTY_CART",
          });

          history("/paysuccess");
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      if (!user && cart.length === 0) {
        alert("error");
      } else if (!user) {
        alert("plz login");
      } else if (cart.length === 0) {
        alert("Add product");
      }
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_cnt">
        <div className="header_pay">
          <span>Stripe Pay</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="cardelem">
              <CardElement onChange={handleChange} />
            </div>
          </div>
          <p className="emailss">Your Email : {user?.email}</p>
          <CurrencyFormat
            renderText={(value) => (
              <p className="total">
                Total Price : <strong>{value}</strong>
              </p>
            )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
          />
          {processing ? (
            <>
              <p className="loading">
                Processing <span className="spin"></span>
              </p>
            </>
          ) : (
            <>
              <button
                disabled={processing || disabled || succeeded}
                className="buybtn"
              >
                {processing ? "processing" : "Buy Now"}
              </button>
              <div>{error}</div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Payment;
