import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../Admin/Admin'

const AdminRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={<Admin />}/>
    </Routes>
  )
}

export default AdminRouter
