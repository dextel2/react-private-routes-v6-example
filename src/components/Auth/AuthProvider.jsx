import React, { createContext } from "react";
import { fakeAuthProvider } from "../../auth/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    const signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    const signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    return React.useContext(AuthContext);
}
