import React, { useContext, useState } from "react";
import "./nav.css";
import "./Pages/LoginPage.css";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
import { Button, Radio, message } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";
import { Collapse } from "antd";
import { Link, useNavigate } from "react-router-dom";

const text1 = `Why the longer lead time? `;
const text2 = `Why the longer lead time? `;
const items = [
  {
    key: "1",
    label: "Dispached in 5-6 days ",
    children: <p className="clr">{text1}</p>,
    expandIconPosition: "End",
    // showArrow: false,
  },
  {
    key: "2",
    label: "Home Delivery - $ 10",
    children: <p className="clr">{text2}</p>,
    // showArrow: false,
  },
];

const ProductCart = ({ CartDetails }) => {
  const navigates = useNavigate();
  let { Prices, setPrices, itemsDetails, setitemsDetails, itemsDetails1, setitemsDetails1, scDetails, setScDetails  } = useContext(
    AllDataScaffoldContext
  );
  let prices = Prices;
  let setprices = setPrices;
  let SeperateCardData = CartDetails;
  const [count, setcount] = useState(1);
  const [values, setValues] = useState("");

  console.log(SeperateCardData);
  let variantsize = CartDetails.heights;

  const Changeprice = (e) => {
    // debugger
    const value = e.target.value;
    const indexno = variantsize.indexOf(value);
    if (variantsize[indexno]) {
      console.log("hi");
      setprices(CartDetails.price[indexno]);
    }
    setValues(value);
  };

  const setChange = (key) => {
    console.log(key);
  };
  function handlecart() {
    values
      ? (createObject(), navigates("/cart"))
      : message.warning("Select Varient");
  }
  function handlebuy() {
    values ? navigates("/buy") : message.warning("Select Varient");
  }
  let DiscounterdCost;
  function calculatediscountedCost() {
    const numericPrice = parseFloat(prices.replace("$", "").replace(",", ""));

    if (!isNaN(numericPrice)) {
      const totalCost = count * numericPrice;
      // Format the totalCost as a string with a dollar sign
      return `$${totalCost.toFixed(2)}`;
    } else {
      console.error("Invalid price format:", prices);
      return "Invalid Price";
    }
  }

  function calculateCost() {
    const numericPrice = parseFloat(prices.replace("$", "").replace(",", ""));

    if (!isNaN(numericPrice)) {
      const totalCost = count * numericPrice * 1.2;
      // Format the totalCost as a string with a dollar sign
      return `$${totalCost.toFixed(2)}`;
    } else {
      console.error("Invalid price format:", prices);
      return "Invalid Price";
    }
  }

  let Cost;
  function handleCount(Plusorminus) {
    Plusorminus === "plus"
      ? setcount(count + 1)
      : !count < 1 && setcount(count - 1);
    console.log(Cost);
  }

  let object = [];
  function createObject() {
    let cartobject = JSON.parse(JSON.stringify(itemsDetails));
    let objects = JSON.parse(JSON.stringify(itemsDetails1));

    if (!objects[SeperateCardData.variantsize]){
      (objects[values]= {
          ...SeperateCardData,
          variantsize: values,
          counts: count,
          Cost: Cost,
          discountedCost: DiscounterdCost,
      }
      )
      setitemsDetails1(objects);
    }else {
      (objects[values]= {
          ...SeperateCardData,
          variantsize: values, 
          counts: count,
          Cost: Cost,
          discountedCost: DiscounterdCost,
      }
      )
      setitemsDetails1(objects);
    }
    if (!cartobject[SeperateCardData.name]) {
      
      cartobject[SeperateCardData.name] = objects
      
    object.push(cartobject);
    setitemsDetails(cartobject);
    setScDetails(cartobject);
    // debugger
  }
  else {
    cartobject[SeperateCardData.name] = objects
  
      object.push(cartobject);
      setitemsDetails(cartobject);
      setScDetails(cartobject);

    }
  }

  // let object = [];
  // function createObject() {
  //   let cartobject = JSON.parse(JSON.stringify(itemsDetails));
  //   let objects = JSON.parse(JSON.stringify(itemsDetails1));

  //   if (!cartobject[SeperateCardData.name]) {
  //     console.log("first");
  //     cartobject[SeperateCardData.name] =
  //     !cartobject[SeperateCardData.variantsize] &&
  //     {[values]: {
  //       ...SeperateCardData,
  //       variantsize: values,
  //       counts: count,
  //       Cost: Cost,
  //       discountedCost: DiscounterdCost,
  //       id:1
  //       },
  //     }
  //   object.push(cartobject);
  //   setitemsDetails(cartobject);
  //   setScDetails(cartobject);
  //   // debugger
  // }
  // else {
  //   cartobject[SeperateCardData.name] =
  //    object.keys(cartobject[SeperateCardData.name]) == values ?
    
  //     {[values]:{
  //         ...SeperateCardData,
  //         variantsize: values,
  //         counts: count,
  //         Cost: Cost,
  //         discountedCost: DiscounterdCost,
  //         id:3
  //       }}
  //     :(
  //       objects[values]= {
  //         ...SeperateCardData,
  //         variantsize: values,
  //         counts: count,
  //         Cost: Cost,
  //         discountedCost: DiscounterdCost,
  //         id:4

  //     });

  //     object.push(cartobject);
  //     setitemsDetails(cartobject);
  //     setScDetails(cartobject);

  //   }
  // }

  // let object = [];
  // function createObject() {
  //   let cartobject = JSON.parse(JSON.stringify(itemsDetails));

  //   if (!cartobject[SeperateCardData.name]) {
  //     console.log("first");
  //     cartobject[SeperateCardData.name] = !cartobject[SeperateCardData.name][
  //       SeperateCardData.variantsize
  //     ]
  //       & (
  //           [values]= {
  //             ...SeperateCardData,
  //             variantsize: values,
  //             counts: count,
  //             Cost: Cost,
  //             discountedCost: DiscounterdCost,
  //             id: 1,
  //           }
            
  //       ) 
        
  //     object.push(cartobject);
  //     setitemsDetails(cartobject);
  //   } else {
  //     cartobject[SeperateCardData.name] = !cartobject[SeperateCardData.name][
  //       SeperateCardData.variantsize
  //     ]
  //       & (
  //           [values]= {
  //             ...SeperateCardData,
  //             variantsize: values,
  //             counts: count,
  //             Cost: Cost,
  //             discountedCost: DiscounterdCost,
  //             id: 3,
  //           }
  //         )
        

  //     object.push(cartobject);
  //     setitemsDetails(cartobject);
  //   }
  // }

  console.log(itemsDetails);
  console.log(object);

  return (
    <div className="flexr  ProductCart">
      <div className="maxwidth marl">
        <div className="padb text_h">{CartDetails.name}</div>
        <div className="padb text_p">{CartDetails.description}</div>
        <div className="flex" style={{ width: "300px" }}>
          <div className="padb text_h2">
            {(DiscounterdCost = calculatediscountedCost())}{" "}
          </div>
          <div className="padb text_h1" style={{ color: "grey" }}>
            <del>{(Cost = calculateCost())} </del>
          </div>
          <div className="padb text_h1" style={{ color: "green" }}>
            20% Off <InfoCircleFilled />
          </div>
        </div>
        <div className="padb text_h2">
          <Radio.Group>
            {variantsize.map((e) => {
              return (
                <Radio className=" text_p" value={e} onChange={Changeprice}>
                  {e}
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <div style={{ width: 150 }} className="flex">
          <Button
            type="primary"
            onClick={() => {
              handleCount("minus");
            }}
          >
            -
          </Button>
          <h2>{count}</h2>
          <Button
            type="primary"
            onClick={() => {
              handleCount("plus");
            }}
          >
            +
          </Button>
        </div>
        <div className="padb text_p">Available status</div>

        <div className="flex padb halwidth">
          <div>
            <Button onClick={handlebuy} size="large">
              Buy Now
            </Button>
          </div>
          <div>
            <Button type="primary" size="large" onClick={handlecart}>
              Add cart
            </Button>
          </div>
        </div>
        <div>
          <Collapse
            className="downslide"
            expandIconPosition="end"
            onChange={setChange}
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
