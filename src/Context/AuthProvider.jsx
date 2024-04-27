import PropTypes from "prop-types";
import { createContext, useEffect } from "react";
import auth from "../Firebse/firebase.config";
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  // registering user with email and pass
  function registerWithEmailPass(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  //   observe the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
    });
    return unsubscribe();
  }, []);
  const authInfo = {
    user: {},
    registerWithEmailPass,
  };
  console.log(auth);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
