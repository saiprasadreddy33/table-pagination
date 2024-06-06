import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import SearchInput from '../common/IconSearchBox';
import DropsDownFilter from '../button/DropsDownFilter';
import { table1 } from '@/app/static data/table';
import { FaTimes } from 'react-icons/fa';

const RadioSwitch = ({ applyChanges, resetToDefault }) => {
    const [selectedOption, setSelectedOption] = useState('name');
    const services = table1.map(data => data.service);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="p-4">
            <div className="flex items-center mb-4">
                <label className="inline-flex items-center mr-4 cursor-pointer">
                    <input
                        type="radio"
                        className="hidden"
                        name="searchOption"
                        value="name"
                        checked={selectedOption === 'name'}
                        onChange={handleOptionChange}
                    />
                    <span
                        className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${selectedOption === 'name' ? 'bg-black border-black' : 'bg-white border-black'
                            }`}
                    >
                        {selectedOption === 'name' && (
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        )}
                    </span>
                    <span className="ml-2 text-gray-700">Search by Name</span>
                </label>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="radio"
                        className="hidden"
                        name="searchOption"
                        value="tags"
                        checked={selectedOption === 'tags'}
                        onChange={handleOptionChange}
                    />
                    <span
                        className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${selectedOption === 'tags' ? 'bg-black border-black' : 'bg-white border-black'
                            }`}
                    >
                        {selectedOption === 'tags' && (
                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                        )}
                    </span>
                    <span className="ml-2 text-gray-700">Search by Tags</span>
                </label>
            </div>

            {selectedOption === 'name' ? (
                <div className="mt-4 p-4">
                    {/* Your Search by Name Component */}
                    <SearchByName onChange={value => console.log(value)} />
                </div>
            ) : (
                <div className="mt-4 p-4">
                    {/* Your Search by Tags Component */}
                    <SearchByTags services={services} />
                </div>
            )}
        </div>
    );
};

const SearchByName = ({ onChange }) => {
    const [searchState, setsearchState] = useState('');
    const [selectedCriteria, setSelectedCriteria] = useState('');
    const handleSearch = (e) => {
        const value = e ? e.target.value : '';
        setsearchState(value);
        onChange(value);
    };
    const handleClearSearch = () => {
        setsearchState('');
        setSelectedCriteria('');
        onChange('');
    };
    const handleSearchCriteriaChange = (criteria) => {
        setsearchState('');
        setSelectedCriteria(criteria);
        onChange('');
    };
    return (
        <div className="flex items-center">
            <SearchInput
                value={searchState}
                placeholder={'Search Service'}
                onChange={handleSearch}
            />
            {selectedCriteria && (
                <div className="ml-2 flex items-center">
                    <span className="text-gray-600">{selectedCriteria}</span>
                    <button className="ml-1" onClick={handleClearSearch}>
                        <FaTimes className="text-gray-600" />
                    </button>
                </div>
            )}
            <div className="ml-auto">
                <button
                    className="text-gray-600 focus:outline-none"
                    onClick={() => handleSearchCriteriaChange('Service')}
                >
                    Service
                </button>
            </div>
        </div>
    );
};

const SearchByTags = ({ services }) => {
    const options = ['Show All', 'Public', 'Private', 'Disable', 'Draft'];
    const [selectedService, setSelectedService] = useState('');

    const handleServiceChange = (service) => {
        setSelectedService(service);
    };

    return (
        <div className='flex flex-col gap-2 w-full'>
            <div>
                <span className='text-[12px text-[#000000]'>Service Type</span>
                <div className="relative">
                    <div className="relative z-10">
                        <DropsDownFilter
                            label="Select Service Type"
                            options={services}
                            IconComponent={MdKeyboardArrowDown}
                            onChange={handleServiceChange}
                        />
                    </div>
                    {selectedService && (
                        <div className="fixed top-0 left-0 bottom-0 right-0 z-0">
                            <div className="absolute top-full left-0 w-full h-[232px] bg-white shadow-lg overflow-y-auto border border-gray-200">
                                {services.map((service, index) => (
                                    <div key={index} className="p-2 cursor-pointer hover:bg-gray-100">
                                        <span>{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <span className='text-[12px text-[#000000]'>Status</span>
                <DropsDownFilter
                    label="Select Service Type"
                    options={options}
                    IconComponent={MdKeyboardArrowDown}
                />
            </div>

        </div>
    )
}

export default RadioSwitch;
