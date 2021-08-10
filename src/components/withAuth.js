import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (Component) => {
  return (props) => {
    const { user, setUser } = useContext(AuthContext);
    return <Component user={user} setUser={setUser} {...props} />;
  };
};
