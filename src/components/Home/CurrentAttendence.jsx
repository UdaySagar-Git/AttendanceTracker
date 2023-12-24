import React from 'react'

const CurrentAttendence = (
  { currentAttendence, setCurrentAttendence, requiredAttendence, setRequiredAttendence, MaxAttendenceCanSecure }
) => {
  const Max = +(MaxAttendenceCanSecure)
  return (
    <div className="current-attendence">
      <div>
        <label>Attended Classes</label>
        <input type="number" value={currentAttendence.attended} onChange={(e) => setCurrentAttendence({ ...currentAttendence, attended: parseInt(e.target.value) })} />
      </div>
      {
        currentAttendence.attended === null && <p className="text-red-500 text-xs">* please enter attended classes</p>
      }
      <div>
        <label>Total Classes</label>
        <input type="number" value={currentAttendence.total} onChange={(e) => setCurrentAttendence({ ...currentAttendence, total: parseInt(e.target.value) })} />
      </div>
      {
        currentAttendence.total === null && <p className="text-red-500 text-xs">* please enter total classes</p>
      }
      {
        currentAttendence.total < currentAttendence.attended && currentAttendence.total != null && <p className="text-red-500 text-xs">*  Total classes should be greater than attended classes</p>
      }
      <div>
        <label>Required Attendence</label>
        <input type="number" value={requiredAttendence} max={Max.toFixed(0)} onChange={(e) => setRequiredAttendence(parseInt(e.target.value))} />
        <span>%</span>
        {
          requiredAttendence > Max && <p className="text-red-500 text-xs">* please enter less than {Max.toFixed(0)}%</p>
        }
      </div>
    </div>
  )
}

export default CurrentAttendence