// React-router-dom;
import { Outlet } from "react-router-dom";

// React;
import { Fragment } from "react";

// Components;
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}
