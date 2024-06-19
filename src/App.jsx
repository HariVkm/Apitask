import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Pages/Layout'
import Sample from './Pages/Sample'
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
       <Route index element={<Sample/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
