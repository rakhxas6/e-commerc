import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-semibold mt-4 text-gray-600">
          Oops! Page not found.
        </p>
        <p className="mt-2 text-gray-500">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Error;
