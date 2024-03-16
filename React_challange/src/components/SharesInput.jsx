import { FormControl, TextField, Container } from "@mui/material";
import RadioButtonsGroup from "./RadioButtonsGroup";

export default function SharesInput({ stockAmount, setStockAmount }) {
  const handleStockAmountChange = (event) => {
    const sanitizedValue = event.target.value.replace(/[^0-9]/g, "");
    setStockAmount(sanitizedValue);
  };

  return (
    <Container
      sx={{
        p: 2,
        gap: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Shares"
        variant="outlined"
        sx={{ backgroundColor: "background.default", borderRadius: 1 }}
        value={stockAmount}
        onChange={handleStockAmountChange}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      />
      <FormControl>
        <RadioButtonsGroup></RadioButtonsGroup>
      </FormControl>
    </Container>
  );
}
