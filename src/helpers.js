import { toast } from "react-toastify";
import Login, { cookies } from "./pages/Login";

// copy/paste stuff

// { style: { whiteSpace: 'nowrap' } }

export const deleteToken = () => {
  const myToken = cookies.get("auth-token");

  if (myToken) {
    cookies.remove("auth-token");
    toast.warning("Logged Out", { style: { whiteSpace: "nowrap" } });
    // window.location.reload()
  }

  return null;
};

// upload file helpers

export function triggerFileSelection(event) {
  return document.getElementById("fileID").click();
}

export const servicesList = [
  { servIconClass: "fa fa-briefcase service-icon", servHeader: "Decentralized", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
  { servIconClass: "fa fa-briefcase service-icon", servHeader: "Immutable", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
  { servIconClass: "fa fa-briefcase service-icon", servHeader: "Scalable", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
  // { servIconClass: "fa fa-briefcase service-icon", servHeader: "Header", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
  // { servIconClass: "fa fa-briefcase service-icon", servHeader: "Header", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
  // { servIconClass: "fa fa-briefcase service-icon", servHeader: "Header", servText: "Laudem latine persequeris idsed, ex fabulas delectus quo. No veartiendo abhorreant vituperatoribus." }, 
];

// upload fiel to firebse store

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


