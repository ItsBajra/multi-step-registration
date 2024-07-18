import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import EventDetails from './EventDetails';
import Confirmation from './Confirmation';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    event: '',
    comments: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  switch (step) {
    case 1:
      return <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />;
    case 2:
      return <StepTwo formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <StepThree formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <EventDetails formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
    case 5:
      return <Confirmation formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />;
    default:
      return <StepOne formData={formData} setFormData={setFormData} nextStep={nextStep} />;
  }
};

export default RegistrationForm;
