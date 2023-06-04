import React, { useState } from "react";
import "./Cartproduct.css";
import { StateValue } from "../../API/Stateprovider";
import { Scrollbars } from "react-custom-scrollbars-2";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Cartproduct = () => {
  const [{ cart }, dispatch] = StateValue();

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const handleQtyInc = (id) => {
    dispatch({
      type: "CHANGE_QTY_inc",
      payload: id,
    });
  };

  const handleQtyDec = (id) => {
    dispatch({
      type: "CHANGE_QTY_dec",
      payload: id,
    });
  };
  return (
    <div>
      <div className="product_list">
        <Scrollbars>
          {cart.map((x, xNumber) => {
            const { id, src, title, price } = x;
            return (
              <article className="product_info" key={xNumber}>
                <img src={src} alt={title} />
                <div className="prod_info">
                  <p>{title}</p>
                  <span>₹ {price}</span>
                  <button
                    className="btnremovef"
                    onClick={() => removeFromCart(id)}
                  >
                    Remove from cart
                  </button>
                </div>
                <div className="cart_qty">
                  <button
                    className="btnqty up"
                    onClick={() => handleQtyInc(id)}
                  >
                    <IoIosArrowUp fontSize="25px" />
                  </button>
                  <small className="qty">{x?.qty}</small>
                  <button
                    className="btnqty down"
                    onClick={() => handleQtyDec(id)}
                  >
                    <IoIosArrowDown fontSize="25px" />
                  </button>
                </div>
              </article>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default Cartproduct;
