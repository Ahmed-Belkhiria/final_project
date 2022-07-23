import { LineAxisOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./addProduct.css";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState(0);
  const [success, setSuccess] = useState("");

  const AddProduct = async (e) => {
    e.preventDefault();
    let path = image.split("\\");
    path = path[path.length - 1];
    const product = { name, desc, price, quantity, category, path };
    await axios.post("http://localhost:8080/products", product).then((res) => {
      setSuccess(true);
    });
    window.location.href = "/products";
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Add a new product</h1>

      <form action="" className="addProductForm" onSubmit={AddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          className="formInput"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          className="formInput"
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          className="formInput"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Quantity"
          className="formInput"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <select
          style={{ width: "225px" }}
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          className="formInput"
        >
          <option disabled>Category</option>
          <option value="earrings">Earrings</option>
          <option value="necklaces">Necklaces</option>
          <option value="bracelets">Bracelets</option>
          <option value="rings">Rings</option>
        </select>

        <input type="file" onChange={(e) => setImage(e.target.value)} />

        <button type="submit" className="formButton">
          Add Product
        </button>
        <span>{success && "Product added successfully"}</span>
      </form>
    </>
  );
};

export default AddProduct;
