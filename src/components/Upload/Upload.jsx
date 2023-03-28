import React, { useRef } from "react";

import { BeakerIcon } from "@heroicons/react/24/solid";

import "./Upload.css";

import {
  AiFillPlusCircle,
  AiFillRightCircle,
  AiOutlinePlus,
} from "react-icons/ai";

export default function Upload() {

  function handleFileSubmission(event) {
    return document.getElementById("fileID").click();
  }

  function handleSelectedFile(event){
    alert(`${event.target.files[0].name} is selected`)
  }


  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
  };

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
