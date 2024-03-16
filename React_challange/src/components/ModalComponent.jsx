import { Box, Modal, Typography } from "@mui/material";

export default function ModalComponent({
  stockAmount,
  stock,
  price,
  isModalOpen,
  toggleModal,
}) {
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

  return (
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
  );
}
