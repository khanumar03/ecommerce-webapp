import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { StateValue } from "../../API/Stateprovider";
import { getCartTotal } from "../../API/reducer";
import { Link } from "react-router-dom";

const Subtotal = () => {
  const [{ cart }, dispatch] = StateValue();

  const removeAll = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  };
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <div className="sub_container">
            <p>
              Subtotal ({cart.length} items ) <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> this order contains a gift
            </small>
            <Link to="/payment">
              <button className="btnSub">proceed to buy</button>
            </Link>
            <button className="btnSub" onClick={removeAll}>
              remove all items
            </button>
          </div>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹ "}
      />
    </div>
  );
};

export default Subtotal;
