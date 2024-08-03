import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Button ({text, padding}) {
    return (
        <div className={`btn text-black bg-white ${padding} rounded-5 fw-medium btn-inc`}>
            {text}
        </div>
    )
}

export default Button;