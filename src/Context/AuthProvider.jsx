import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebse/firebase.config";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // social media providers
  const googleProvider = new GoogleAuthProvider();
  // signing in user
  function signInUser(email, password) {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // registering user with email and pass
  function registerWithEmailPass(email, pass) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  // updating user profile
  function updateUserProfile(name) {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  }

  // signing with google
  function registerUserWithGoogle() {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);
  const authInfo = {
    user,
    isLoading,
    signInUser,
    registerWithEmailPass,
    updateUserProfile,
    registerUserWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
