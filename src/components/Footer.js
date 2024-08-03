import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./Button";

function Footer() {
  return (
    <div className="row footer-bg d-flex align-items-center min-vw-100 m-0 p-0 fixed-bottom">
      <div className="col mx-2 text-start gap-1 my-2">
        <span className="fw-bold mt-1">Preview of Spotify</span>
        <br/>
        <span class="mb-1">
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </span>
      </div>
      <div className="col-2 text-end">
        <Button text="Sign up for free" padding="py-2 px-4" />
      </div>
    </div>
  );
}

export default Footer;
