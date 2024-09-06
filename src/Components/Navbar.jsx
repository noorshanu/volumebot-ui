import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white px-4 sm:px-24 py-2 flex justify-between items-center w-full ">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
     
       
        {/* Logo */}
        <div className="flex items-center">
       
          <span className="ml-2 font-semibold text-white">TRON VolumeBot</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
      
        <button className="bg-red-600 text-white px-4 py-1 rounded-md">
          Connect Wallet
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
