import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Upload from './Upload/Upload'



export const homeLoader = () => {
    return "Home loading"
}


const Home = () => {

  const [demoData, setDemoData] = useState([])

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/demo')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDemoData(data)
    })
  }, [])

  return (
    <>
       <div>
      <Navbar />
      <Upload />
        Home goes here..
      </div>
    </>
    
  )
}

export default Home