import React, { useContext, useEffect, useState } from "react";
import Carousel from "../Carousel";
import Nav from "../Nav";
import Cards from "../Cards";
import Footer from "../Footer";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const Home = () => {
  const navigation = useNavigate() 
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/") 
    }
  }, [])
  
  return (
    <div>
      <ScrollToTop />
      <Nav />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
