import React from 'react'

const DateRange = (
  {
    dateRange,
    setDateRange
  }
) => {
  return (
    <div className="date-range flex flex-col">
      <div className="mb-4">
        <label className="text-lg">Start Date</label>
        <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })} className="border border-gray-300 rounded-md p-2" />
      </div>
      <div className="mb-4">
        <label className="text-lg">End Date</label>
        <input type="date" required onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })} className="border border-gray-300 rounded-md p-2" />
      </div>
      {
        dateRange.endDate === null && <p className="text-red-500 text-xs">* please select end date</p>
      }
    </div>
  )
}

export default DateRange