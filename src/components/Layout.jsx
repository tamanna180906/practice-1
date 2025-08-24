import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <>
        <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    </div>
  )
}

export default Layout