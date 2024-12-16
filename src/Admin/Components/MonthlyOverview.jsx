import { TrendingUp } from '@mui/icons-material'
import PortraitIcon from '@mui/icons-material/Portrait';
import React from 'react'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const salesData = [
    {
        status: "245K",
        title: "Sales",
        color: "#9c4ef5",
        icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />
    },
    {
        status: "12.5K",
        title: "Customers",
        color: "#17b030",
        icon: <PortraitIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        status: "1.54K",
        title: "Products",
        color: "#baac13",
        icon: <Inventory2Icon sx={{ fontSize: "1.75rem" }} />
    },
    {
        status: "88K",
        title: "Revenue",
        color: "#0cabeb",
        icon: <MonetizationOnIcon sx={{ fontSize: "1.75rem" }} />
    }

]
const renederStatus = () => {
    return salesData.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display: "flex", alignItem: 'center'
            }}>
                <Avatar variant='rounded' sx={{
                    mr: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    background: `${item?.color}`
                }}>
                    {item.icon}
                </Avatar>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant='caption'>{item?.title}</Typography>
                    <Typography variant='h6'>{item?.status}</Typography>
                </Box>
            </Box>
        </Grid>
    ))

}

const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: "#242B2E", color: "white" }}>
            <CardHeader title="Monthly Overview"
                action={
                    <IconButton size="small" sx={{ color: "white" }}>
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            Total 48.5% growth
                            😎this month
                        </Box>
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: "1.5px !important"
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renederStatus()}

                </Grid>

            </CardContent>
        </Card>
    )
}

export default MonthlyOverview
