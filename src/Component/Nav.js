import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./nav.css";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
const { Search } = Input;

const Nav = () => {
  const { searchvalue, setsearchvalue } = useContext(AllDataScaffoldContext);
  const handleSearch = (values) => {
    setsearchvalue(values);
    // onSearch(values);
  };
  console.log(searchvalue);
  const Username = localStorage.getItem("username");
  return (
    // <div className="ma">
    <div className="main_nav flex">
      {/* <div > */}
      <div>
        <a href="/home" className="flex a">
          <img
            className="img1"
            src="https://www.shutterstock.com/image-vector/design-concept-construction-flat-style-600w-540677266.jpg"
            alt="Logo"
            width="60px"
          ></img>
          <div className="padl text_h ">INSDI</div>
        </a>
        {/* </div> */}
      </div>
      <div>
        <Space className="searchBox" direction="vertical">
          <Search
            placeholder="Search For products"
            value={searchvalue}
            onChange={(e) => {  
              handleSearch(e.target.value);
            }}
            enterButton
          />
        </Space>
      </div>
      <div className="text_h2 flex " style={{ width: "300px" }}>
        <div>{Username}</div>
        <Link to="/cart" className="links">
          <ShoppingCartOutlined /> cart
        </Link>
        <Link to="/" className="links">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Nav;
