import React from "react";
import "./header.css";
import {
  MdSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { StateValue } from "../API/Stateprovider";
import { Link } from "react-router-dom";

const Header = () => {
  const [{ cart, user }, dispatch] = StateValue();

  return (
    <div className="header">
      <div className="left_nav">
        <div className="logo hovereffect">
          <span>E-Commerce</span>
        </div>
      </div>
      <div className="header_search">
        <input type="text" className="search" />
        <MdSearch fontSize="25px" color="white" className="S_icon" />
      </div>
      <div className="right_nav">
        <Link to={user ? '/profile' : "/login"} className="TD">
          <div className="header_option hovereffect">
            <span className="header_optionLineOne">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option hovereffect RO">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Order</span>
        </div>
        <Link to="/cart">
          <div className="header_optionBasket hovereffect">
            <MdOutlineShoppingCart fontSize="35px" color="white" />
            <span className="header_basketcount">{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
