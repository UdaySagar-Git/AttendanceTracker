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
    <div>
      <div>
        <h1>If you wont skip any class then your attendece will be
          <span className="text-2xl ">{((currentAttendence.attended + attendCount.totalWillAttendedClasses) * 100 / (currentAttendence.total + attendCount.totalClassesTillEndDate)).toFixed(2)} %</span>
        </h1>
      </div>

      {/* Attence Count */}
      <div>
        <h1>You can skip <span className="text-2xl ">{result}</span> more classes till the selected date <span className="text-2xl ">{dateRange.endDate}</span> in order to maintain your attendence <span className="text-2xl ">{
          ((currentAttendence.attended + attendCount.totalWillAttendedClasses - result) * 100 / (currentAttendence.total + attendCount.totalClassesTillEndDate)).toFixed(2)
        }%</span></h1>
      </div>

      <hr />
      {/* Note  */}

      {/* <div>
        <h1>Note</h1>
        <ul>
          <li>
            <p>Please use this application at your own risk ! and I wont be responsible for any of the consequences you face</p>
            
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default BunkCount