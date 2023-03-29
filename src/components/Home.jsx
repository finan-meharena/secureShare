import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { deleteToken } from '../helpers'
import Login, { cookies } from '../pages/Login'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Upload from './Upload/Upload'

// styles 

export const homeLoader = () => {
    return "Home loading"
}

const Home = () => {

  const [demoData, setDemoData] = useState([])
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))

  // if(!isAuth){
  //   return <Login />
  // }

  // useEffect(() =>{
  //   fetch('http://127.0.0.1:8000/demo')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //     setDemoData(data)
  //   })
  // }, [])

  return (
    <>
      <div className='home'>
      <Navbar />
      <Upload />
        Home Content goes here ...
      <Footer />
      </div>
    </>
    
  )
}

export default Home