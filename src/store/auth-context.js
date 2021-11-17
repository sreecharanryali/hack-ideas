import { createContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  currentUser: '',
  isLoggedIn: false,
  login: (token,storedCurrentUser) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialUserName = localStorage.getItem("currentUser");

  const [token, setToken] = useState(initialToken);
  const [currentUser, setCurrentUser] = useState(initialUserName);

  const userIsLoggedIn = !!token;

  const loginHandler = (token,storedCurrentUser) => {
    setToken(token);
    localStorage.token = token;
    localStorage.currentUser = storedCurrentUser;
  };
  const logoutHandler = () => {
    setToken(null);
    setCurrentUser(null)
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
  };
  const contextValue = {
    token: token,
    currentUser: currentUser,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
