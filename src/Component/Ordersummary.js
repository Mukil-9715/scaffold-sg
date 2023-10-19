import { Button } from "antd";
import React, { useContext, useState } from "react";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const Ordersummary = () => {
  let { cartitems, Prices } = useContext(AllDataScaffoldContext);
  let fromhomecart = cartitems;
  let prices = Prices;
  const [count, setcount] = useState(0);
  const [Tlpri, setTlpri] = useState(0);
  // let count =1 
  console.log(count);
  // let Tlcount 

  const handleCount = (plusororminus ) => {
    const noprice = +prices.replace("$", "").replace(",", "");
    console.log(noprice);
   if (plusororminus === "plus") {
    // count += 1
    // count++ 
    setcount(count + 1) 
   }
   else if(plusororminus === "minus"){
    setcount(count   - 1) 
  }
  //  (plusororminus === "plus" ? Tlprice +1 : Tlprice -1);
  setTlpri(count * noprice );
  console.log(Tlpri);
  };
  // debugger

  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm "> 
        <div className="  flex">
          <div className="width8 flex">
            <div>
              <img
                className="img"
                src={fromhomecart.image}
                alt={fromhomecart.name}
                width="200px"
              />
            </div>
            <div>
              <div>{fromhomecart.name}</div>
              <div>{Tlpri}</div>
              <div>
                <Button
                  onClick={()=>{handleCount("minus")}}
                >
                  -
                </Button>
                <span style={{ padding: 20 }}>{count}</span>
                <Button
                  onClick={()=>{handleCount("plus")}}
                >
                  +
                </Button>
              </div>
              {/* <div><input type="button" onClick={()=>{setcount(count+1)}}>+</input><span>{count}</span><input type="button" onClick={()=>{setcount(count-1)}}>+</input></div> */}
            </div>
          </div>
          <div>delivery </div>
        </div>

        <div>
          <Button>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
