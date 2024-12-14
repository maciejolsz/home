import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome
        </h1>
        <p className="text-gray-600 max-w-md mx-auto">
          A clean and minimalistic starting point for your project.
        </p>
      </div>
    </div>
  );
};

export default HomePage; 