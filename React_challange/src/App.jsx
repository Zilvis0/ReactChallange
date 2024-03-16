import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";

import "./App.css";
import SecurityInput from "./components/SecurityInput";
import SharesInput from "./components/SharesInput";
import StockInfoDisplay from "./components/StockInfoDisplay";
import ModalComponent from "./components/ModalComponent";
import BuyStockButton from "./BuyStockButton";

function App() {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [symbol, setSymbol] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const apiUrl =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo";

  const handleStockChange = (event) => {
    setStock(event.target.value);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSymbol(data["Global Quote"]["01. symbol"]);
        setPrice(parseFloat(data["Global Quote"]["05. price"]).toFixed(2));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Container>
        <Container>
          <h1>Stock Order</h1>
        </Container>
        {symbol && (
          <SecurityInput
            stock={stock}
            handleStockChange={handleStockChange}
            symbol={symbol}
          ></SecurityInput>
        )}
        <SharesInput
          stockAmount={stockAmount}
          setStockAmount={setStockAmount}
        ></SharesInput>
        <StockInfoDisplay
          stock={stock}
          price={price}
          stockAmount={stockAmount}
        ></StockInfoDisplay>
        <Container
          sx={{
            display: stock ? "flex" : "none",
            justifyContent: "end",
            py: 2,
          }}
        >
          <BuyStockButton
            stockAmount={stockAmount}
            toggleModal={toggleModal}
            stock={stock}
          ></BuyStockButton>
          <ModalComponent
            stockAmount={stockAmount}
            stock={stock}
            price={price}
            isModalOpen={isModalOpen}
            toggleModal={toggleModal}
          ></ModalComponent>
        </Container>
      </Container>
    </>
  );
}

export default App;
