import React from 'react'
import Dashboard from './Components/Dashboard'
import TransactionLog from './Components/TransactionLog';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   
   <div>
    <Navbar/>
   </div>
   <div className=' max-w-full sm:max-w-7xl mx-auto '>
   <Dashboard/>

<div>
 <TransactionLog/>
</div>
    
   </div>
 

   </>
  )
}

export default App