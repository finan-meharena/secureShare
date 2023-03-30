import React, { useState } from "react";


// styles
import "./Upload.css";

// libraries 
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Upload() {

  const [file, setFile] = useState({
    name : null, 
  })
  
  function triggerFileSelection(event) {
    return document.getElementById("fileID").click();
  }

  function handleSelectedFile(event){
    let file = event.target.files[0]
    console.log(file)
    setFile(prevFile => {
      return {...prevFile, name : file.name}
    })
    // toast.success(`${event.target.files[0].name} is selected`, { style: { whiteSpace: 'nowrap' } })
  }

  function handleFile(){
    toast.success(`${file.name} is sent for mining!`)
    setFile(prevFile => ({...prevFile, name : null}))
    // code to send fiel to some cloud storages goes here ... 
  }
  
  return (
    <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        <div className="drop_box">
          <input
            type="file"
            accept=".doc,.docx,.pdf"
            id="fileID"
            style={{ display: "none" }}
            onChange={(event) => handleSelectedFile(event)}
          />
          {!file.name ? (
                      <button className="btn" onClick={triggerFileSelection}>
                      Choose File
                    </button>
          ) : (
            <div className="confirm-upload">
              <p> {` ${file.name} is selected ✅`} </p>
              <button className="btn" onClick={handleFile}>Upload</button>
            </div>
          )}
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
        </div>
      </div>
    </div>

  );
}


{/* <form onSubmit={handleSubmit}>
<label>
  Select a file:
  <input type="file" onChange={handleFileUpload} />
</label>
<br />
<button type="submit" disabled={!file}>
  Upload
</button>
</form> */}



// import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/storage';

// const Form = () => {
//   const [file, setFile] = useState(null);

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Upload file to Firebase Storage
//     const storageRef = firebase.storage().ref();
//     const fileRef = storageRef.child(file.name);
//     await fileRef.put(file);

//     // Save file metadata to Firestore
//     const db = firebase.firestore();
//     const docRef = db.collection('files').doc(file.name);
//     await docRef.set({
//       name: file.name,
//       url: await fileRef.getDownloadURL(),
//       createdAt: new Date(),
//     });

//     alert('File uploaded successfully!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Select a file:
//         <input type="file" onChange={handleFileUpload} />
//       </label>
//       <br />
//       <button type="submit" disabled={!file}>
//         Upload
//       </button>
//     </form>
//   );
// };

// export default Form;

