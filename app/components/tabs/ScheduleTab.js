import React from 'react'
import DropsDownFilter from '../button/DropsDownFilter'
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePickerComponent from '../DatePickerComp'
import useTable from '../filter/hooks/useTable';

const ScheduleTab = () => {
    const options = ['All', 'Custom', 'Last 30 days','This month','This quarter','2 quarter ago','This Year','Last Year'];
  return (
    <div className='p-2'>
        <p className='text-[12px] text-[#334155] mb-1'>Show Orders For</p>
        <DropsDownFilter
            label="All Time" 
            options={options} 
            IconComponent={MdKeyboardArrowDown} 
        />
        <DatePickerComponent/>
    </div>
  )
}

export default ScheduleTab