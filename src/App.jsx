import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Error from './components/Error'
import Home, { homeLoader } from './components/Home'


// library imports





const router = createBrowserRouter([
  {
    path: "/",
    element : <Home />,
    loader : homeLoader,
    errorElement : <Error />
  }
])

function App() {


  return (
    <div className='App'>
      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer></ToastContainer>
        
    </div>
  )
}

export default App
