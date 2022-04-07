import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Update from './Update'
import AdminGrid from './AdminGrid'
import AdminNavbar from './AdminNavbar'
import AdminUserDetails from './AdminUserDetails'
const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <AdminGrid />
      <Update />
      <AdminUserDetails/>
    </div>
  )
}
export default Admin
