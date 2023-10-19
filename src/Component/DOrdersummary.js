import { Button } from "antd";
import React, { useContext, useState } from "react";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const DOrdersummary = () => {
  let { cartitems, Prices } = useContext(AllDataScaffoldContext);
  let fromhomecart = cartitems;
  let prices = Prices;
  const count = 0;
  let ad;
  function add() {
    debugger;
    return (ad = count + 1);
  }

  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">
        <div className="  flex">
          <div className="width8 flex">
            <div>
              {/* {" "} */}
              <img
                className="img"
                src={fromhomecart.image}
                alt={fromhomecart.name}
                width="200px"
              />
            </div>
            <div>
              <div>{fromhomecart.name}</div>
              <div>{prices}</div>
              <div>
                <Button
                //    onClick={ }
                >
                  -
                </Button>
                <span style={{ padding: 20 }}>{count}</span>
                <Button>+</Button>
              </div>
            </div>
          </div>
          <div>delivery </div>
        </div>
        <hr></hr>
        <div>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default DOrdersummary;
