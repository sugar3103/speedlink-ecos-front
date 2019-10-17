import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="container">
      <div className="container-text">
        <h1>ERROR 404</h1>
        <img src={window.location.origin + "/img/404/404.png"} alt="Page 404" />
        <ul className="breadcrumb-menu">
          <li>
            <Link to="/">Page not found</Link>
          </li>
          <li>
            <Link to="/dashboard">Go back go DashBoard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page404;
