import React, { useContext } from "react";
import { Steps } from "antd";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
const Stepper = () => {
  const {stepperControler} = useContext(AllDataScaffoldContext)

  return (
    <div className="buyPage">
      <div className="step">
        <Steps
          current={stepperControler}
          items={[
            {
              title: "Login",
            },
            {
              title: "Delivery Address",
            },
            {
              title: "Order Summary",
            },
            {
              title: "Payment",
            },
          ]}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Stepper;
