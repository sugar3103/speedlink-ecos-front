import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Loading from "./components/Loading";
// @ts-ignore
import MainRouter from "./components/MainRouter/Router";
import Page404 from "./components/Page404";
import LoginPage from "./components/Login";

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <MainRouter />
          <Route path="*" component={Page404}/>
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
