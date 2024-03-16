import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function SecurityInput({ stock, symbol, handleStockChange }) {
  return (
    <Container sx={{ minWidth: 120, p: 2 }}>
      <FormControl fullWidth>
        <InputLabel>Security</InputLabel>
        <Select
          sx={{ backgroundColor: "background.default" }}
          label="Security"
          value={stock}
          onChange={(e) => handleStockChange(e)}
        >
          {symbol ? (
            <MenuItem value={symbol}>{symbol}</MenuItem>
          ) : (
            <MenuItem>Loading Stocks, please wait...</MenuItem>
          )}
        </Select>
      </FormControl>
    </Container>
  );
}
