import React from "react";
import Main from "../../components/main/Main";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import Products from "../../components/products/Products";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
