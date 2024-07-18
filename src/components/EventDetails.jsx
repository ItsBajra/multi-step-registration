import React from 'react';

const EventDetails = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <form className="space-y-4" onSubmit={handleNext}>
      <div>
        <label className="block text-sm font-medium text-gray-700">Event</label>
        <select
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select an event</option>
          <option value="React Workshop">React Workshop</option>
          <option value="JavaScript Conference">JavaScript Conference</option>
          <option value="CSS Mastery">CSS Mastery</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
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
          type="submit"
          className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default EventDetails;
