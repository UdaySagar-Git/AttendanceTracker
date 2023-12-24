import React from 'react'

const DateArray = (
  {
    dateArray,
    setDateArray,
    attendCount,
    handleChangeClassCount
  }
) => {
  return (
    <div className="flex gap-4 items-center">
      {dateArray.length > 0 &&
        <div className="px-2">
          <div>Date</div>
          <div>Day</div>
          <div>Total Classes : {attendCount.totalClassesTillEndDate}</div>
          <div>Will Attended : {attendCount.totalWillAttendedClasses}</div>
        </div>}
      <div>
        {dateArray.length > 0 && (
          <div className="flex ">
            {dateArray.map((item, index) => (
              <div key={index} className="w-14 flex flex-col justify-center items-center">
                {/* <div>{`${item.Date[0]}/${item.Date[1]}/${item.Date[2]} `}</div> */}
                <div
                  className={
                    `border border-gray-400 rounded-full w-8 text-center
                  ${item.AttendCount == 0 && item.ClassesCount !== 0 ? "bg-red-500 text-white" : ""}
                  ${item.ClassesCount == 0 ? "bg-neutral-600 text-white" : ""}
                  ${item.ClassesCount == item.AttendCount && item.ClassesCount != 0 ? "bg-green-500 text-white" : ""}
                  ${item.ClassesCount != item.AttendCount && item.ClassesCount != 0 && item.attendCount != 0 ? "bg-yellow-500 text-white" : ""}
                 `}

                >
                  {item.Date[0]}</div>
                <div>{item.Date[3]}</div>
                <div onClick={() => handleChangeClassCount(index)}>{item.ClassesCount}</div>
                {/* <div onClick={() => (index)}>{item.AttendCount}</div> */}

                <div className="will-attend">
                  <input type="number" max={item.ClassesCount} min={0} value={item.AttendCount} onChange={(e) => {
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