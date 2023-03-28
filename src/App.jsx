import { useState } from 'react'
import { IconBase } from 'react-icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Error from './components/Error'
import Home, { homeLoader } from './components/Home'

// import 'react-icons/ai';


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
      <IconBase></IconBase>
        
    </div>
  )
}

export default App
