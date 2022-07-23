import React from "react";
import "./product.css";
import SearchIcon from "@mui/icons-material/Search";
import UpdateIcon from "@mui/icons-material/Update";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = ({ item }) => {
  return (
    <div className="productCard">
      <img src={item.path} className="productCardImage" alt="" />
      <div className="productsInfo">
        <Link to={`/products/${item.id}`}>
          <div className="productsIcon">
            <SearchIcon />
          </div>
        </Link>
        <Link to={`/updateProduct/${item.id}`}>
          <div className="productsIcon">
            <UpdateIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
