import React, { useContext, useState } from "react";
import { Card } from "antd";
import "./nav.css";
import { useNavigate } from "react-router-dom";
import AllDataScaffoldContext from "./ScaffoldContext/DataContext";
import { Empty } from "antd";

const { Meta } = Card;
const Cards = () => {
  const navigate = useNavigate();
  let { scaffold, searchvalue, setcartitems } = useContext(
    AllDataScaffoldContext
  );

  const scaffoldData = scaffold;
  console.log(searchvalue);
  let changethestateofcartsitems = setcartitems;
  const filtered = [];

  function handleCardsSearch() {
    // debugger;
    scaffoldData.filter((data) => {
      console.log(scaffoldData);
      const checkSearch = searchvalue.toString().toLowerCase();
      if (data.name.toLowerCase().includes(checkSearch)) {
        filtered.push(data);
      }
    });
    console.log(filtered);
  }

  handleCardsSearch();

  function getCartDetails(SeperateCardData) {
    changethestateofcartsitems(SeperateCardData);

    console.log(SeperateCardData);
    navigate("/CardDetails");
  }
  return (
    <div className="card">
      {filtered !== 0 ? (
        filtered.map((e) => {
          return (
            <div>
              <Card
                onClick={() => getCartDetails(e)}
                className="cad"
                hoverable
                style={{
                  width: 250,
                  height: 350,
                }}
                cover={
                  <img
                    className="img"
                    alt={e.name}
                    src={e.image}
                    style={{ height: 250 }}
                  />
                }
              >
                <div>
                  <Meta className="text_p" title={e.name} />
                </div>
              </Card>
            </div>
          );
        })
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Cards;
