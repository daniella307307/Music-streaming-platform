import {
  faCompass,
  faEllipsis,
  faLayerGroup,
  faMusic,
  faUser,
  
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPodcast } from "@fortawesome/free-solid-svg-icons/faPodcast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from './profile.jpg'
import React from "react";

function Sidebar() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-black rounded-lg border-white border-[1px] shadow-xl p-6 h-full">
      <h1 className="font-bold text-4xl text-white">HIWOW</h1>
      <span className="text-gray-300 text-lg">S t u d i o</span>
      <div className="mt-[2em] shadow-lg rounded-lg bg-blue-900 p-2 flex items-center">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-[1.2em] mr-4 text-white "
        />
        <input
          type="search"
          placeholder="Search"
          className="bg-transparent focus:outline-none focus:border-none"
        />
      </div>
      <div className="flex mt-[1em] items-center justify-between text-white">
        <span className="font-light">
          Music <span className="font-bold">5</span>
        </span>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div className="mt-[1em]">
        <ul className="space-y-6">
          <li className="flex  items-center hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faHome}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Home</span>
           
          </li>
          <li className="flex  items-center hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out ">
            <FontAwesomeIcon
              icon={faCompass}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Discover</span>
          </li>
          <li className="flex  items-center hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out ">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Discover</span>
          </li>
          <li className="flex  items-center hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out ">
            <FontAwesomeIcon
              icon={faPodcast}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Podcasts</span>
          </li>
        </ul>
        <div className="flex mt-[2em]  items-center justify-between text-white">
          <span className="font-light">
            Music <span className="font-bold">3</span>
          </span>
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <ul className="space-y-6 mt-[2em]">
          <li className="flex  items-center  hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Albums</span>
          </li>
          <li className="flex  items-center  hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faMusic}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Song</span>
          </li>
          <li className="flex  items-center  hover:bg-blue-800 hover:p-2 hover:rounded-lg duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faUser}
              className="text-white text-[1.1em]"
            />
            <span className="ml-[.8em] font-semibold text-white">Artists</span>
          </li>
        </ul>
      </div>
      <div>
        <hr  className="text-white mt-[15.2em] bottom-0"/>
        <div className="mt-[1em] flex items-center">
            <img src={profile} alt="profile" className ='w-[3em] h-[3em] mr-2 rounded-full'/>
            <div>
              <h1 className="text-sm font-bold text-white">Aimee Ganza</h1>
              <span className="text-gray-300 text-xs">Freemium Plan</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
