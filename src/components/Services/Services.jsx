import React from "react";

// styles
import "./Services.css";
import 'bootstrap/dist/css/bootstrap.css';
import { servicesList } from "../../helpers";


const Services = () => {
  return (
    <div className="service-container">
        <section className="services section-bg" id="services">
  <div className="inner-container">
    <header className="section-header">
      <h3>Why SecureShare ?</h3>
      <p>
        SecureShare makes use of blockchain to securely store and share files.
      </p>
    </header>
    <div className="row">
        {servicesList.map((serv, index) => (
            <div key={index} className="col-md-6 col-lg-4">
            <div className="box">
              <div className="icon" style={{ background: "#000" }}>
                <i
                  className={serv.servIconClass}
                  style={{ color: "#c59c35" }}
                />
              </div>
              <h4 className="title">
                <a href=""> {serv.servHeader} </a>
              </h4>
              <p className="description">
                {serv.servText}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default Services;
