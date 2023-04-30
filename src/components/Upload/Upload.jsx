import React, { useEffect, useState } from "react";

// styles
import "./Upload.css";

// libraries
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// firebase
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  listAll,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database, storage } from "../../firebase/firebase-config"; // import the Firebase storage instance

// helpers
import { triggerFileSelection } from "../../helpers";
import { json } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [doc, setDoc] = useState(null);

  function handleSelectedFile(event) {
    let file = event.target.files[0];
    setFile(file);
  }

  function removeFile(){
    setFile(null)
  }

  // async function listFiles() {
  //   // Create a reference to the "files" folder
  //   const listRef = ref(storage, "files");
  //   const filesArray = [];

  //   listAll(listRef)
  //     .then((res) => {
  //       res.items.forEach((itemRef) => {
  //         // Get the download URL for the file
  //         getDownloadURL(itemRef)
  //           .then((url) => {
  //             let myFile = {
  //               name: itemRef.name,
  //               url: url,
  //             };
  //             filesArray.push(myFile);
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //       });
  //     })
  //     .catch((error) => {
  //       // Uh-oh, an error occurred!
  //       console.error(error);
  //     });
  // }

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
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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

        const doc = {
          name: file.name,
          url: downloadURL,
          user_name: JSON.parse(localStorage.getItem("user-name")),
        };
        setDoc(doc);
        toast.success(`${file.name} is uploaded successfully!`);
        setFile(null);
        setProgress(0);
      }
    );
  }

  useEffect(() => {
    if (doc) {
      fetch("http://localhost:8800/upload-file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doc),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setDoc(null);
    }

  }, [doc]);

  return (
    <div className="container">
      <div className="card">
        <h3>Upload Files</h3>
        {/* <button className="btn" onClick={listFiles}>
          List files
        </button> */}
        <div className="drop_box">
          <input
            type="file"
            accept=".doc,.docx,.pdf"
            id="fileID"
            style={{ display: "none" }}
            onChange={(event) => handleSelectedFile(event)}
          />
          {!file ? (
            <button className="my-btn" onClick={triggerFileSelection}>
              Choose File
            </button>
          ) : (
            <div className="confirm-upload">
              <p>{` ${file.name.substring(0, 10)}... is selected ✅`}</p>
              <progress value={progress} max="100" color="green" />
              <div className="upload-options">
              <button className="my-btn" onClick={handleFile}>
                Upload
              </button>
              <button className="my-btn cancel" onClick={removeFile}>
                Cancel
              </button>
              </div>
            </div>
          )}
          <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
        </div>
      </div>
    </div>
  );
}
