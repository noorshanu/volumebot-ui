import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaSync } from "react-icons/fa";

const Dashboard = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenInfo, setTokenInfo] = useState(null);
  const [numBumps, setNumBumps] = useState();
  const [botStarted, setBotStarted] = useState(false);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [bumpsDone, setBumpsDone] = useState(0);
  const [transactionsMade, setTransactionsMade] = useState(0);
  const [makersMade, setMakersMade] = useState(0);
  const [holdersAdded, setHoldersAdded] = useState(0);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      if (tokenAddress) {
        try {
          // Replace this with actual API call to fetch token info from TRON network
          const response = await fetch(`https://api.tron.network/v1/tokens/${tokenAddress}`);
          const data = await response.json();
          setTokenInfo(data);
        } catch (error) {
          console.error("Error fetching token info:", error);
        }
      }
    };

    fetchTokenInfo();
  }, [tokenAddress]);

  useEffect(() => {
    if (botStarted) {
      const interval = setInterval(() => {
        setBumpsDone((prev) => {
          const newBumpsDone = Math.min(prev + 1, numBumps);
          setCompletionPercentage((newBumpsDone / numBumps) * 100);
          setTransactionsMade(newBumpsDone);
          setMakersMade(newBumpsDone);
          setHoldersAdded(newBumpsDone);
          return newBumpsDone;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [botStarted, numBumps]);

  const handleStartBot = () => {
    setBotStarted(true);
    setBumpsDone(0);
    setCompletionPercentage(0);
    setTransactionsMade(0);
    setMakersMade(0);
    setHoldersAdded(0);
  };

  return (
    <div className="text-white p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left section */}
        <div className="space-y-8">
          {/* Account Overview */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Account Info</h2>
              <button className="text-yellow-400 hover:text-yellow-300 transition-colors">
                <FaSync className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2 text-gray-300">
              <div>Wallet Address: -</div>
              <div>Account Balance: -</div>
            </div>
          </div>

          {/* Exchange Settings */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Exchange Settings</h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="tokenAddress" className="block text-sm font-medium text-yellow-400 mb-1">
                  Enter Your Token Address
                </label>
                <input
                  type="text"
                  id="tokenAddress"
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  placeholder="Address"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="numBumps" className="block text-sm font-medium text-yellow-400 mb-1">
                  Enter number of bumps
                </label>
                <input
                  type="number"
                  id="numBumps"
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md border border-gray-600 focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50"
                  value={numBumps}
                  onChange={(e) => setNumBumps(Number(e.target.value))}
                />
              </div>
              <div className="flex flex-col items-center">
                <button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-md transition-colors"
                  onClick={handleStartBot}
                >
                  {botStarted ? "Bot Running" : numBumps ? `Fund Wallet ${numBumps * 2} TRX` : "Fund Wallet"}
                </button>
                <p className="flex items-center gap-2 text-xs text-yellow-400 mt-2">
                  <FaInfoCircle />
                  1BUMP = 1transaction + 1maker + 1permanent holder, costs 2TRX each
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Bot Progress</h2>
          {!botStarted ? (
            <div className="text-center text-gray-500">
              Start the bot to see results
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar 
                    value={completionPercentage} 
                    text={`${completionPercentage.toFixed(0)}%`}
                    styles={buildStyles({
                      textColor: '#ffffff',
                      pathColor: '#ef4444',
                      trailColor: '#374151',
                    })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-gray-400">Bumps Done</p>
                  <p className="text-xl font-bold">{bumpsDone}/{numBumps}</p>
                </div>
                <div>
                  <p className="text-gray-400">Transactions Made</p>
                  <p className="text-xl font-bold">{transactionsMade}</p>
                </div>
                <div>
                  <p className="text-gray-400">Makers Made</p>
                  <p className="text-xl font-bold">{makersMade}</p>
                </div>
                <div>
                  <p className="text-gray-400">Holders Added</p>
                  <p className="text-xl font-bold">{holdersAdded}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;