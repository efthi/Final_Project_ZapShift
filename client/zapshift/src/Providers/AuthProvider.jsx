import React, { Children } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = "hello!";
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
