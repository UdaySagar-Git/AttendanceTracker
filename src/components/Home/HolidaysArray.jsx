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
    <div>
      <h1>Public Holidays</h1>
      <input type="date" value={newHoliday} onChange={(e) => setNewHoliday(e.target.value)} />
      <button onClick={handleDateChange}>Add Holiday</button>
      <ul>
        {holidayArray.map((holiday, index) => (
          <li key={index}>
            {holiday.Date[0]}/{holiday.Date[1]}/{holiday.Date[2]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolidaysArray;