import React, { createContext, useEffect, useState } from "react";

const AllDataScaffoldContext = createContext();

export function ScaffoldDataProvider({ children }) {
  const [cartitems, setcartitems] = useState({});
  let [scaffold, setScaffold] = useState([]);
  const [postResponse, setpostResponse] = useState([]);
  const [searchvalue, setsearchvalue] = useState([]);
  const [Prices, setPrices] = useState("$0");
  const [username, setusername] = useState();
  const [currentthestateofcartsitems, changethestateofcartsitems] = useState();
  const [refresh, setrefresh] = useState({});
  const [itemsDetails, setitemsDetails] = useState({});
  const [itemsDetails1, setitemsDetails1] = useState({});
  const [scDetails, setScDetails] = useState({});
  const [deliveryformdetails, setDeliveryformdetails] = useState({});
  const [stepperControler, setStepperControler] = useState(0);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:8000/CardDetails")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setScaffold(message);
        });
    }
    getData();
  }, []);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:8000/posts")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setpostResponse(message);
        });
    }
    getData();
  }, [refresh]);

  return (
    <AllDataScaffoldContext.Provider
      value={{
        Prices,
        setPrices,
        searchvalue,
        setsearchvalue,
        postResponse,
        scaffold,
        setScaffold,
        cartitems,
        setcartitems,
        username,
        setusername,
        setrefresh,
        changethestateofcartsitems,
        currentthestateofcartsitems,
        scDetails,
        setScDetails,
        itemsDetails,
        setitemsDetails,
        itemsDetails1,
        setitemsDetails1,
        deliveryformdetails,
        setDeliveryformdetails,
        stepperControler,
        setStepperControler,
      }}
    >
      {children}
    </AllDataScaffoldContext.Provider>
  );
}

export default AllDataScaffoldContext;
