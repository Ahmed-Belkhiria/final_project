import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Newsletter from "../../components/newsletter/Newsletter";
import "./cart.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/cartRedux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct);
  };
  return (
    <div className="cartContainer">
      <Navbar />
      <div className="cartWrapper">
        <h3>Your Cart</h3>
        <div className="cartTop">
          <button className="cartTopButton">Continue Shopping</button>
          <div className="cartTopTexts">
            <span className="cartTopText">
              Shopping Cart({cart.products.length})
            </span>
            <span className="cartTopText">wishlist (0)</span>
          </div>
          <button className="cartTopButton">Checkout Now</button>
        </div>

        <div className="cartBottom">
          <div className="cartInfo">
            {cart.products.map((product) => (
              <div className="cartProduct">
                <button className="cartDeleteButton" onClick={handleDelete}>
                  X
                </button>
                <div className="cartProductDetail">
                  <img
                    src={`../${product.path}`}
                    alt=""
                    className="cartProductImage"
                  />
                  <div className="cartDetails">
                    <span className="cartDetailsProductName">
                      Name: {product.name}
                    </span>
                    <span className="cartDetailsProductSize">
                      Description: {product.desc}
                    </span>
                    <span className="cartDetailsProductId">
                      ID: {product.id}
                    </span>
                  </div>
                </div>

                <div className="cartProductPriceDetails">
                  <div className="cartProductAmountContainer">
                    <div className="cartProductAmount">
                      <span className="cartDetailsProductName">Quantity: </span>
                      <span className="cartDetailsProductName">
                        {product.quantity}
                      </span>
                    </div>
                  </div>
                  <div className="cartProductPrice">
                    <span className="cartDetailsProductName">Price: </span>
                    <span className="cartDetailsProductName">
                      {product.price * product.quantity} $
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <hr
              style={{
                backgroundColor: "#eee",
                border: "none",
                height: "1px",
              }}
            />
          </div>
          <div className="cartSummary">
            <h1 className="cartSummaryTitle">ORDER</h1>
            <div className="cartSummaryItem">
              <span className="cartSummaryItemText">Subtotal</span>
              <span className="cartSummaryItemPrice">$ {cart.total}</span>
            </div>
            <div className="cartSummaryItem">
              <span className="cartSummaryItemText">Estimated Shipping</span>
              <span className="cartSummaryItemPrice">$ 6</span>
            </div>
            <div className="cartSummaryItem">
              <span className="cartSummaryItemText">Shipping Discount</span>
              <span className="cartSummaryItemPrice">$ -6</span>
            </div>
            <div className="cartSummaryItem">
              <span className="cartSummaryItemText">Total</span>
              <span className="cartSummaryItemPrice">$ 500</span>
            </div>
            <button className="cartSummaryButton">CHECK OUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
