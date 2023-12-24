import React from 'react'

const CurrentAttendence = (
  { currentAttendence, setCurrentAttendence, requiredAttendence, setRequiredAttendence, MaxAttendenceCanSecure }
) => {
  const Max = +(MaxAttendenceCanSecure)
  return (
    <div className="current-attendence flex flex-col">
      <div className='' >
        <div className="mb-4">
          <label className="text-lg font-bold w-[60%]">Attended Classes</label>
          <input type="number" value={currentAttendence.attended} onChange={(e) => setCurrentAttendence({ ...currentAttendence, attended: parseInt(e.target.value) })} className="border border-gray-300 rounded-md px-2 py-1" />
        </div>
        {
          currentAttendence.attended === null && <p className="text-red-500 text-xs">* please enter attended classes</p>
        }
      </div>
      <div className='' >
        <div className="mb-4">
          <label className="text-lg font-bold w-[60%]">Total Classes</label>
          <input type="number" value={currentAttendence.total} onChange={(e) => setCurrentAttendence({ ...currentAttendence, total: parseInt(e.target.value) })} className="border border-gray-300 rounded-md px-2 py-1" />
        </div>
        {
          currentAttendence.total === null && <p className="text-red-500 text-xs">* please enter total classes</p>
        }
        {
          currentAttendence.total < currentAttendence.attended && currentAttendence.total != null && <p className="text-red-500 text-xs">*  Total classes should be greater than attended classes</p>
        }
      </div>
      <div className='' >
        <div>
          <label className="text-lg font-bold w-[60%]">Required Attendence</label>
          <input type="number" value={requiredAttendence} max={Max.toFixed(0)} onChange={(e) => setRequiredAttendence(parseInt(e.target.value))} className="border border-gray-300 rounded-md px-2 py-1" />
          <span>%</span>
        </div>
        {
          requiredAttendence > Max && <p className="text-red-500 text-xs">* please enter less than {Max.toFixed(0)}%</p>
        }
      </div>
    </div>
  )
}

export default CurrentAttendence