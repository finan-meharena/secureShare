import React, { useState } from "react";

// Firebase
import { database, storage } from "../../firebase/firebase-config"; // import the Firebase storage instance

// styles
import "./Upload.css";

// libraries
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  function triggerFileSelection(event) {
    return document.getElementById("fileID").click();
  }

  function handleSelectedFile(event) {
    let file = event.target.files[0];
    setFile(file);
  }

  async function handleFile() {
    // Create a reference to the file in Firebase Storage
    const storageRef = ref(storage, `files/${file.name}`);

    // Upload the file to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error(error);
        toast.error("An error occurred while uploading the file");
      },
      async () => {
        // Upload completed successfully, now we can get the download URL
        const downloadURL = await getDownloadURL(storageRef);

        // Save the download URL to Firestore
        const docRef = await addDoc(collection(database, "files"), {
          name: file.name,
          url: downloadURL,
          createdAt: serverTimestamp(),
        });

        toast.success(`${file.name} is uploaded successfully!`);

        setFile(null);
        setProgress(0);
      }
    );
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
          {!file ? (
            <button className="btn" onClick={triggerFileSelection}>
              Choose File
            </button>
          ) : (
            <div className="confirm-upload">
              <p>{` ${file.name} is selected ✅`}</p>
              <progress value={progress} max="100" color="green" />
              <button className="btn" onClick={handleFile}>
                Upload
              </button>
            </div>
          )}
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
        </div>
      </div>
    </div>
  );
}
