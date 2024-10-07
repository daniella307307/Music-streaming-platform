import { faEnvelope, faLock, faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './style.css';
import axios from 'axios';


function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8080/signup', formData);
      if (response.status === 200) {
        alert('User created successfully');
        window.location.href = '/'; 
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert('Error: ' + (error.response.data.message || 'An error occurred'));
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900" id='bg'>
      <div className="relative flex items-center justify-center w-screen h-screen">
        <div id='sign'>
          <div className="mb-4">
            <h2 className="text-gray-300 text-2xl font-bold cursor-pointer inline"><a href='/'>Sign In</a></h2>
            <h2 className="text-white text-2xl font-bold float-right">Sign Up</h2>
          </div>

          <form className="space-y-10 mt-[3em]" onSubmit={handleSubmit}>
            <div className='bg-transparent flex items-center space-x-4'>
              <FontAwesomeIcon icon={faUser} className='text-2xl text-white' />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
                required
                autoComplete='on'
                onChange={handleChange}
              />
            </div>
            <div className='bg-transparent flex items-center space-x-4'>
              <FontAwesomeIcon icon={faEnvelope} className='text-2xl text-white' />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
                required
                autoComplete='on'
                onChange={handleChange}
              />
            </div>
            <div className='bg-transparent flex items-center space-x-4'>
              <FontAwesomeIcon icon={faLockOpen} className='text-2xl text-white' />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
                required
                autoComplete='on'
                onChange={handleChange}
              />
            </div>
            <div className='bg-transparent flex items-center space-x-4'>
              <FontAwesomeIcon icon={faLock} className='text-2xl text-white' />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
                required
                autoComplete='on'
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                id='btn'
                className="w-[40%] p-4 rounded-full bg-blue-600 text-white hover:bg-transparent border-blue-600 border-[2px] transition duration-200 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
