import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AddProduct from "../../components/addProduct/AddProduct";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import "./productList.css";
const ProductList = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <Navbar />
      <div className="productFilterContainer">
        <div className="productFilter">
          <span className="productFilterText">Filter Products</span>
          <select
            name="size"
            onChange={(e) => setCategory(e.target.value)}
            className="productFilterSelect"
          >
            <option disabled>Type</option>
            <option>All</option>
            <option value="earrings">Earrings</option>
            <option value="necklaces">Necklaces</option>
            <option value="bracelets">Bracelets</option>
            <option value="rings">Rings</option>
          </select>
        </div>
      </div>
      <Products cat={category} />
      <Newsletter />
      <AddProduct />
      {/* <Footer /> */}
    </div>
  );
};

export default ProductList;
