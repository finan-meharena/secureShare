import React, { useEffect, useState } from 'react'



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
      <div>Home</div>
      <div>
        {`${demoData.name} from ${demoData.address}`}
      </div>
    </>
    

  )
}

export default Home