import React from 'react'

const DateRange = ({ dateRange, setDateRange }) => {
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

  const isToday = (date = new Date()) => {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }
  const isTommorow = () => {
    const date = new Date();
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    return [
      tomorrow.getFullYear(),
      padTo2Digits(tomorrow.getMonth() + 1),
      padTo2Digits(tomorrow.getDate()),
    ].join('-');
  }

  return (
    <div className="date-range flex flex-col">
      <div className="mb-4 w-[280px] flex items-center justify-between">
        <div className='flex flex-col justify-start'>
          <label className="font-semibold mr-3">Start Date</label>
          {
            dateRange.startDate === isToday() && (
              <p className="text-black text-sm">(today)</p>
            )
          }
          {
            dateRange.startDate === isTommorow() && (
              <p className="text-black text-sm">(tomorrow)</p>
            )
          }
        </div>
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