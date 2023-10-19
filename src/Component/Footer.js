import React from "react";
import "./nav.css";
import {
  FacebookOutlined,
  AppleOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";


const Footer = () => {
  return (
    <div className=" footer_main flex">
      <div className="flex_c">
        <div className="">
          <img
            className="img padb"
            src="https://www.shutterstock.com/image-vector/design-concept-construction-flat-style-600w-540677266.jpg"
            alt=""
            width="120px"
          />
        </div>
        <div className="text_h0 padb">INSDI</div>
        <div className="text_p padb">
          We always make our customer <br/> happy by providing as many <br/>choises as
          possible
        </div>
        <div className="flex text_h padb logo">
          <div>
            <FacebookOutlined />
          </div>
          <div>
            <AppleOutlined />
          </div>
          <div>
            <GoogleOutlined />
          </div>
          <div>
            <TwitterOutlined />
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex1">
        <div>
          <div className="text_h pad2">About</div>
          <div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Features</li>
              <li>News</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text_h pad2">Company</div>
          <div>
            <ul>
              <li>Partner With Us </li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text_h pad2">Support</div>
          <div>
            <ul>
              <li>Contact Us</li>
              <li>Location</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
