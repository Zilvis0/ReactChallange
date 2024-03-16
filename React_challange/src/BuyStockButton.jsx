import { Button } from "@mui/material";

export default function BuyStockButton({ stockAmount, toggleModal, stock }) {
  return (
    <Button
      onClick={stockAmount ? toggleModal : null}
      variant={stockAmount ? "contained" : "outlined"}
      sx={{ borderRadius: 25, textTransform: "none", fontWeight: "bold" }}
      color="secondary"
    >
      Buy {stock}
    </Button>
  );
}
