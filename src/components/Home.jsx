import React, { useEffect, useState } from 'react'
import { cookies } from '../pages/Login'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Upload from './Upload/Upload'

// styles 



export const homeLoader = () => {
    return "Home loading"
}


const Home = () => {

  const [demoData, setDemoData] = useState([])

  function deleteToken(){
    cookies.remove("auth-token")
}

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
      <button  className="delete" onClick={deleteToken}>
          <a className="fab fa-google-plus-g">
            Delete Token(Demo)
          </a>
        </button>
        Home Content goes here ...
      <Footer />
      </div>
    </>
    
  )
}

export default Home