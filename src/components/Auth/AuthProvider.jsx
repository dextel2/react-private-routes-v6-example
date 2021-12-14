import React from "react";
import { fakeAuthProvider } from "../../auth/auth";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = React.useState(localStorage.getItem("token"));

  const signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      localStorage.setItem("token", newUser);
      setUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("slug");
      localStorage.removeItem("email");
      setUser(null);
      callback();
    });
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
