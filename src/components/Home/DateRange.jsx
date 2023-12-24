import React from 'react'

const DateRange = ({ dateRange, setDateRange }) => {
  return (
    <div className="date-range flex flex-col">
      <div className="mb-4 w-[280px] flex items-center justify-between">
        <label className="font-semibold mr-3">Start Date</label>
        <input
          type="date"
          value={dateRange.startDate}
          onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      <div className="mb-4 w-[280px] flex items-center justify-between">
        <label className="font-semibold mr-3">End Date</label>
        <input
          type="date"
          required
          onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
          className="border border-gray-300 rounded-md px-2"
        />
      </div>
      {dateRange.endDate === null && (
        <p className="text-red-500 text-xs">* please select end date</p>
      )}
    </div>
  );
};

export default DateRange