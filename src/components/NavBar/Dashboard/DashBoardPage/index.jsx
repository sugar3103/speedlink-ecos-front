import React from "react";
import "./index.scss";

function DashBoardPage(props) {
  return (
    <div className="container pt-100 pb-100">
      <div className="row">
        <div className="col-xl-12">
          <div className="breadcrumb-text text-center">
            <h1>This is Home Page</h1>
            <ul className="breadcrumb-menu">
              <li>
                <a href="/">Go back to main page</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
