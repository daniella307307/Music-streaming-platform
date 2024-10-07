import { faLockOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './styles.css'
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ identifier: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await axios.post('http://localhost:8080/login', formData);
      if (response.status === 200) {
        alert('Logged in successfully');
        // Redirect to the dashboard or perform another action
      } else {
        alert(response.message);
      }
    } catch (error) {
      if (error.response) {
        // Access error message if available
        alert('Error: ' + (error.response.data.message || 'Invalid credentials'));
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="h-screen w-screen flex items-center bg-gray-900 justify-center " id='bg'>
      <div className="w-[35%] rounded-lg shadow-lg" id="sign">
        <div className="flex justify-between mb-4">
          <h2 className="text-white text-2xl font-bold">Sign In</h2>
          <h2 className="text-gray-400 text-2xl font-bold cursor-pointer"><a href='/signup'>Sign Up</a></h2>
        </div>

        <form className="space-y-10 mt-[3em]" onSubmit={handleSubmit}>
          <div className='bg-transparent flex items-center space-x-4'>
            <FontAwesomeIcon icon={faUser} className='text-2xl text-white' />
            <input
              type="text"
              name="identifier" // Add name attribute
              value={formData.identifier}
              placeholder="Email or Username"
              className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
              required
              onChange={handleChange}
            />
          </div>
          <div className='bg-transparent flex items-center space-x-4'>
            <FontAwesomeIcon icon={faLockOpen} className='text-2xl text-white' />
            <input
              type="password"
              name="password" // Add name attribute
              placeholder="Enter your password"
              value={formData.password}
              className="w-full p-2 border-white border-b-[2px] bg-transparent text-gray-200 focus:outline-none focus:bg-transparent"
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="mr-2 text-white" />
            <label className="text-md text-gray-400 font-semibold">Keep me signed in</label>
          </div>
          <div className="flex justify-center">
            <button 
              id='btn'
              type="submit" // Specify the type
              className="w-[40%] p-4 rounded-full bg-blue-600 text-white hover:bg-transparent border-blue-600 border-[2px] transition duration-200 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </form>
        <div>
          <p className="text-gray-400 text-center font-semibold mt-[2em]">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
