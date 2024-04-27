import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebse/firebase.config";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // signing in user
  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  // registering user with email and pass
  function registerWithEmailPass(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  // updating user profile
  function updateUserProfile(name) {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  }
  // observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  console.log(user);
  const authInfo = {
    user,
    signInUser,
    registerWithEmailPass,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
