import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { creatOrder } from '../../../State/Order/Action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useSelector((store) => store)

  const handleSubmit = (e, selectedAddress = null) => {
    e.preventDefault()
    const data = selectedAddress
      ? selectedAddress // Use selected address if provided
      : new FormData(e.currentTarget)
    const address = selectedAddress || {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber")
    }
    const orderData = { address, navigate }
    dispatch(creatOrder(orderData))
  }

  return (
    <div>
      <Grid container spacing={4}>
        {/* First Section: Existing Addresses */}
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b'>
            {auth.user?.address.map((item, index) => (
              <div key={index} className="mb-4">
                <AddressCard address={item} />
                <Button
                  sx={{ py: 1.5, mt: 1, bgcolor: 'RGB(145 85 253)' }}
                  size='large'
                  variant="contained"
                  onClick={(e) => handleSubmit(e, item)} // Pass the selected address
                >
                  Deliver Here
                </Button>
              </div>
            ))}
          </div>
        </Grid>

        {/* Second Section: Add New Address Form */}
        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "20px" }}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="given-name"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid container spacing={3} style={{ marginTop: "5px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3} style={{ marginTop: "5px" }}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  sx={{ py: 1.5, mt: 2, bgcolor: 'RGB(145 85 253)' }}
                  size='large'
                  variant="contained"
                  type='submit'
                >
                  Deliver Here
                </Button>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
