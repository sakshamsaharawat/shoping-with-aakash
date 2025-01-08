import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'

const AdminDashboard = () => {
  return (
    <div className="p-10" >
      <Grid sx={{ display: "flex" }} >
        <Grid className=' w-[35rem] shadow-lg shadow-gray-700 ' item xs={12} md={6}>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={5} className="w-full shadow-lg shadow-gray-700" >
          <MonthlyOverview />
        </Grid>
      </Grid>
      <Grid xs={12} md={6}>

        <Grid className="shadow-lg shadow-gray-700 " item xs={12} md={6}  >
          <OrdersTableView />
        </Grid>
        <Grid className="shadow-lg shadow-gray-700 " item xs={12} md={6}  >
          <ProductTableView />
        </Grid>
      </Grid>
    </div>

  )
}

export default AdminDashboard
