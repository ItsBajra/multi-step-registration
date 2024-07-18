import React from 'react';
import NavbarComponent from './components/NavbarComponent';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavbarComponent />
      <div className="container mx-auto py-8">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default App;
