import { useState } from 'react'
import { IconBase } from 'react-icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Error from './components/Error'
import Home, { homeLoader } from './components/Home'
import Login, { loginLoader } from './pages/Login'
import PageNotFound from './pages/pageNotFound/PageNotFound'
import Pending, { pendingLoader } from './pages/pendingTransactions/Pending'

// import 'react-icons/ai';


// library imports


const router = createBrowserRouter([
  {
    path: "/",
    element : <Login />,
    loader : loginLoader,
    errorElement : <Error />
  }, 
  {
    path : "/home",
    element : <Home />,
    loader : homeLoader,
    errorElement : <Error />
  },
  {
    path : "/pending",
    element : <Pending />,
    loader : pendingLoader
  },
  {
    path : "*",
    element : <PageNotFound />
  }
])

function App() {

  const [first, setFirst] = useState(false)
  
  
  
  return (
    <div className='app'>
      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer></ToastContainer>
      <IconBase></IconBase>
        
    </div>
  )
}

export default App
