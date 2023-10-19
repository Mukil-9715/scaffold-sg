import React, { useContext, useEffect } from "react";
import "./LoginPage.css";
import ProductCart from "../ProductCart";
import Nav from "../Nav";
import Footer from "../Footer";
import AllDataScaffoldContext from "../ScaffoldContext/DataContext";
import ScrollToTop from "../ScrollToTop";
import { useNavigate } from "react-router-dom";
// import InfoCircleOutlined from

const ProductsPage = () => {
  const navigation = useNavigate() 
  useEffect(() => {
    if (fromhomecart === "" || fromhomecart === null){
      navigation("/home")
    }
  }, [])
  
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])

  let { cartitems } = useContext(AllDataScaffoldContext);
  let fromhomecart = cartitems;
  //  debugger

  // return Object.keys(fromhomecart).map((e) => {
  //   let valueofthekey = fromhomecart[e];

  return (
    <div className="ProductsPage">
      <ScrollToTop />
      <Nav />
      <div className="productdisplay">
        <div className="d flex0 ">
          <img
            className="proimg"
            src={fromhomecart.image}
            alt="car"
            width=" 50%"
          />
        </div>
        <div className="boderg"></div>
        <div className="d flexr">
          <ProductCart CartDetails={fromhomecart} />
        </div>
      </div>
      <Footer />
    </div>
  );
  // });
};

export default ProductsPage;
