// Navbar.tsx

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-300 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
          alt="Logo"
          className="h-8 mr-2"
        />
        <h1 className="text-white font-bold text-xl">Dummy Bank</h1>
      </div>
      <div>{/* Add any additional navbar items here */}</div>
    </nav>
  );
};

export default Navbar;
