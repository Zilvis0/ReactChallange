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
          }
        />
      ))}
    </RadioGroup>
  );
}
