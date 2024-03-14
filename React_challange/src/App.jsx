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
  Button,
  Modal,
  Typography,
} from "@mui/material";

import "./App.css";
import { Paper } from "@mui/material";

function App() {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [symbol, setSymbol] = useState("");
  const [stockAmount, setStockAmount] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const apiUrl =
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        <Container sx={{ minWidth: 120, p: 2 }}>
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
        </Container>
        <Container sx={{ p: 2, gap: 3, display: "flex" }}>
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
        </Container>
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
              <h4>{stock}</h4>
            </Box>
            <Box>
              <h2>${price}</h2>
            </Box>
          </Paper>
        </Container>
        <Container
          sx={{
            display: stock ? "flex" : "none",
            flexDirection: "column",
            py: 2,
          }}
        >
          <Box>Estimated amount</Box>
          <Box>
            Buy {stockAmount} x ${price} {stock} = $
            {(stockAmount * price).toFixed(2)}
          </Box>
        </Container>
        <Container
          sx={{
            display: stock ? "flex" : "none",
            justifyContent: "end",
            py: 2,
          }}
        >
          <Button
            onClick={stockAmount ? toggleModal : null}
            variant={stockAmount ? "contained" : "outlined"}
          >
            Buy {stock}
          </Button>
          <Modal
            open={isModalOpen}
            onClose={toggleModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-title" variant="h6" component="h2">
                Trade Successfull!
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                You have successfully bought {stockAmount} {stock} shares for $
                {(stockAmount * price).toFixed(2)}
              </Typography>
            </Box>
          </Modal>
        </Container>
      </Container>
    </>
  );
}

export default App;
