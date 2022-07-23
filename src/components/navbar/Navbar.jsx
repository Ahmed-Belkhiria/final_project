import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.cart.quantity);
  const { currentUser } = useSelector((state) => state.user);
  const signOut = () => {
    console.log("aa");
    dispatch(logout());
  };

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="logo">FairyGirl Jewelry</span>
      </div>
      <div className="navbarRight">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="navbarLink">Home</span>
        </Link>
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="navbarLink">Products</span>
        </Link>
        <span className="navbarLink">About us</span>
        <span className="navbarLink">Contact</span>
        {currentUser && (
          <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <Badge
              className="navbarLink"
              badgeContent={quantity}
              color="primary"
            >
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        )}
        {currentUser && (
          <span onClick={signOut} className="navbarLink">
            Sign out
          </span>
        )}

        {!currentUser && (
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="navbarLink">Sign In</span>
          </Link>
        )}
        {!currentUser && (
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span className="navbarLink">Sign Up</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
