import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Nav from "../Nav";

import Loginconform from "../Loginconfirm";
import Ordersummary from "../Ordersummary";
import Stepper from "../Stepper";

import { useNavigate } from "react-router-dom";
import Deliverydevisions from "../Deliverydevision";
import Logininfo from "../Logininfo";
import Payment from "../Payment";
import ScrollToTop from "../ScrollToTop";
import AllDataScaffoldContext from "../ScaffoldContext/DataContext";

const Buypage = () => {
  const navigation = useNavigate() 
  const [loginfo, setloginfo] = useState(true)
  const [loginform, setloginform] = useState(false)
  const [Deliverydevision, setDeliverydevision] = useState(false)
  const [ordersummary, setordersummary] = useState(true)
  const [payment, setpayment] = useState(false)
  const {setStepperControler} = useContext(AllDataScaffoldContext)


  useEffect(() => {
    setStepperControler(0)
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])
  // setloginfo(true)
  return (  
    <div className="buypage"> 
      <Nav/>
      <ScrollToTop />
      <Stepper/>
      {loginfo&&(<Logininfo loginfo={setloginfo} setloginforms={setloginform} setDeliverydevisions={setDeliverydevision} />)} 
      {loginform&&(<Loginconform loginfo={setloginfo} setloginforms={setloginform} />)}
      {Deliverydevision&&(<Deliverydevisions setDeliverydevisions={setDeliverydevision} loginfo={setloginfo} setordersummary={setordersummary} />)}
      {ordersummary&&(<Ordersummary/>)}
      {payment&&(<Payment/>)}
      <Footer />
    </div>
  );
};

export default Buypage;
