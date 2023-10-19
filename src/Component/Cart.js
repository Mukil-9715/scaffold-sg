import React, { useEffect, useState } from "react";
import "./nav.css";
import { Card, Button } from "antd";
import Nav from "./Nav";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const { Meta } = Card;

const Cart = () => {
  const navigation = useNavigate() 
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])
  // //   debugger;
  // return Object.keys(fromhomecart).map((e) => {
  //   let valueofthekey = fromhomecart[e];

  return (
    <div className="bclr">
      <ScrollToTop />
      <Nav />
      <div className="maincart">
        <div className="cart">
          <Card
            className="cads"
            style={{
              width: 300,
              // marginTop: 25,
            }}
            cover={<img alt="example" src="image" />}
          >
            <Meta className="padb" title="name" description="description" />
            <div className="padb">
              <div className="">
                Cart value : <span className="text_p">count</span>
              </div>
            </div>
            <div className="padb ">
              <div className="">
                Price : <span className="text_h2">price</span>
              </div>
              <div className="">
                Total Price : <span className="text_h2">Number</span>
              </div>
            </div>
            <div className="padb">
              <div className="">
                Availability : <span className="text_p">stock</span>
              </div>
            </div>
            {/* <div className="padb">
          </div> */}
          </Card>
        </div>
        <div>
          <Button className="" type="primary" size="large">
            Buy
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
