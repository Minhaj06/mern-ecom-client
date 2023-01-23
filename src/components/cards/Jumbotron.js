import React from "react";

const Jumbotron = ({ title, subtitle = "My React Ecommerce" }) => {
  return (
    <div className="container-fluid jumbotron bg-info">
      <div className="row">
        <div className="col">
          <h1 className="fw-bold">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
