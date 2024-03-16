import { Button, createTheme, ThemeProvider } from "@mui/material";

export default function BuyStockButton({ stockAmount, toggleModal, stock }) {
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
        sx={{ borderRadius: 25, textTransform: "none", fontWeight: "bold" }}
        color="secondary"
      >
        Buy {stock}
      </Button>
    </ThemeProvider>
  );
}
