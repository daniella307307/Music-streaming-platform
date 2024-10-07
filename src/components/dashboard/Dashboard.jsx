import React from 'react';
import Sidebar from './Sidebar';
import './style.css';

function Dashboard() {
  return (
    <div className='flex bg-gradient-to-br from-blue-900 to-black min-h-screen overflow-hidden'>
      <div className='w-[30%] h-full p-4 bg-gray-800 shadow-lg rounded-lg'>
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
