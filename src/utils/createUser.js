import { db } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function createUser(data) {
  const q = query(collection(db, "users"), where("email", "==", data.email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.size > 0) return "User exists";
  let newUser = {
    name: data.displayName,
    email: data.email,
    photo: data.photoURL,
    pan: "",
    aadhar: "",
    dob: "",
    address: "",
  };
  await addDoc(collection(db, "users"), newUser);
  return "User added";
}
