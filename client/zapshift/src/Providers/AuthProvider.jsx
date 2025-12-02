import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auLoading, setauLoading] = useState(true);

  //Register User
  const createUser = (email, password) => {
    setauLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //SignIn User
  const signInUser = (email, password) => {
    setauLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Google Sign in
  const signInGoogle = () => {
    setauLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //user log/sign out
  const logOut = () => {
    setauLoading(true);
    return signOut(auth);
  };
  //update user data
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }

  //Observe user state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setauLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    auLoading,
    createUser,
    signInUser,
    signInGoogle,
    logOut,
    updateProfile
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
