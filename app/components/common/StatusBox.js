import React from 'react'
import ItemBox from './ItemBox'

const StatusBox = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-4 w-full max-w-md md:max-w-full ">
      <ItemBox heading="All Waitlist" subheading="100" />
      <ItemBox heading="Newly Added" subheading="50" />
      <ItemBox heading="Leads" subheading="20" />
    </div>
  )
}

export default StatusBox