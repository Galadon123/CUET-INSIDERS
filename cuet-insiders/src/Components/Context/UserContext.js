import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { Children, createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
import { useSelect } from "@material-tailwind/react";
export const AuthContext = createContext();

const auth = getAuth(app);
function UserContext({ children }) {
  const [user, setUser] = useState({});
  const [customUserId,setCustomUser]=useState({});
  const authprovider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const googleLogIn = () => {
    return signInWithPopup(auth, authprovider);
  };
  const emialverify = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUser = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const CustomUserIdSet =(id)=>{
    setCustomUser(id);
  }
  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unscribe();
    };
  }, []);
  const authInfo = {
    customUserId,
    user,
    createUser,
    logUser,
    logOut,
    googleLogIn,
    emialverify,
    forgetPassword,
    updateUser,
    CustomUserIdSet
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default UserContext;
