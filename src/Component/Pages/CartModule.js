import React, { useContext, useEffect, useState } from "react";
import "../nav.css";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Nav from "../Nav";
import Footer from "../Footer";
import AllDataScaffoldContext from "../ScaffoldContext/DataContext";

const { Meta } = Card;

const Cart = () => {
  const navigation = useNavigate();
  let {  itemsDetails, scDetails } = useContext(AllDataScaffoldContext);
  const CartObject = scDetails;
  useEffect(() => {
    let username = localStorage.getItem("username");
    if (username === "" || username === null) {
      navigation("/");
    }
  }, []);
  console.log(CartObject);
  // //   debugger;
  // return Object.keys(fromhomecart).map((e) => {
  //   let valueofthekey = fromhomecart[e];

  return (
    <div className="bclr">
      <ScrollToTop />
      <Nav />
      <div className="maincart">
        <div className="cart">
          {Object.keys(CartObject).map((e) => {
            let cartsobjects = CartObject[e];
            return (
              Object.keys(cartsobjects).map((e) => {
                let cartsobject = cartsobjects[e];
                return (
                  
                  <Card
                className="cads"
                style={{
                  width: 350,
                }}
                cover={<img  className="img " alt={cartsobject.name} src={cartsobject.image} style={{ height: 250 }}/>}
              >
                <Meta className="padb limited-lines" title={cartsobject.name} description={cartsobject.description} />
                <div className="padb">
                  <div className="">
                    Cart value : <span className="text_p">{cartsobject.counts}</span>
                  </div>
                </div>
                <div className="padb ">
                  <div className="">
                    Size : <span className="text_h2">{cartsobject.variantsize}</span>
                  </div>
                   <div className="">
                    Price : <span className="text_h2">{cartsobject.discountedCost}</span>
                  </div>
                </div>
                {/* <div className="padb">
                  <div className="">
                    Availability : <span className="text_p">stock</span>
                  </div>
                </div> */}
              </Card>
                );
              })
              
            );
          })}
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
