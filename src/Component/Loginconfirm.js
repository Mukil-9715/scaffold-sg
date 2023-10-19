import "./Pages/LoginPage.css";
import "../Component/nav.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
// import Nav from './Nav';

const Loginconfirm = ({setloginforms,loginfo}) => {
  const navigation = useNavigate() 
  useEffect(() => {
    let username = localStorage.getItem('username')
    if (username === "" || username === null){
      navigation("/")
    }
  }, [])
  const usenavigate = useNavigate();
  const { postResponse } = useContext(AllDataScaffoldContext);
  const respond = postResponse;

  const onFinish = (values) => {

    console.log(values)
    const loginHandle = () => {
      respond.map((response) => {
        if (response.email !== values.email) {
          // alert("please enter valid emails");
        } else if (response.email === values.email) {
          if (response.password === values.password) {
            // usenavigate("/Home");
            // console.log("success");
          } else {
            // alert("please enter valid password");
          }
        }
      });
    };
    //  debugger
    loginHandle();
  };
  const handelback=()=>{
    loginfo(true)
    setloginforms(false)

  }
  return (
    <div className="loginconfirm">
      <div className="brh-loginconfirm ">
        <div className="width8 flex">
          <Form
            name="normal_login"
            className="login-forms"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              className="padbt"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/* <Checkbox> */}
            <div className="padbt1">

              By continuing, you agree to INSDI's{" "}
              <Link to="/">Terms of Use</Link> and{" "}
              <Link to="/">Privacy Policy.</Link>
            {/* </Checkbox> */}

            </div>
            <Form.Item>
              {/* <Link to="/Home"> */}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                // onClick={onFinish}
              >
                Log in
              </Button>
              <Button onClick={()=>{handelback()}}>
                Back
              </Button>
            </Form.Item>
          </Form>
          {/* <div>
            <div>Name </div>
            <div>Phone number</div>
          </div>
          <Button>Change</Button> */}
        </div>
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Loginconfirm;
