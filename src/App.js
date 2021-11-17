import { Switch, Route } from "react-router-dom";
import AllIdeasPage from "./components/pages/AllIdeas";
import NewIdea from "./components/pages/NewIdea";
import LoginPage from "./components/pages/Login";
import Layout from "./components/layout/Layout";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        {!isLoggedIn && (
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/home">
            <AllIdeasPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/new-idea">
            <NewIdea />
          </Route>
        )}
      </Switch>
    </Layout>
  );
}

export default App;
