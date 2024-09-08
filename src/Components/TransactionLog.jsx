import React from 'react';
import { FaListUl, FaBoxOpen } from "react-icons/fa";

const TransactionLog = () => {
  return (
    <div className="text-white p-4 md:p-8">
      <div className="bg-gray-800 rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <h2 className="text-xl font-bold">Transaction Log</h2>
            </div>
            {/* <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md transition-colors duration-300">
              Clear
            </button> */}
          </div>
        </div>

        {/* Table */}
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Wallet Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="text-center py-12">
                  <div className="flex flex-col items-center">
                    <FaBoxOpen className="text-yellow-400 text-5xl mb-4" />
                    <span className="text-gray-400 text-lg">No Data Available</span>
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
