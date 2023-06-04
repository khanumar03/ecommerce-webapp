import React from "react";
import { Link } from "react-router-dom";
import { StateValue } from "../../API/Stateprovider";

const Empty = () => {
  const [{ user }, dispatch] = StateValue();

  return (
    <>
      <img
        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
        alt="logo"
      />
      <div className="info">
        <span>Your Basket is empty</span>
        {user ? (
          <p>{user?.email}</p>
        ) : (
          <div className="bttn">
            <Link to="/login">
            <button className="btnss1">Sign In to you accout</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Empty;
