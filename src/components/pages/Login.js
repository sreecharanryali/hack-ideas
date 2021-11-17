import Card from "../ui/Card";
import { useContext, useRef } from "react";
import classes from "../ideas/NewIdeaFrom.module.css";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";

function LoginPage() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  function loginHandler(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAuD7FaTT95EIf0PDlM0guYxx98S-rbYrg",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          if (data && data.email && data.idToken) {
            authCtx.login(data.idToken,data.email);
            history.replace('/home')
          }
        });
      } else {
        return res.json().then((data) => {
          let errorMsg = "Authentication Failed..!!";
          if (data && data.error && data.error.message) {
            errorMsg = data.error.message;
          }
          alert(errorMsg);
        });
      }
    });
  }
  return (
    <Card>
      <div className={classes.formContainer}>
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name=""
              id="password"
              required
              ref={passwordRef}
            />
          </div>
          <div className={`${classes.actions} ${classes.loginActions}`}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </Card>
  );
}
export default LoginPage;
