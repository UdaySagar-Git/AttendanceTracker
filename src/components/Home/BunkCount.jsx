import React from 'react'

const BunkCount = (
  {
    currentAttendence,
    attendCount,
    dateRange,
    result

  }
) => {
  return (
    <div className="flex flex-col justify-center mt-5">
      <div className="text-center">
        <h1 className="text-base md:text-xl">If you won&apos;t skip any class then your attendance will be</h1>
        <span className="text-xl md:text-2xl font-bold">{((currentAttendence.attended + attendCount.totalWillAttendedClasses) * 100 / (currentAttendence.total + attendCount.totalClassesTillEndDate)).toFixed(2)}%</span>
      </div>

      {/* Attendance Count */}
      <div className="mt-8 text-center">
        <h1 className="text-base md:text-xl">You can skip <span className="text-xl md:text-2xl font-bold">{result}</span> more classes till the selected date <span className="text-xl md:text-2xl font-bold">{dateRange.endDate}</span> in order to maintain your attendance <span className="text-xl md:text-2xl font-bold">
          {((currentAttendence.attended + attendCount.totalWillAttendedClasses - result) * 100 / (currentAttendence.total + attendCount.totalClassesTillEndDate)).toFixed(2)}%
        </span></h1>
      </div>

      <hr className="my-8" />
      {/* Note  */}

      {/* <div>
        <h1>Note</h1>
        <ul>
          <li>
            <p>Please use this application at your own risk! I won't be responsible for any of the consequences you face.</p>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default BunkCount