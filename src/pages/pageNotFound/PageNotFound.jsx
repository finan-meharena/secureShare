import React from "react";
import { Link, useNavigate } from "react-router-dom";


// style 
import "./PageNotFound.css"

const PageNotFound = () => {

  const navigate = useNavigate()
  return (
    <div className="page-not-found">
      <div class="section">
        <h1 class="error">404</h1>
        <div class="page">
          😔 The page you are looking for is not found
        </div>
        <button onClick={() => navigate(-1)} class="back-home" href="#!">
          🔙 
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
