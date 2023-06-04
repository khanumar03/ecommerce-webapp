import React, { useEffect } from "react";
import "./Cart.css";
import { StateValue } from "../../API/Stateprovider";
import { Scrollbars } from "react-custom-scrollbars-2";
import Empty from "./Empty.js";
import Subtotal from "./Subtotal";
import Cartproduct from "./Cartproduct";
import { getCartTotal } from "../../API/reducer";

const Cart = () => {
  const [{ cart }, dispatch] = StateValue();
  useEffect(() => {
    getCartTotal(cart)
  },[cart])
  return (
    <div className="cart">
      <div className="leftcart">
        {cart.length === 0 ? (
          <div className="Emptybox">
            <Empty />
          </div>
        ) : (
          <div className="product">
            <Cartproduct />
          </div>
        )}
      </div>
      <div className="rightcart">
        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
