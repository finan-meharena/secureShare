import React from 'react'
import { Link, useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

  const err = useRouteError()
  const navigate = useNavigate()
  return (
    <div>
      {err.message || err.status  && <p> Something went wrong </p>}
      <button style={{color : "red"}} onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Error