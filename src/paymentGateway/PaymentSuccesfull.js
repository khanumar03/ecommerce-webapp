import React from "react";
import "./Py.css";
import { Link } from 'react-router-dom'

const PaymentSuccesfull = () => {
  return (
    <div className="payment_succesfull">
      <div className="h_logo">
        <Link to="/">
        <img
          src="https://iqexpress.co.uk/wp-content/uploads/2018/01/amazon-logo-transparent.png"
          alt="123"
        />
        </Link>
      </div>
      <div className="py_content">
        <div className="h_py">
          <img
            src="https://cdn.dribbble.com/users/2960440/screenshots/8599913/media/dbd45827a0d850ac8738f0c3123f23e2.gif"
            alt="123"
            className="py_img_asd"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccesfull;
