import { FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="  text-white p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left section */}
        <div className="space-y-6">
          {/* Account Overview */}
          <div className='bg-gradient-to-r from-red-900 to-black rounded-md shadow-lg p-1'>
          <div className="bg-gray-800 p-4 rounded-md ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Account Info</h2>
              <button className="text-yellow-400 text-xs opacity-1">Real-time Refresh</button>
            </div>
            <div className="mt-4 space-y-2">
             
              <div>Wallet Address: -</div>
              <div>Account Balance: -</div>
           
            </div>
          </div>

          </div>
        

          {/* Exchange Settings */}
          <div className='bg-gradient-to-r from-red-900 to-black rounded-md shadow-lg p-1'>

       
          <div className="bg-gray-800 p-4 rounded-md shadow-lg">
            <h2 className="text-lg font-semibold">Exchange Settings</h2>
            <div className="flex justify-between items-center mt-4 gap-8 ">
              <div className="flex  flex-col w-full sm:w-1/2 ">
                <label htmlFor="" className=' py-1 text-sm font-semibold text-yellow-400'>
                  Enter Your Token Address :
                </label>
               <input type="text" className=' text-black px-2 rounded-md border-red-600 border py-1 ' placeholder='Address' />
              </div> 
              <div className=' w-[1px] h-[37px] bg-white opacity-10 mt-6'>
                
              </div>
              <div className="flex flex-col w-full sm:w-1/2">
              <label htmlFor="" className='py-1 text-sm font-semibold text-yellow-400'>
                  Enter number of bumps :
                </label>
               <input type="number" className=' text-black px-2 rounded-md border-red-600 border py-1 ' />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex flex-col items-center justify-between">
                <p className=' py-2 text-sm font-bold'>Click to fund Your Wallet</p>
                <button className='bg-red-600 text-white px-8 py-1 rounded-md'>Fund</button>

                <div className=" pt-2">
                  <p className=" flex items-center gap-2 text-xs text-yellow-400"><FaInfoCircle /> 1BUMP = 1transaction + 1maker + 1permanent holder, costs 2TRX each</p>
                </div>
              </div>
             
            </div>
          </div>

          </div>
        </div>

        {/* Right section */}
        <div className='bg-gradient-to-r from-red-900 to-black rounded-md shadow-lg p-1'>
        <div className="bg-gray-800 p-4 rounded-md shadow-lg h-full">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">TXNS Box</h2>
            {/* <button className="bg-red-600 text-white px-4 py-1 rounded-md">Import Wallet</button> */}
          </div>

          <div className="mt-6">
            {/* Wallet Table */}
            <table className="w-full">
              <thead>
                <tr>
                 
                  <th className="px-4 py-2 text-left">No of TXNS</th>
                  <th className="px-4 py-2 text-left">Volume</th>
                  <th className="px-4 py-2 text-left">Holders</th>
                  <th className="px-4 py-2 text-left">Makers</th>
                </tr>
              </thead>
              <tbody className=' border-t border-b border-[#aaaaaaaf]'>
                <tr>
                  <td  className="px-4 py-2 text-left font-bold">
                  123K
                  </td>
                  <td  className="px-4 py-2 text-left">
                  $1234
                  </td>
                  <td  className="px-4 py-2 text-left">
                  2345
                  </td>
                  <td className="px-4 py-2 text-left">
                    134
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
