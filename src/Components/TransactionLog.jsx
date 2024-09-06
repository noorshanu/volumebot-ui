import React from 'react';
import { FaListUl } from "react-icons/fa";
const TransactionLog = () => {
  return (
    <div className=" text-white p-4 md:p-8">
      {/* Header */}
      <div className="bg-gray-800 p-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <FaListUl /> {/* Icon for transaction log */}
            <h2 className="text-lg font-semibold">Transaction Log</h2>
          
          </div>
          <div className="flex space-x-2">
            {/* <div className="flex items-center space-x-1 bg-green-600 px-2 py-1 rounded">
              <span>0</span>
            </div>
            <div className="flex items-center space-x-1 bg-red-600 px-2 py-1 rounded">
              <span>0</span>
            </div>
            <div className="flex items-center space-x-1 bg-yellow-500 px-2 py-1 rounded">
              <span>0</span>
            </div> */}
            <button className="bg-yellow-700 px-4 py-1 rounded">Clear</button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className='bg-gradient-to-r from-red-900 to-black rounded-md shadow-lg p-1 mt-6'>
        
      
      <div className="bg-gray-800 p-4  rounded-md shadow-lg h-full">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="3" className="text-center py-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2">
                    <i className="fas fa-box-open text-green-400 text-4xl"></i>
                  </div>
                  <span>No Data</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default TransactionLog;
