import { Box, Modal, } from '@mui/material'
import React from 'react'
import Register from './Register'
import Login from './Login'
import { useLocation } from 'react-router-dom';

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
  alignItems: "center"       
};

const AuthModel = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        {location.pathname === "/login" ? <Login/> : <Register/>}
        </Box>
      </Modal>
    </div>
  )
}

export default AuthModel
