// components/DatePickerComponent.js
import React, { useState } from 'react';

import {DatePicker} from "@nextui-org/date-picker";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="w-full flex gap-2 justify-around mt-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          From:
        </label>
        <div>
          <DatePicker
            className="max-w"
            onChange={handleStartDateChange}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          To:
        </label>
        <div>
          <DatePicker
            className="max-w"
            onChange={handleEndDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponent;