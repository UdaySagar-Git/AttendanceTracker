import React from 'react'
import { useEffect } from 'react';

const DateArray = (
  {
    dateArray,
    setDateArray,
    attendCount,
    handleChangeClassCount,
  }
) => {
  return (
    <div className={`flex gap-4 flex-col md:flex-row max-h-[349px]  md:max-h-[210px] overflow-y-auto overflow-x-hidden  ${dateArray.length > 0 && " border shadow-lg border-black p-3 pt-0 rounded-xl"}`}>
      {dateArray.length > 0 &&
        <div className="px-2 pt-3 hidden md:block sticky top-0">
          <div className="text-sm font-semibold mb-2">Date</div>
          <div className="text-sm font-semibold mb-2">Day</div>
          <div className="text-sm font-semibold mb-1 w-[130px] flex justify-between ">
            <span className=''>Total Classes</span>
            <span className=''>

              : {attendCount.totalClassesTillEndDate}
            </span>
          </div>
          <div className="text-sm font-semibold  flex justify-between ">
            <span className=''>Will Attend</span>
            <span className=''>
              : {attendCount.totalWillAttendedClasses}
            </span>
          </div>
        </div>
      }
      {/* small screen */}
      {dateArray.length > 0 &&
        <div className="px-2 md:hidden flex justify-around items-center sticky top-0 bg-white pt-3">
          <div className="text-sm font-semibold  flex justify-between ">
            <span className=''>Total Classes</span>
            <span className=''>

              : {attendCount.totalClassesTillEndDate}
            </span>
          </div>
          <span>|</span>
          <div className="text-sm font-semibold  flex justify-between ">
            <span className=''>Will Attend</span>
            <span className=''>
              : {attendCount.totalWillAttendedClasses}
            </span>
          </div>
        </div>
      }
      <div>
        {dateArray.length > 0 && (
          <div className="flex flex-wrap  justify-center md:justify-start md:pt-3">
            {dateArray.map((item, index) => (
              <div key={index} className="w-14 flex flex-col justify-center items-center">
                {/* <div>{`${item.Date[0]}/${item.Date[1]}/${item.Date[2]} `}</div> */}
                <div
                  className={
                    `border border-gray-400 rounded-full w-8 text-center 
                    ${item.ClassesCount == 0 && item.AttendCount == 0 && "bg-neutral-600 text-white"}
                    ${item.ClassesCount != item.AttendCount && item.ClassesCount != 0 && item.AttendCount != 0 && "bg-yellow-500 text-white"}
                    ${item.ClassesCount == item.AttendCount && item.ClassesCount != 0 && "bg-green-500 text-white"}
                    ${item.ClassesCount != 0 && item.AttendCount == 0 && "bg-red-500 text-white"} 
                 `}

                >
                  {item.Date[0]}</div>
                <div>{item.Date[3]}</div>
                <div onClick={() => handleChangeClassCount(index)} className='cursor-pointer'>{item.ClassesCount}</div>
                {/* <div onClick={() => (index)}>{item.AttendCount}</div> */}

                {/* <div>
                  <input type="number" min={0} value={item.ClassesCount} onChange={(e) => {
                    const val = e.target.value;
                    const tempDateArray = [...dateArray];
                    tempDateArray[index].ClassesCount = val;
                    setDateArray(tempDateArray);
                  }} className='w-[100px] mx-2' />
                </div> */}

                <div className='max-w-fit'>
                  <input type="number" max={item.ClassesCount} min={0} value={item.AttendCount} className='w-[40px] text-center ' onChange={(e) => {
                    const val = e.target.value;
                    // handleAttendCountChange(index,val)
                    const tempDateArray = [...dateArray];
                    tempDateArray[index].AttendCount = val;
                    setDateArray(tempDateArray);
                  }} />
                </div>

              </div>)
            )}
          </div>
        )}
      </div>
    </div>

  )
}

export default DateArray