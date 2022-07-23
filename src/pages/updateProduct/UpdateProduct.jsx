import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addProduct } from "../../redux/cartRedux";
import Navbar from "../../components/navbar/Navbar";
import "./updateProduct.css";

const UpdateProduct = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleUpdateImage = (e) => {
    e.preventDefault();
    console.log("e");
    console.log(e.target.value);
  };
  const updateProduct = async (e) => {
    e.preventDefault();
    let path;
    console.log(image);
    if (image) {
      path = product.image;
    } else {
      path = image.split("\\");
      path = path[path.length - 1];
    }
    const updatedProduct = { name, desc, price, quantity, category, path };

    await axios
      .patch(`http://localhost:8080/products/${id}`, updatedProduct)
      .then((res) => {
        setSuccess(true);
      });
    window.location.href = "/products";
  };

  const deleteProduct = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
      setSuccess(true);
    });
    window.location.href = "/products";
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios
          .get("http://localhost:8080/products/")
          .then((res) => {
            const product = res.data.find((product) => product.id == id);
            setProduct(product);
            setName(product.name);
            setDesc(product.desc);
            setPrice(product.price);
            setQuantity(product.quantity);
            setCategory(product.category);
            setImage(product.path);
          });
      } catch {}
    };
    getProduct();
  }, [id]);
  return (
    <div>
      <Navbar />
      <div className="productWrapper">
        <div className="imgContainer">
          <img src={`../${product.path}`} alt="" className="productImage" />
        </div>
        <div className="productInfoContainer">
          <form
            action=""
            className="updateProductForm"
            onSubmit={updateProduct}
          >
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Product Name"
              className="updateFormInput"
              defaultValue={product.name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Product Description"
              className="updateFormInput"
              defaultValue={product.desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label htmlFor="">Price</label>
            <input
              type="number"
              placeholder="Product Price"
              className="updateFormInput"
              defaultValue={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="">Quantity</label>
            <input
              type="number"
              placeholder="Product Quantity"
              className="updateFormInput"
              defaultValue={product.quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label htmlFor="">Category</label>
            <select
              style={{ width: "225px", margin: "0 auto" }}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="updateFormInput"
              defaultValue={product.category}
            >
              <option disabled>Category</option>
              <option value="earrings">Earrings</option>
              <option value="necklaces">Necklaces</option>
              <option value="bracelets">Bracelets</option>
              <option value="rings">Rings</option>
            </select>
            <label htmlFor="">Image</label>

            <input
              style={{ margin: "0 auto" }}
              type="file"
              onChange={(e) => handleUpdateImage}
            />

            <button type="submit" className="formButton">
              Update Product
            </button>
            <span>{success && "Success"}</span>
          </form>
          <button
            style={{ backgroundColor: "red", width: "100%" }}
            className="formButton"
            onClick={deleteProduct}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
