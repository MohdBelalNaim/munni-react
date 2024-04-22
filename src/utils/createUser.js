import { db } from "../firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function createUser(data) {
  if (!data || !data.email) {
    return Promise.reject("Invalid data or missing email");
  }

  try {
    const q = query(collection(db, "users"), where("email", "==", data.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.size > 0) return "User exists";

    let newUser = {
      email: data.email,
      name: data.displayName || "", 
      photo: data.photoURL || "", 
      pan: "",
      aadhar: "",
      dob: "",
      address: "",
    };
    await addDoc(collection(db, "users"), newUser);
    return "User added";
  } catch (error) {
    return Promise.reject(error);
  }
}
