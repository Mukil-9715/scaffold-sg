// import React from "react";
import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import "../Component/nav.css";
import "./Pages/LoginPage.css";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";

const Deliveryform = ({loginfos,setDeliverydevision, DeliveryFormStatusSet, DeliveryFormResultStatusSet }) => {
  const { deliveryformdetails, setStepperControler,setDeliveryformdetails } = useContext(
    AllDataScaffoldContext
  );
  const handleForm = (values) => {
    console.log(values);
    setDeliveryformdetails(values);
    DeliveryFormStatusSet(false)
    DeliveryFormResultStatusSet(true)
  };
  const handleCancel=()=>{
    loginfos(true)
    setDeliverydevision(false)
    setStepperControler(0)
  }

  return (
    <>
      <Form
        name="detailforms"
        onFinish={handleForm}
        //   labelCol={{
        //     span: 4,
        //   }}
        wrapperCol={{
          span: 17,
        }}
        style={{
          maxWidth: 900,
          marginBlock: 60,
        }}
        // className="flex"
      >
        {/* <div className="flex_c"> */}
        <div className="flex">
          <div className="flex_col">
            <lable className="MB">Name : </lable>
            <lable className="MB"> Flat Number : </lable>
            <lable className="MB"> Street : </lable>
            <lable className="MB"> City/District/Town : </lable>
            <lable className="MB0"> State : </lable>
            <lable className="MB0"> Landmark : </lable>
            <lable className="MB"> Pincode : </lable>
            <lable className="MB"> Mobile Number : </lable>
            <lable className="MB0"> Alternative Phone : </lable>
            {/* <lable className="MB"> Name : </lable> */}
            {/* <lable className="MB"> Name : </lable> */}
          </div>

          <div>
            <Form.Item name="Name">
              <Input className="input" type="text" placeholder="Name" />
            </Form.Item>
            <Form.Item name="Flat Number">
              <Input className="input" type="text" placeholder="Flat Number" />
            </Form.Item>

            <Form.Item name="Street">
              <Input className="input" type="text" placeholder="Street" />
            </Form.Item>
            <Form.Item name="City/District/Town">
              <Input
                className="input"
                type="text"
                placeholder="City/District/Town"
              />
            </Form.Item>
            <Form.Item name="State">
              <Input className="input" type="text" placeholder="State" />
            </Form.Item>
            <Form.Item name="Landmark">
              <Input className="input" type="text" placeholder="Landmark" />
            </Form.Item>
            <Form.Item name="Pincode Number">
              <Input className="input" type="text" placeholder="Pincode" />
            </Form.Item>
            <Form.Item name="Phone Number">
              <Input
                className="input"
                type="text"
                placeholder="Mobile Number"
              />
            </Form.Item>
            <Form.Item name="Alternative Phone">
              <Input
                className="input"
                type="text"
                placeholder="Alternative Phone"
              />
            </Form.Item>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Form.Item>
            <Button style={{width:"100px",fontWeight:"600"}} type="primary" htmlType="submit">Save</Button>
            <div>
            <Button style={{width:"100px",fontWeight:"600"}} onClick={()=>{handleCancel()}} htmlType="submit">Cancel</Button>
            </div>
          </Form.Item>
        </div>
        {/* </div> */}
      </Form>
    </>
  );
};

export default Deliveryform;
