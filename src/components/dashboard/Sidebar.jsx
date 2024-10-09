import { faGlobe, faMicrophone, faMusic, faRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Sidebar() {
  return (
    <div className='bg-gradient-to-br from-blue-900 to-black rounded-lg shadow-xl p-6 h-full'>
      <h1 className='font-bold text-4xl text-white'>HIWOW</h1>
      <span className='text-gray-300 text-lg'>S  t  u  d  i  o</span>
      <ul className='mt-8 space-y-4'>
        <li className='flex items-center hover:text-blue-400 cursor-pointer'>
          <FontAwesomeIcon icon={faMusic} className='text-xl mr-2 text-white' />
          <span className='text-white font-semibold'>Music</span>
        </li>
        <li className='flex items-center hover:text-blue-400 cursor-pointer'>
          <FontAwesomeIcon icon={faGlobe} className='text-xl mr-2 text-white' />
          <span className='text-white font-semibold'>Find</span>
        </li>
        <li className='flex items-center hover:text-blue-400 cursor-pointer'>
          <FontAwesomeIcon icon={faMicrophone} className='text-xl mr-2 text-white' />
          <span className='text-white font-semibold'>Singer</span>
        </li>
        <li className='flex items-center hover:text-blue-400 cursor-pointer'>
          <FontAwesomeIcon icon={faStar} className='text-xl mr-2 text-white' />
          <span className='text-white font-semibold'>Collection</span>
        </li>
      </ul>
      <h2 className='mt-[4em] font-bold text-xl text-white'>Song list</h2>
      <ul className='mt-4 space-y-4'>
        <li className='bg-blue-800 rounded-lg p-2 hover:bg-blue-900 transition duration-200'>
         
          <span className='text-white'>Favourite music</span>
        </li>
        <li className='bg-blue-800 rounded-lg p-2 hover:bg-blue-800 transition duration-200'>
          <span className='text-white'>Chill Vibes</span>
        </li>
        <li className='bg-blue-800 rounded-lg p-2 hover:bg-blue-900 transition duration-200'>
          <span className='text-white'>BGM music</span>
        </li>
      </ul>
      <ul className='mt-4 space-y-4'>
        <li  className='bg-blue-800 rounded-lg p-2 hover:bg-blue-900 transition duration-200'>
           <span  className='text-white'>Profile</span> 
        </li>
        <li className='bg-blue-800 rounded-lg p-2 hover:bg-blue-900 transition duration-200'>
          <span  className='text-white'>Settings</span> 
        </li>
      </ul>

      <div>
        <form>
          <button type='submit'>
            <FontAwesomeIcon icon= {faRightFromBracket}/>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
