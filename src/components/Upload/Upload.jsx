import React from "react";

// styles
import "./Upload.css";


// libraries 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Upload() {

  
  function handleFileSubmission(event) {
    return document.getElementById("fileID").click();
  }

  function handleSelectedFile(event){
    toast.success(`${event.target.files[0].name} is selected`)
  }



  return (
    <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          <header>
            <h4>Select File here</h4>
          </header>
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
          <input
            type="file"
            accept=".doc,.docx,.pdf"
            id="fileID"
            style={{ display: "none" }}
            onChange={(event) => handleSelectedFile(event)}
          />
          <button className="btn" onClick={handleFileSubmission}>
            Choose File
          </button>
        </div>
      </div>
    </div>

    // <div className="upload-container">
    //         <div className="button-wrapper">
    //         <span className="label"> ➕</span>
    //         <input
    //         type="file"
    //         name="upload"
    //         id="upload"
    //         className="upload-box"
    //         placeholder="Upload File"
    //         />
    //     </div>
    // </div>
  );
}
