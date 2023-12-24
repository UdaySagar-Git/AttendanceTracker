import React from 'react'

const DateRange = (
  {
    dateRange,
    setDateRange
  }
) => {
  return (
    <div className="date-range">
      <div>
        <label>Start Date</label>
        <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })} />
      </div>
      <div>
        <label>End Date</label>
        <input type="date" required onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })} />
      </div>
      {
        dateRange.endDate === null && <p className="text-red-500 text-xs">* please select end date</p>
      }
    </div>
  )
}


export default DateRange