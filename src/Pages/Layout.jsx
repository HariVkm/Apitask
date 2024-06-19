import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Sample from './Sample'

const Layout = () => {
  return (
    <>
    <Sample></Sample>
  
    <Outlet></Outlet>
    <Footer></Footer>
  
    </>
  )
}

export default Layout