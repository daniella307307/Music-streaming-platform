import React from 'react';
import Sidebar from './Sidebar';
import './style.css';
import Popular from './Popular';

function Dashboard() {
  return (
    <div className='flex bg-gradient-to-br from-blue-900 to-black min-h-screen overflow-hidden'>
      <div className='w-[23%] p-3 h-full sticky top-0 bg-blue-900 shadow-lg rounded-lg '>
        <Sidebar />
      </div>
      <div className='ml-4 p-6'>
        <Popular/>
      </div>
    </div>
  );
}

export default Dashboard;
