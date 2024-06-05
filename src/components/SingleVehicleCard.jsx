import React from "react";

const SingleVehicleCard = ({ vehicle, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md">
        <div className="px-6 py-4">
          <div className="mb-4">
            <img
              src="assets/images/product-2-370x270.jpg"
              alt={vehicle.title}
              className="w-full h-auto"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">{vehicle.title}</h2>
            <p className="text-sm text-gray-600">
              {vehicle.make} - {vehicle.model}
            </p>
          </div>
          <div className="mb-4">
            <p>{`${vehicle.mileage} hp / Petrol / ${vehicle.year} / Used vehicle`}</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVehicleCard;
