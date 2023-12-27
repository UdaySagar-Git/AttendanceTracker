import React from 'react'

const AttendencePrint = (
  {
    currentAttendence,
    MaxAttendenceCanSecure,
    requiredAttendence
  }
) => {
  return (
    // currentAttendence.attended!=null && currentAttendence.total!=null && currentAttendence.attended!=NaN  && currentAttendence.total!=null &&
    <div className="flex flex-col ">
      <h1 className="text-center text-xl mb-4">Your current Attendance is <span className="text-2xl">{(currentAttendence.attended * 100 / currentAttendence.total).toFixed(2)}%</span></h1>
      {MaxAttendenceCanSecure < requiredAttendence && <h1 className="text-red-500 text-center">You can&apos;t secure {requiredAttendence}% attendance</h1>}
    </div>
  )
}

export default AttendencePrint