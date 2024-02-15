import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { MdDelete } from "react-icons/md";

const HolidaysArray = ({ holidayArray, setHolidayArray, handleDeleteHoliday }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false)
  const handleSave = async () => {
    setToggle(!toggle)
    await axios.post('/api/update-holidays',  {holidayArray} );
    // router.refresh()
  }
  const [newHoliday, setNewHoliday] = useState('');

  const handleDateChange = () => {
    if (newHoliday === '') return;

    const currentDate = new Date(newHoliday);

    // console.log(newHoliday); //2023-12-29
    // console.log(dateRange); //{ "startDate": "2024-01-01", "endDate": "2024-01-07" }

    // const startDate = new Date(dateRange.startDate);
    // const endDate = new Date(dateRange.endDate);

    // if (currentDate < startDate || currentDate > endDate) {
    //   alert('Please select a date within the date range');
    //   return;
    // }

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const tempResultArray = [...holidayArray];
    const newHolidayDate = {
      Date: [
        currentDate.getDate(),
        currentDate.getMonth() + 1,
        currentDate.getFullYear(),
        dayOfWeek
      ],
      title: "Holiday",
      dateTime : currentDate,
      isPublic : false
    }

    //check if this new holiday already exists
    const existingHoliday = holidayArray.find(holiday => holiday.Date[0] === newHolidayDate.Date[0] && holiday.Date[1] === newHolidayDate.Date[1] && holiday.Date[2] === newHolidayDate.Date[2]);
    if (existingHoliday) {
      alert('This date already exists');
      return;
    }

    tempResultArray.push(newHolidayDate)
    //sort before setting
    tempResultArray.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    setHolidayArray(tempResultArray);
    setNewHoliday('');
  };


  return (
    <div className="md:mt-8 w-full flex flex-col gap-4">
      <div className='flex flex-wrap justify-center xl:justify-start'>
        <h1 className="text-2xl font-semibold ml-6">Holiday List</h1>
        {!toggle ?
          <button onClick={() => setToggle(!toggle)} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg' >Edit</button>
          : <button onClick={handleSave} className='bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold py-1 px-3 mx-4 rounded-lg'>Save</button>
        }
      </div>
        {toggle &&
          <div className="flex items-center mb-2 flex-wrap gap-1 sm:gap-2 justify-center  bg-white">
            <input type="date" value={newHoliday} onChange={(e) => setNewHoliday(e.target.value)} className="px-2 sm:px-4 py-1 sm:py-2 border border-gray-300 rounded-md mr-2" />
            <button onClick={handleDateChange} className="bg-gray-950 hover:bg-gray-800 text-white text-sm font-semibold p-2 rounded-lg">Add Holiday</button>
          </div>
        }
      <div className='border shadow-lg border-black px-1 py-3 sm:p-3 rounded-xl  justify-center items-center max-h-[300px] overflow-y-scroll'>
        <ul className="w-full px-2">
          {
            holidayArray?.length === 0 && <p className='text-center'>No Holidays</p>
          }
          {holidayArray
            .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
            .map((holiday, index) => (
              <li key={index} className="mb-2 flex justify-between">
                <span className={`w-[90px] ${!holiday.isPublic ? 'text-red-500' : 'text-gray-500'}`}>{holiday.Date[0]}/{holiday.Date[1]}/{holiday.Date[2]}</span>
                {
                  !toggle &&
                  <span className="font-semibold max-w-[200px] overflow-hidden whitespace-nowrap ">{holiday.title}</span>
                }
                {toggle &&
                  <div className='flex justify-between'>
                    <input type="text" value={holiday.title} onChange={(e) => {
                      const tempResultArray = [...holidayArray];
                      tempResultArray[index].title = e.target.value;
                      setHolidayArray(tempResultArray);
                    }} className="px-1 sm:px-2 max-w-[130px] sm:max-w-[180px] border border-gray-300 rounded-md mr-1 sm:mr-2" />

                    {/* <button onClick={(e) => { e.preventDefault(); handleDeleteHoliday(index) }} className="hidden sm:block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-2 rounded-lg ml-2">Delete</button> */}
                    <button onClick={(e) => { e.preventDefault(); handleDeleteHoliday(index) }} className=" bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-2 rounded-lg "><MdDelete /></button>
                  </div>
                }
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HolidaysArray;