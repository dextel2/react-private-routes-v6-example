import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/Auth/AuthProvider";
import { LoginPage } from "./components/Auth/LoginPage";
import { ProtectedPage } from "./components/Auth/ProtectedPage";
import { RequireAuth } from "./components/Auth/RequireAuth";
import { Layout } from "./components/Layout/Layout";
import { PublicPage } from "./components/PublicPage";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history } from "./helpers/store";

export default function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}
