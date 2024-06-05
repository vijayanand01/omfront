// src/components/VehicleDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VehicleDetails.css';

const VehicleDetails = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND}/api/v1/vehicles/getall`);
        setVehicles(response.data.vehicle);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="vehicle-list">
      {vehicles?.map((vehicle) => (
        <div key={vehicle?.regNo} className="vehicle-item">
          <img src="assets/images/product-2-370x270.jpg" alt={vehicle?.title} />
          <div className="vehicle-content">
            <h4>{vehicle?.title}</h4>
            <h6><small><del>$11199.00</del></small> $11179.00</h6>
            <p>{vehicle?.mileage} km / Petrol / {vehicle?.year} / Used vehicle</p>
            <div className="vehicle-details">
              <span><i className="fa fa-dashboard"></i> {vehicle?.mileage} km</span>
              <span><i className="fa fa-cube"></i> 1800cc</span>
              <span><i className="fa fa-cog"></i> Manual</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleDetails;
