import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar";
import Main from "./Main";
import Footer from "./Footer";

function SpotifyLandingPage() {
  return (
    <div
      className="container-fluid p-0 m-0 vh-100"
    >
      <div className="row mx-1 vw-100 fixed-bottom">
        <div className="col-3">
          <SideBar />
        </div>
        <div className="col-9">
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpotifyLandingPage;
