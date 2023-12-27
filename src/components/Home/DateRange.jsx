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

  const isEndOfThisMonth = () => {
    const date = new Date();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return [
      lastDayOfMonth.getFullYear(),
      padTo2Digits(lastDayOfMonth.getMonth() + 1),
      padTo2Digits(lastDayOfMonth.getDate()),
    ].join('-');
  }

  //todo : change this to sem end date from db

  const isSemEnd = () => {
    return "2024-01-06"
  }

  return (
    <div className="date-range flex flex-col ">
      <div className="mb-4 max-w-[280px] flex justify-between ">
        <label className="font-semibold mr-2 md:mr-7 mt-2">Start Date :</label>
        <div>

          <input
            type="date"
            value={dateRange.startDate}
            onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
            className="border border-gray-300 rounded-md px-2"
          />
          <div className='flex  mt-2 gap-2'>
            <button
              onClick={() => setDateRange({ ...dateRange, startDate: isToday() })}
              className={dateRange.startDate === isToday() ? "border border-gray-300 rounded-md px-1 text-sm bg-gray-300" : "border border-gray-300 rounded-md px-1 text-sm"}
            >
              Today
            </button>
            <button
              onClick={() => setDateRange({ ...dateRange, startDate: isTommorow() })}
              className={dateRange.startDate === isTommorow() ? "border border-gray-300 rounded-md px-1 text-sm bg-gray-300" : "border border-gray-300 rounded-md px-1 text-sm"}
            >
              Tomorrow
            </button>
          </div>
        </div>
      </div>
      <div className="mb-4 max-w-[280px] flex justify-between ">
        <label className="font-semibold mr-2 md:mr-7 mt-2">End Date :</label>
        <div>
          <input
            type="date"
            value={dateRange.endDate}
            onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
            className="border border-gray-300 rounded-md px-2"
          />
          <div className='flex  mt-2 gap-2'>
            <button
              onClick={() => setDateRange({ ...dateRange, endDate: isEndOfThisMonth() })}
              className={dateRange.endDate === isEndOfThisMonth() ? "border border-gray-300 rounded-md px-1 text-sm bg-gray-300" : "border border-gray-300 rounded-md px-1 text-sm"}
            >
              Month End
            </button>
            <button
              onClick={() => setDateRange({ ...dateRange, endDate: isSemEnd() })}
              className={dateRange.endDate === isSemEnd() ? "border border-gray-300 rounded-md px-1 text-sm bg-gray-300" : "border border-gray-300 rounded-md px-1 text-sm"}
            >
              Sem End
            </button>
          </div>
        </div>
      </div>
      {dateRange.endDate === null && (
        <p className="text-red-500 text-xs">* please select end date</p>
      )}
    </div>
  );
};

export default DateRange