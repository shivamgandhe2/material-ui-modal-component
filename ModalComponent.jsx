// ModalComponent.js
import React from "react";
import { Modal, Box, Typography } from "@mui/material";

const ModalComponent = ({ open, onClose, data }) => {
  const styles = {
    modalBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      borderRadius: "8px",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.modalBox}>
        <Typography variant="h6" component="h2">
          {data.title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{data.description}</Typography>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
