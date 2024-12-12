import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductsTable from './Components/ProductsTable';
import CreateProductFrom from './Components/CreateProductFrom';
import OrdersTable from './Components/OrdersTable';
import CustomersTable from './Components/CustomersTable';
import AdminDashboard from './Components/AdminDashboard';


const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <Inventory2Icon /> },
    { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <MenuBookIcon /> },
    { name: "AddProducts", path: "/admin/product/create", icon: <AddIcon /> },
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box sx={{ overflow: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            {/* {isLargeScreen && <Toolbar />} */}
            <>
                <List>
                    {menu.map((item, index) =>
                        <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>{item.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>)}
                </List>
            </>
            <List>
                <ListItem disablePadding >
                    <ListItemButton >
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    return (
        <div>
            <div className='flex border h-[100vh] space-between'> 
                <CssBaseline />

                <div className='w-[15%] border-2 border-r-gray-300 h-full'>
                    {drawer}
                </div>
                <div className='w-[85%]'>
                    <Routes>
                        <Route path="/" element={<AdminDashboard />}></Route>
                        <Route path="/product/create" element={<CreateProductFrom />}></Route>
                        <Route path="/products" element={<ProductsTable />}></Route>
                        <Route path="/orders" element={<OrdersTable />}></Route>
                        <Route path="/customers" element={<CustomersTable />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin
