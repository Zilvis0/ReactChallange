import { Box, Paper, Container } from "@mui/material";
export default function StockInfoDisplay({ stock, price, stockAmount }) {
  return (
    <>
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
          Buy {stockAmount ? stockAmount : 0} x ${price} {stock} = $
          {(stockAmount * price).toFixed(2)}
        </Box>
      </Container>
    </>
  );
}
