import React, { useState } from 'react';

const HolidaysArray = ({ holidayArray, setHolidayArray }) => {

  const [newHoliday, setNewHoliday] = useState('');

  const handleDateChange = () => {
    if (newHoliday === '') return;
    const currentDate = new Date(newHoliday);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const tempResultArray = [...holidayArray];
    tempResultArray.push({
      Date: [
        currentDate.getDate(),
        currentDate.getMonth() + 1,
        currentDate.getFullYear(),
        dayOfWeek
      ],
      ClassesCount: 0,
      AttendCount: 0
    });

    setHolidayArray(tempResultArray);
    setNewHoliday('');
  };

  return (
    <div className="md:mt-10 w-full">
      <h1 className="text-2xl font-semibold mb-4 ml-6">Holiday List</h1>
      <div className='border shadow-lg border-black p-3 rounded-xl flex flex-col  justify-center items-center '>
        <div className="flex items-center mb-4 ">
          <input type="date" value={newHoliday} onChange={(e) => setNewHoliday(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md mr-2" />
          <button onClick={handleDateChange} className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold p-2 rounded-lg">Add Holiday</button>
        </div>
        <ul className="text-center">
          {holidayArray.map((holiday, index) => (
            <li key={index} className="mb-2">
              {holiday.Date[0]}/{holiday.Date[1]}/{holiday.Date[2]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HolidaysArray;