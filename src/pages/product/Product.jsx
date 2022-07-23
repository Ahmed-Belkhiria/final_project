import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addProduct } from "../../redux/cartRedux";
import Navbar from "../../components/navbar/Navbar";
import "./product.css";
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios
          .get("http://localhost:8080/products/")
          .then((res) => {
            const product = res.data.find((product) => product.id == id);
            setProduct(product);
            console.log(product);
          });
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div>
      <Navbar />
      <div className="productWrapper">
        <div className="imgContainer">
          <img src={`../${product.path}`} alt="" className="productImage" />
        </div>
        <div className="productInfoContainer">
          <h1 className="productTitle">{product.name}</h1>
          <p className="productDescription">{product.desc}</p>
          <span className="productPrice">$ {product.price}</span>
          <div className="productAddContainer">
            <div className="productAmountContainer">
              <RemoveIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
              <span className="productAmount">{quantity}</span>
              <AddIcon
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
              <button onClick={handleClick} className="productAddButton">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
