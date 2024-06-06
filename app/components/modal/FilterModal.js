import React, { useState } from 'react'
import { FaHome, FaUser, FaCog } from 'react-icons/fa'
import PrimaryBtn from '../button/PrimaryBtn'
import SecondaryButton from '../button/SecondaryBtn'
import ScheduleTab from '../tabs/ScheduleTab'
import SearchPayer from '../tabs/SearchPayer'
import RadioSwitch from '../tabs/RadioSwitch'

const FilterModal = () => {
  const [activeTab, setActiveTab] = useState('tab1')
  const [applyChanges, setApplyChanges] = useState(false)
  const [resetDefault, setResetDefault] = useState(false)

  const handleApply = () => {
    console.log('Applying changes...')
    setApplyChanges(true)
  }

  const handleResetToDefault = () => {
    console.log('Resetting to default...')
    setResetDefault(true)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <ScheduleTab
            applyChanges={applyChanges}
            resetDefault={resetDefault}
          />
        )
      case 'tab2':
        return (
          <SearchPayer
            applyChanges={applyChanges}
            resetDefault={resetDefault}
          />
        )
      case 'tab3':
        return (
          <RadioSwitch
            applyChanges={applyChanges}
            resetDefault={resetDefault}
          />
        )
      default:
        return null
    }
  }

  const handleTabClick = tab => {
    setActiveTab(tab)
    setApplyChanges(false)
    setResetDefault(false)
  }

  return (
    <div className='flex flex-col h-[70vh] w-full  lg:w-[600px] md:w-[500px] w-[300px]'>
      <div className='flex flex-1'>
        <div className='w-4/10 bg-gray-100 p-4'>
          <div className='flex flex-col space-y-4'>
            <button
              className={`flex items-center p-2 rounded ${
                activeTab === 'tab1' ? 'bg-gray-300' : ''
              }`}
              onClick={() => handleTabClick('tab1')}
            >
              <FaHome className='mr-2' /> Schedule Date
            </button>
            <button
              className={`flex items-center p-2 rounded ${
                activeTab === 'tab2' ? 'bg-gray-300' : ''
              }`}
              onClick={() => handleTabClick('tab2')}
            >
              <FaUser className='mr-2' /> People
            </button>
            <button
              className={`flex items-center p-2 rounded ${
                activeTab === 'tab3' ? 'bg-gray-300' : ''
              }`}
              onClick={() => handleTabClick('tab3')}
            >
              <FaCog className='mr-2' /> Service / Product
            </button>
          </div>
        </div>
        <div className='flex-1 p-4'>{renderContent()}</div>
      </div>
      <div className='flex items-center justify-end p-2 border-t bg-gray-100 gap-2'>
        <SecondaryButton onClick={handleResetToDefault}>
          Reset To Default
        </SecondaryButton>
        <PrimaryBtn onClick={handleApply}>Apply</PrimaryBtn>
      </div>
    </div>
  )
}

export default FilterModal
