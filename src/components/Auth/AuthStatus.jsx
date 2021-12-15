import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

/**
 *
 * @returns Component with status, either you are logged in or not
 */
export function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome user!
      <button
        onClick={() => {
          auth.signout(() => navigate("/"));
        }}
      >
        Sign out
      </button>
    </p>
  );
}
