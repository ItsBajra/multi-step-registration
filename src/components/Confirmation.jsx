import React from 'react';

const Confirmation = ({ formData, prevStep, handleSubmit }) => {
  const handleBack = () => {
    prevStep();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Confirm Your Details</h2>
      <div>
        <strong>First Name:</strong> {formData.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastName}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Phone Number:</strong> {formData.phone}
      </div>
      <div>
        <strong>Address:</strong> {formData.address}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>Event:</strong> {formData.event}
      </div>
      <div>
        <strong>Additional Comments:</strong> {formData.comments}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
