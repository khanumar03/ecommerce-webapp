import React, { useState } from "react";
import style from "styled-components";
import { StateValue } from "../API/Stateprovider";

const Product = ({ title, src, price, id }) => {
  const [{ cart, amount }, dispatch] = StateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        src: src,
        price: price,
      },
    });
  };
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        id: id,
      },
    });
  };
  return (
    <ProductComponent>
      <ProdName>{title}</ProdName>
      <Prodimg src={src} />
      <ProdPrice>₹ {price}</ProdPrice>
      {cart.some((p) => p.id === id) ? (
        <ProdBtn onClick={removeFromCart}>Remove From Cart</ProdBtn>
      ) : (
        <ProdBtn onClick={addToCart}>Add To Cart</ProdBtn>
      )}
    </ProductComponent>
  );
};

export default Product;

const ProductComponent = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: 270px;
  cursor: pointer;
  padding: 10px 12px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 7px;
  transition: 500ms;
  margin-bottom:20px;

  &:hover {
      transform: translateY(-15px)
  }
`;

const ProdName = style.p`
   @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
   font-size: 18px;
   margin-left: 6px;
   font-weight: 600;
   font-family: 'Poppins', sans-serif;

`;
const Prodimg = style.img`
  width: 200px;
  margin-left: 20px;
`;

const ProdPrice = style.strong`
  font-size: 18px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
`;
const ProdBtn = style.button`
  width: 170px;
  height: 32px;
  font-size: 17px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  color:#fff;
  background: orange;
`;
