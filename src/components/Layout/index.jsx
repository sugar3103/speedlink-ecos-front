import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../NavBar";

function Layout(props) {
  return (
    <>
      <Header {...props} />
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
