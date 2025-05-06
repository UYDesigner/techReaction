import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

export const User = () => {
  const { userid } = useParams();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
          No User Found: <span className="text-orange-600">{userid}</span>
        </h1>
        <p className="text-gray-500 mb-4">It looks like there is no user data to display.</p>
        <NavLink
          to="/"
          className="inline-block bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Go Back Home
        </NavLink>
      </div>
    </div>
  );
};
