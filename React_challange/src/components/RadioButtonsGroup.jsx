import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";

export default function RadioButtonsGroup() {
  const [selectedRadio, setSelectedRadio] = useState("market");

  const radioOptions = [
    { value: "market", label: "Market" },
    { value: "limit", label: "Limit" },
    { value: "stop", label: "Stop" },
  ];

  const handleRadioClicked = (event) => {
    setSelectedRadio(event.target.value);
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#684fa5",
        light: "#d1b8fe",
      },
    },
  });

  return (
    <RadioGroup
      row
      aria-labelledby="radio-buttons-group-label"
      defaultValue="market"
      name="radio-buttons-group"
      onChange={handleRadioClicked}
    >
      {radioOptions.map((option) => (
        <FormControlLabel
          sx={{ m: 1 }}
          key={option.value}
          value={option.value}
          control={<Radio sx={{ display: "none" }} />}
          label={
            <ThemeProvider theme={theme}>
              <Button
                variant={
                  selectedRadio === option.value ? "contained" : "outlined"
                }
                sx={{
                  borderRadius: 25,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
                color="secondary"
                onClick={() =>
                  handleRadioClicked({ target: { value: option.value } })
                }
              >
                {option.label}
              </Button>
            </ThemeProvider>
          }
        />
      ))}
    </RadioGroup>
  );
}
