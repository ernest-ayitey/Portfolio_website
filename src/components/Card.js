import React from "react";

export const Card = ({ className, children }) => (
  <div
    className={`bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ className, children }) => (
  <div
    className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
);

export const CardContent = ({ className, children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);
