import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./products.css";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios
          .get("http://localhost:8080/products")
          .then((res) => {
            setProducts(res.data);
          });
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    console.log(cat);
    const filter = products.filter((item) => item.category == cat);
    cat && setFilteredProducts(products.filter((item) => item.category == cat));
    cat == "All" && setFilteredProducts(products);
    console.log(filter);
  }, [products, cat, filters]);

  return (
    <div className="productsContainer">
      <h2 className="mainTitle">Here goes our latest products</h2>
      <div className="productsWrapper">
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products.map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Products;
