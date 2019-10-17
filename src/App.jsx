import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./components/Loading";
// @ts-ignore
const MainRouter = React.lazy(() => import("./components/MainRouter/Router"));
const Page404 = React.lazy(() => import("./components/Page404"));
const LoginPage = React.lazy(() => import("./components/Login"));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <MainRouter />
          <Route path="*" component={Page404} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
