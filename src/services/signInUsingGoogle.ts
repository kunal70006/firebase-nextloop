import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "@/firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function googleSignIn() {
  try {
    const res = await signInWithPopup(auth, provider);
    const userEmail = res.user.email;
    return userEmail;
  } catch (err) {
    console.error(err);
  }
}

export async function logOut() {
  await signOut(auth);
}
