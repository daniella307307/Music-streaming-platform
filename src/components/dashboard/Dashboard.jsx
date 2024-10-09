import React from 'react';
import Sidebar from './Sidebar';
import './style.css';

function Dashboard() {
  return (
    <div className='flex bg-gradient-to-br from-blue-900 to-black min-h-screen overflow-hidden'>
      <div className='w-[23%] p-3 h-full bg-blue-900 shadow-lg rounded-lg'>
        <Sidebar />
      </div>
    </div>
  );
}

export default Dashboard;
