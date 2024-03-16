import { Button, createTheme, ThemeProvider } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function BuyStockButton({ stockAmount, toggleModal, stock }) {
  const buttonStyle = {
    borderRadius: 25,
    textTransform: "none",
    fontWeight: "bold",
  };

  const buttonDisabledStyle = {
    borderRadius: 25,
    textTransform: "none",
    fontWeight: "bold",
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#684fa5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={stockAmount ? toggleModal : null}
        variant={stockAmount ? "contained" : "outlined"}
        sx={stockAmount ? buttonStyle : buttonDisabledStyle}
        color="secondary"
      >
        Buy {stock}
      </Button>
    </ThemeProvider>
  );
}
