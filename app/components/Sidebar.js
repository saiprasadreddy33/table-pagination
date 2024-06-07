"use client"

import React, { useState } from 'react';
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineRectangle } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import Image from 'next/image';
import Search from './common/Search';
import TimeZoneBox from './common/TimeZoneBox';
import { sidebar1 } from '../static data/sidebar';
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import { FaChevronDown } from 'react-icons/fa';
import useSidebar from './hooks/useSidebar';
import { useAppContext } from '../provider/AppContext';

const Sidebar = () => {

  const {isCollapsed, handleSidebar} = useAppContext()
  const [searchSidebar, setsearchSidebar] = useState('')
  const [showEmail, setShowEmail] = useState(false);

  const handleSearch = (e) => { 
    let value = e ? e.target.value : ''
    setsearchSidebar(value)
  }

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  }
 
  return (
    <div className="flex flex-col h-screen">
      <div className={`${isCollapsed ? 'w-15' : 'w-64'} bg-[#F8FAFC]  p-4 fixed top-0`}>
        <div className={`${!isCollapsed ? 'flex justify-between items-center' : ''}`}>
          <div className={`${!isCollapsed ? ' flex gap-2 text-[#000000] flex justify-start items-center' : ''}`}>
            <div className="relative w-10 h-10 cursor-pointer" onClick={handleSidebar}>
              <Image src="/assets/Logo.png" alt="Logo" width={40} height={40} />
            </div>
            {!isCollapsed && <h2 className='font-bold text-[#000000]'>Front-Desk</h2>}
          </div>
          {!isCollapsed &&
            <div className="flex cursor-pointer w-4 h-4 border-2 border-[#2222229e] rounded-sm" onClick={handleSidebar}>
              <div className="flex-1 bg-transparent"></div>
              <div className="flex-1 bg-[#2222229e]"></div>
            </div>
          }
        </div>
        <div className='mt-4'>
          {
            isCollapsed ?
              <MdCompareArrows size={25} color='#000000' /> :
              <Search
                placeholder={'Location Name'}
                icon={MdCompareArrows}
                value={searchSidebar}
                onChange={handleSearch}
                fullWidth={false}
              />
          }
          <TimeZoneBox
            isCollapsed={isCollapsed}
          />
        </div>
        <ul className="space-y-4 pt-4">
          {sidebar1.map((item) => (
            <li key={item.id} className="flex items-center">
              <span className="text-2xl">{item.icons}</span>
              {!isCollapsed && <span className="ml-4 text-[#000000]">{item.list}</span>}
            </li>
          ))}
        </ul>

      </div>
      <div className="p-4 border border-gray-300 rounded-lg shadow-lg w-50 bg-[#F1F5F9]"></div>
      <div className='text-[#000000] mt-auto bg-[#F8FAFC] fixed bottom-0' >
        <div className={`flex items-center justify-between p-4  my-2`}>
          <div className="flex items-center ">
            <MdOutlineSpaceDashboard size={25} color='#000000' />
            {!isCollapsed && <span className="text-[#000000]">             Dashboard</span>}
          </div>
          {!isCollapsed && <CiShare1 size={25} color='#000000' />}
        </div>
        <div className="flex items-center p-4 max-w-md" onClick={toggleEmail}>
          <div className="relative w-6 h-6">
            <Image src="/assets/admin-profile.png" alt="Admin Profile" width={35} height={35} className="rounded-full" />
          </div>
          {!isCollapsed &&
            <div className="ml-4 flex-grow">
              <div className="text-base">Admin Name</div>
              {showEmail && <div className="text-sm text-gray-600">admin@example.com</div>}
            </div>}
          {!isCollapsed && <FaChevronDown size={16} color='#000000' />}
        </div>
        <div className="flex items-center  p-4  max-w-md">
          <CiCircleQuestion size={25} color='#000000' />
          {!isCollapsed &&
            <div className="ml-4 flex-grow">
              <div className="text-base">Help center</div>
              <div className="text-sm text-gray-600">@2024 Omnify.Inc.</div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
