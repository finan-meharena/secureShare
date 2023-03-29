import { IconBase } from 'react-icons'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Error from './components/Error'
import Home, { homeLoader } from './components/Home'
import Login, { loginLoader } from './pages/Login'

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
    path : "home/",
    element : <Home />,
    loader : homeLoader,
    errorElement : <Error />
  }
])

function App() {


  
  return (
    <div className='app'>
      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer></ToastContainer>
      <IconBase></IconBase>
        
    </div>
  )
}

export default App
