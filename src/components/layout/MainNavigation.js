import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const history = useHistory();
  function logoutHandler() {
    authCtx.logout();
    history.replace("/login");
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Hack Ideas</div>
      <ul>
        {isLoggedIn && (
          <li>
            <Link to="/home">All Ideas</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/new-idea">Add New Idea</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a className={classes.badge} onClick={logoutHandler} >Logout</a>
          </li>
        )}
      </ul>
    </header>
  );
}

export default MainNavigation;
