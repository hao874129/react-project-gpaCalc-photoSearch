// import { Outlet, Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import React from 'react'
import Footer from './pages/components/Footer'
import Header from './pages/components/Header'

const Layout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default Layout