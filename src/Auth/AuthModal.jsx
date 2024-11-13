import { Box, Modal } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register'


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {location.pathname === "/login-page" ? <Login /> : <Register />}
      </Box>
    </Modal>
  );
};

export default AuthModal;
