import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'

const AdminDashboard = () => {
  return (
    <div className="p-10" >
      <Grid sx={{ display: "flex" }} >
        <Grid className='px-2 w-[35rem]' item xs={12} md={6}>
          <Achivement />
        </Grid>
        <Grid item xs={12} md={8} className="w-full" >
          <MonthlyOverview />
        </Grid>
      </Grid>

    </div>

  )
}

export default AdminDashboard
