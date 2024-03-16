import { FormControlLabel, Radio, RadioGroup, Button } from "@mui/material";
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

  const radioCommonStyle = {
    borderRadius: 25,
    border: "none",
    color: "white",
    padding: "5px 15px",
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#8a6fc7",
      border: "none",
    },
    "&:active": {
      backgroundColor: "#543c7e",
      border: "none",
    },
  };

  const radioStyleSelected = {
    ...radioCommonStyle,
    backgroundColor: "#684fa5",
  };

  const radioStyleNotSelected = {
    ...radioCommonStyle,
    color: "#d1b8ff",
    backgroundColor: "#241e29",
  };

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
            <Button
              variant={
                selectedRadio === option.value ? "contained" : "outlined"
              }
              sx={
                selectedRadio === option.value
                  ? radioStyleSelected
                  : radioStyleNotSelected
              }
              color="primary"
              onClick={() =>
                handleRadioClicked({ target: { value: option.value } })
              }
            >
              {option.label}
            </Button>
          }
        />
      ))}
    </RadioGroup>
  );
}
