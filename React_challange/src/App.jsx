import React, { useState, useEffect } from "react";
import {
  Container,
  FormControl,
  FormControlLabel,
  TextField,
  InputLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Select,
  Box,
} from "@mui/material";

import "./App.css";
import { Paper } from "@mui/material";

function App() {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [symbol, setSymbol] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const apiUrl =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo";

  const handleChange = (event) => {
    setStock(event.target.value);
  };

  const handleStockAmountChange = (event) => {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, "");
    setStockAmount(sanitizedValue);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setSymbol(data["Global Quote"]["01. symbol"]);
        setPrice(data["Global Quote"]["05. price"]);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // useEffect(() => {
  //   console.log(stockAmount);
  // }, [stockAmount]);

  return (
    <>
      <Container>
        <Container>
          <h1>Stock Order</h1>
        </Container>
        <Box sx={{ minWidth: 120, p: 2 }}>
          <FormControl fullWidth>
            <InputLabel>Security</InputLabel>
            <Select label="Security" value={stock} onChange={handleChange}>
              {symbol ? (
                <MenuItem value={symbol}>{symbol}</MenuItem>
              ) : (
                <MenuItem>Loading Stocks, please wait...</MenuItem>
              )}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ p: 2, gap: 3, display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="Shares"
            variant="outlined"
            value={stockAmount}
            onChange={handleStockAmountChange}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              defaultValue="market"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="market"
                control={<Radio />}
                label="Market"
              />
              <FormControlLabel
                value="limit"
                control={<Radio />}
                label="Limit"
              />
              <FormControlLabel value="stop" control={<Radio />} label="Stop" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Container>
          <Paper
            elevation={1}
            sx={{
              display: stock ? "flex" : "none",
              justifyContent: "space-between",
              px: 2,
            }}
          >
            <Box>
              <h2>{stock}</h2>
              <h4>Name</h4>
            </Box>
            <Box>
              <h2>${parseFloat(price).toFixed(2)}</h2>
            </Box>
          </Paper>
        </Container>
      </Container>
    </>
  );
}

export default App;
