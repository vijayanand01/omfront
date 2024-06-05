// src/components/VehicleList.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const VehicleList = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <div className="row">
      {vehicles.map((vehicle) => (
        <div key={vehicle?._id} className="col-lg-4 col-md-6">
          <div className="product-item">
            <a href="car-details.html">
              <img
                src="assets/images/product-2-370x270.jpg"
                alt={vehicle.title}
              />
            </a>
            <div className="down-content">
              <a href="car-details.html">
                <h4>{vehicle.title}</h4>
              </a>
              <h6>
              {vehicle.make}
              </h6>
              <p>{`${vehicle.owner} / ${vehicle.model} / ${vehicle.fuel} / ${vehicle.year} / ${vehicle.color}`}</p>
              {/* <small>
                <strong title="fuel">
                  <i className="fa fa-dashboard"></i> {vehicle.fuel}km
                </strong>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <strong title="Engine">
                  <i className="fa fa-cube"></i> {vehicle.engineNo}
                </strong>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <strong title="Transmission">
                  <i className="fa fa-cog"></i> Manual
                </strong>
              </small> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
